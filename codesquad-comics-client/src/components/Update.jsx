function Update() {
    return (
        <div>
            <main>
         <div class="container">
        <h1>Update Comic</h1>
        <form>
            <label htmlFor="booktitle">Title:</label>
            <input type="text" id="booktitle" name="booktitle" placeholder="Title value stored in database" /><br />

            <label htmlFor="bookauthor">Author:</label>
            <input type="text" id="bookauthor" name="bookauthor" placeholder="Author value stored in database" /><br />

            <label htmlFor="bookpublisher">Publisher:</label>
            <select id="bookpublisher" name="bookpublisher">
                <option value="Select" selected disabled>publisher value stored in database</option>
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
            <input type="text" id="bookgenre" name="bookgenre" placeholder="genre data stored in databas" /><br />

            <label htmlFor="pagecount">Nunber of Pages:</label>
            <input type="number" id="pagecount" name="pagecount" placeholder="255" /><br />

            <label htmlFor="bookrating">Rating:</label>
            <input type="number" min="1" max="5" id="bookrating" name="5" placeholder="" /><br />

            <label htmlFor="bookgenre">Synopsis:</label>
            <textarea type="text" id="bookgenre" name="bookgenre" placeholder="synopsis value stored in database"></textarea>
            <input type="submit" value="Submit" />
        </form>
</div>
            </main>
        </div>
    );
}

export default  Update;
