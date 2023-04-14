import Q1 from "../assets/q1.jpg";

export default function About() {
  return (
    <div className="About">
      <h1>About</h1>
      <img src={Q1} alt="q1" className="q1" />  
      <p>
        Welcome to our music store! We are a team of passionate music enthusiasts who are dedicated to providing our customers with the best possible experience when it comes to purchasing musical instruments, accessories, and equipment.
        <br />
        Our store has been serving the local music community for many years, and we have built a strong reputation for offering high-quality products at competitive prices. Whether you are a professional musician, a beginner, or simply looking for a gift for a music lover, we have everything you need to help you achieve your musical goals.
        <br />
        At our store, we understand that music is more than just a hobby or a pastime - it is a way of life. That is why we take pride in offering a wide selection of musical instruments and equipment, including guitars, basses, drums, keyboards, and more, from some of the most respected brands in the industry.
        <br />
        
        We also offer a range of services, including instrument repairs, rentals, and lessons, to help our customers get the most out of their musical experience. Our knowledgeable and friendly staff are always on hand to provide expert advice and guidance, whether you are looking for a new instrument or simply need some help with a repair or maintenance issue.
        <br />
        Thank you for choosing our music store for all your musical needs. We look forward to helping you on your musical journey and providing you with the best possible service and support.
      </p>
      
    </div>
  );
}