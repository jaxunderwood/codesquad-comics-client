 import books from '../data/books';




 function Admin() {
    return (
        <div>
        <main>
        <div class="container">
        <div class="table_flex">
           <h1>ADMIN PAGE</h1>
    <button>ADD NEW COMIC</button>
    <table>
        <thead>
        <tr>
            <th>COMIC TITLE</th>
            <th>EDIT</th>
            <th>DELETE</th>
        </tr>
        </thead>
        <tbody>
            {books.map((book)=> (
            <tr>
                <td>{book.title}</td>
                <td><button>Edit</button></td>
                <td><button>DELETE</button></td>
            </tr>
            ))}
            {/* <tr>
                <td>Black Panther: A Nation Under Our Feet Book 1</td>
                <td><button>EDIT</button></td>
                <td><button>DELETE</button></td>
            </tr>
            <tr>
                <td>Fun Home: A Family Tragicomic</td>
                <td><button>EDIT</button></td>
                <td><button>DELETE</button></td>
            </tr>
            <tr>
                <td>Hunter X Hunter Vol. 1</td>
                <td><button>EDIT</button></td>
                <td><button>DELETE</button></td>
            </tr>
            <tr>
                <td>Lumberjanes, Vol. 1</td>
                <td><button>EDIT</button></td>
                <td><button>DELETE</button></td>
            </tr>
            <tr>
                <td>March: Book One</td>
                <td><button>EDIT</button></td>
                <td><button>DELETE</button></td>
            </tr>
            <tr>
                <td>One Piece. Vol. 1: Romance Dawn</td>
                <td><button>EDIT</button></td>
                <td><button>DELETE</button></td>
            </tr>
            <tr>
                <td>Parable of the Sower</td>
                <td><button>EDIT</button></td>
                <td><button>DELETE</button></td>
            </tr>
            <tr>
                <td>Queer: A Graphic History</td>
                <td><button>EDIT</button></td>
                <td><button>DELETE</button></td>
            </tr>
             <tr>
                <td>The Walking Dead, Vol. 1: Days Gone Bye</td>
                <td><button>EDIT</button></td>
                <td><button>DELETE</button></td>
            </tr>
             <tr>
                <td>Wake: The Hidden History of Women-led Slave Revolts</td>
                <td><button>EDIT</button></td>
                <td><button>DELETE</button></td>
            </tr>
             <tr>
                <td>Watchmen</td>
                <td><button>EDIT</button></td>
                <td><button>DELETE</button></td>
            </tr> */}
        </tbody>
    </table>
    </div>
    </div>
            </main>
        </div>
    );
}

export default Admin;
