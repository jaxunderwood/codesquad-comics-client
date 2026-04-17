import booksData from '../data/books';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";



function Update() {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        fetch(`https://course-project-codesquad-comics-server.onrender.com/api/books/${bookId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log("Here's you book", data);
                setBook(data);
            })
            .catch((error) => console.log("Fetch error:", error));

    }, [bookId]);



    const handleSubmit = (e) => {
        e.preventDefault()
        const body = {
            title: e.target.booktitle.value,
            author: e.target.bookauthor.value,
            publisher: e.target.bookpublisher.value,
            genre: e.target.bookgenre.value,
            pages: e.target.pagecount.value,
            rating: e.target.bookrating.value,
            synopsis: e.target.booksynopsis.value
        }
        console.log("Title:", e.target.booktitle.value);
        console.log("Author:", e.target.bookauthor.value);
        console.log("Publisher:", e.target.bookpublisher.value);
        console.log("Genre:", e.target.bookgenre.value);
        console.log("Pages:", e.target.pagecount.value);
        console.log("Rating:", e.target.bookrating.value);
        console.log("Update:", book);


        fetch(`https://course-project-codesquad-comics-server.onrender.com/api/books/edit/${bookId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log("Success updating record:", result);
                setBook(result);
                navigate("/admin");
            })
            .catch((error) => console.log("Update error message:", error));
    };

    return (
        <div>
            <main>
                <div className="container">
                    <h1>Update Comic</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="booktitle">Title:</label>
                        <input type="text" id="booktitle" name="booktitle" defaultValue={book.title} required /><br />

                        <label htmlFor="bookauthor">Author:</label>
                        <input type="text" id="bookauthor" name="bookauthor" defaultValue={book.author} required /><br />

                        <label htmlFor="bookpublisher">Publisher:</label>
                        <select id="bookpublisher" name="bookpublisher" required defaultValue={book.publisher}>
                            <option>publisher value stored in database</option>
                            <option value="BOOM! Box">BOOM! Box</option>
                            <option value="DC Comics">DC Comics</option>
                            <option value="Harry N. Abrams">Harry N. Abrams</option>
                            <option value="Icon Books">Icon Books</option>
                            <option value="Image Comics">Image Comics</option>
                            <option value="Marvel">Marvel</option>
                            <option value="Simon & Schuster">Simon & Schuster</option>
                            <option value="Top Shelf Productions">Top Shelf Productions</option>
                            <option value="VIZ Media LLC">VIZ Media LLC</option>
                        </select><br />
                        <label htmlFor="bookgenre">Genre:</label>
                        <input type="text" id="bookgenre" name="bookgenre" defaultValue={book.genre} required /><br />

                        <label htmlFor="pagecount">Number of Pages:</label>
                        <input type="number" id="pagecount" name="pagecount" defaultValue={book.pages} required /><br />

                        <label htmlFor="bookrating">Rating:</label>
                        <input type="number" min="1" max="5" id="bookrating" name="bookrating" defaultValue={book.rating} required /><br />

                        <label htmlFor="synopsis">Synopsis:</label>
                        <textarea type="text" id="booksynopsis" name="booksynopsis" defaultValue={book.synopsis} required ></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Update;
