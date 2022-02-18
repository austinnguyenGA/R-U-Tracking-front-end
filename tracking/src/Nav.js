import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'


function App() {
  return (
    <div className="Nav">
      <Navbar bg="info" varient="dark"
        sticky="top">
        
        <Nav>
          <Nav.Link href="Swimming">Swimming</Nav.Link>
          <Nav.Link href="Track">Track</Nav.Link>
          <Nav.Link href="Times">Olympic Trial Times</Nav.Link>
          <Nav.Link href="SignIn">Sign In</Nav.Link>
          <Nav.Link href="SignUp">Sign Up</Nav.Link>
        </Nav>


      </Navbar>
      <div className = "content">
      ®
      </div>
    </div>
  )

}


export default App;
