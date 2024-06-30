
import './App.css'
import Navbar from './layouts/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <main className={"container my-5 py-5"}>
          <div className={"row justify-content-center"}>
              <div className={"col-lg-12 mb-5"}>
                  <p className={"lead mb-2"}>
                      Hi, I'm Stephen Brooks, and I'm a
                  </p>
                  <h1 className={"display-4 fw-bold mb-4"}>React Developer</h1>
                  <p>
                      I made web applications with JavaScript, React, Html, Css, Scss, Bootstrap, Node, and Descope.
                      I'm open and available to help with open source projects and available for full-time employment
                      for
                      the right team.
                  </p>
              </div>
              <div className={"col-lg-3 col-md-6 mb-3"}>
                  <h4>Project</h4>
                  <img src="https://mastertej.com/wp-content/uploads/2021/01/mobile-responsive-design-example.jpg" className={"img-fluid"} alt="project"/>
              </div>
              <div className={"col-lg-3 col-md-6 mb-3"}>
                  <h4>Project</h4>
                  <img src="https://mastertej.com/wp-content/uploads/2021/01/mobile-responsive-design-example.jpg" className={"img-fluid"} alt="project"/>
              </div>
              <div className={"col-lg-3 col-md-6 mb-3"}>
                  <h4>Project</h4>
                  <img src="https://mastertej.com/wp-content/uploads/2021/01/mobile-responsive-design-example.jpg" className={"img-fluid"} alt="project"/>
              </div>
              <div className={"col-lg-3 col-md-6 mb-3"}>
                  <h4>Project</h4>
                  <img src="https://mastertej.com/wp-content/uploads/2021/01/mobile-responsive-design-example.jpg" className={"img-fluid"} alt="project"/>
              </div>
          </div>
      </main>
    </>
  )
}

export default App
