function Create() {
    function handleSubmit(e) {
		e.preventDefault()
    console.log("Title:", e.target.booktitle.value);
    console.log("Author:", e.target.bookauthor.value);
    console.log("Publisher:", e.target.bookpublisher.value);
    console.log("Genre:", e.target.bookgenre.value);
    console.log("Pages:", e.target.pagecount.value);
    console.log("Rating:", e.target.bookrating.value);
    console.log("Form submitted")
	}

    return (
        <div>
            <main>
     <h1>CREATE NEW COMIC</h1>
    <form  onSubmit={handleSubmit}>
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
        <input type="number" min="1" max="5"  id="bookrating" name="bookrating" placeholder="" required /><br />

        <label htmlFor="bookgenre">Synopsis:</label>
        <input type="text" id="bookgenre" name="bookgenre" placeholder="Synopsis" required /><br />
    <input type="submit" value="Submit" />
</form>
            </main>
        </div>
    );
}

export default Create;
