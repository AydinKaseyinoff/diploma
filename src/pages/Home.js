import "./Home.css"
export default function Home() {
  return (
    <div className="Home">
      <marquee behavior="scroll" direction="left"><img src="https://content2.rozetka.com.ua/banner_main/image/original/330997636.jpg" /></marquee>
      <marquee behavior="scroll" direction="right"><h1>Этот текст будет прокручиваться слева направо</h1></marquee>
      <marquee behavior="scroll" direction="up">Этот текст будет перемещаться вверх</marquee>
      <marquee behavior="scroll" direction="down">Этот текст будет перемещаться вверх</marquee>
    </div>
  );
}