
import "./App.css";

function App() {
 

  return (
    <>
      <div className="container">
        <div className="main">
          <div className="text_box">
            <h2 className="item">About us</h2>
            <p className="item">
              In just a couple of years, we have opened 6 outlets in different
              <br />
              cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the
              <br />
              future we plan to develop the network in other major cities of
              <br />
              Russia.u
            </p>
            <img src="../public/Group 60.png" alt="" />
            <p className="item">
              The kitchen of each point is at least: 400-500 sq. m. meters,
              <br />
              hundreds of employees, smoothly performing work in order to
              <br />
              receive / prepare / form / deliver customer orders on time.
            </p>
          </div>
          <div className="img_box">
            <img
              src="../public/0d870ce523b504fe1aaa7ddadc60b8587c89c936.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <footer class="footer">
  <div class="footer-container">


    <div class="footer-col">
      <img  className="logo" src="../public/pizzashop (1).png" alt="" />
      <p className="logo1"  >+7 923 123-45-32</p>
    </div>

 
    <div class="footer-col">
      <h3>Menu</h3>
      <ul>
        <li>Home</li>
        <li>Order</li>
        <li>Pizza</li>
        <li>Menu</li>
      </ul>
    </div>


    <div class="footer-col">
      <h3>Events</h3>
      <ul>
        <li>3 Pizza for Coffee</li>
        <li>2 Pizza for 1 Price</li>
        <li>Kitchen Tour</li>
      </ul>
    </div>

   
    <div class="footer-col">
      <h3>About Us</h3>
      <ul>
        <li>Our History</li>
        <li>Why We?</li>
      </ul>
    </div>

  </div>

  
</footer>

    </>
  );
}

export default App
