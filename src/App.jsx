import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Cards, Header, Footer } from "./components";

const textFooter = "Este sitio es solo para Adopción de Perritos (No venta, ni compra, animales perdidos, videos tiernos o chistosos, preguntas al veterinario, etc.)";
const textTitle = "Adopta un perrito";
const dogs = [
  {
    id: Date.now(),
    image:
      "https://img.freepik.com/foto-gratis/perro-pug-aislado-fondo-blanco_2829-11416.jpg",
    title: "Apollo",
    text: "Se caracterizan por su cuerpo corto y compacto, que les da un aspecto regordete y cuadrado.",
    colorButton: "primary",
    textButton: "Pug Blanco",
  },
  {
    id: Date.now()+1,
    image:
      "https://img.freepik.com/foto-gratis/lindo-golden-retriever_144627-26658.jpg",
    title: "Milka",
    text: "Son juguetones, aunque dóciles con los niños, y tienden a llevarse bien con otras mascotas y con los extraños.",
    colorButton: "warning",
    textButton: "Golden Retriever",
  },
  {
    id: Date.now()+2,
    image:
      "https://img.freepik.com/foto-gratis/primer-plano-ingles-staffordshire-bull-terrier-blanco_181624-28979.jpg",
    title: "Poseidon",
    text: "Se trata de una raza fuerte, decidida y musculosa, pero también muy leal, sobreprotectora y cariñosa.",
    colorButton: "danger",
    textButton: "Bull Terrier",
  },
  {
    id: Date.now()+3,
    image: "https://img.freepik.com/foto-gratis/perro-blanco_95678-1.jpg",
    title: "Kira",
    text: "Esta raza es realmente dócil e inteligente. En su genética se encuentra la necesidad de satisfacer y ayudar a sus dueños.",
    colorButton: "success",
    textButton: "Labrador",
  },
];

const App = () => {
  return (
    <>
      <Header className="header" title={textTitle}/>
      <div className="container">
        {dogs.map((dog) => (
          <Cards
            key={dog.id}        
            image={dog.image}
            title={dog.title}
            text={dog.text}
            colorButton={dog.colorButton}
            textButton={dog.textButton}
          />
        ))}
      </div>
      <Footer text={textFooter}/>
    </>
  );
};

export default App;
