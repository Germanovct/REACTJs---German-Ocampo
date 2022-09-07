import { Link } from "react-router-dom"


const Home =() =>{

return(
    <div>
        <body className="body d-flex h-100 text-center text-bg-dark">
    
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
        <div>
          <h3 class="float-md-start mb-0">VCT RECORDS</h3>
          
        </div>
      </header>
    
      <main className="px-3">
        <h1>Welcome to Space</h1>
        <p className="lead">Techno - Deep Techno - House - Ambient - Drone </p>
        <p className="lead">
          <Link to="/productos/todos" class="btn btn-lg btn-secondary fw-bold border-white bg-black">GO</Link>
        </p>
      </main>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    
      <footer className="footer mt-auto text-white-50">
        <p>Created by <a href="https://vctlabel.bandcamp.com/" class="text-white">VCT</a>, for <a href="https://www.instagram.com/germanodj/" className="text-white">German Ocampo</a>.</p>
      </footer>
    </div>
    
    
        
      </body>
    </div>
)

}

export default Home