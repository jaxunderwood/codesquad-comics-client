import { useNavigate } from "react-router-dom";




function Create() {
    const navigate = useNavigate();
    console.log("success");

    function handleSubmit(e) {
        e.preventDefault()
        const body = {
            title: e.target.booktitle.value,
            author: e.target.bookauthor.value,
            publisher: e.target.bookpublisher.value,
            genre: e.target.bookgenre.value,
            pages: e.target.pagecount.value,
            rating: e.target.bookrating.value
        };
        console.log("Title:", e.target.booktitle.value);
        console.log("Author:", e.target.bookauthor.value);
        console.log("Publisher:", e.target.bookpublisher.value);
        console.log("Genre:", e.target.bookgenre.value);
        console.log("Pages:", e.target.pagecount.value);
        console.log("Rating:", e.target.bookrating.value);
        console.log("Form submitted")

        fetch("https://course-project-codesquad-comics-server.onrender.com/api/books/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log("Success:", result);
                navigate("/admin");
            })
            .catch((error) => console.log("Fetch error:", error));
    }

    return (
        <div>
            <main>
                <h1>CREATE NEW COMIC</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="booktitle">Title:</label>
                    <input type="text" id="booktitle" name="booktitle" placeholder="Title" required /><br />

                    <label htmlFor="bookauthor">Author:</label>
                    <input type="text" id="bookauthor" name="bookauthor" placeholder="Author" required /><br />

                    <label htmlFor="bookpublisher">Publisher:</label>
                    <select id="bookpublisher" name="bookpublisher" required>
                        <option>Select</option>
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
                    <input type="text" id="bookgenre" name="bookgenre" placeholder="Genre" required /><br />

                    <label htmlFor="pagecount">Nunber of Pages:</label>
                    <input type="number" id="pagecount" name="pagecount" placeholder="Number of pages" required /><br />

                    <label htmlFor="bookrating">Rating:</label>
                    <input type="number" min="1" max="5" id="bookrating" name="bookrating" placeholder="" required /><br />

                    <label htmlFor="booksynopsis">Synopsis:</label>
                    <input type="text" id="booksynopsis" name="booksynopsis" placeholder="Synopsis" required /><br />
                    <input type="submit" value="Submit" />
                </form>
            </main>
        </div>
    );
}

export default Create;
