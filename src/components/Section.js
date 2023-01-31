// import data from "../data.json";
import movies from "../movies.json";

const Section = () => {
  const categories = movies.map((movie, index) => movie.category);
  const images = movies.map((movie) => movie.images);
  console.log(categories); // renvoie un tableau T de (6= categories.length) éléments
  console.log(images); // renvoie un tableau T de tableaux t au nombre de (6= categories.length). Chaque élément t contient des images i donc images[6]
  console.log(images[categories.length - 1]);

  return (
    <main>
      <div>
        <h2>{categories[0]}</h2>
        <section className="carousel">
          <img src={images[0][0]}></img>
          <img src={images[0][1]}></img>
          <img src={images[0][2]}></img>
          <img src={images[0][3]}></img>
          <img src={images[0][4]}></img>
          <img src={images[0][5]}></img>
          <img src={images[0][6]}></img>
          <img src={images[0][7]}></img>
          <img src={images[0][8]}></img>
          <img src={images[0][9]}></img>
          <img src={images[0][10]}></img>
          <img src={images[0][11]}></img>
          <img src={images[0][12]}></img>
        </section>
      </div>
      <div>
        <h2>{categories[1]}</h2>
        <section className="carousel">
          <img src={images[1][0]}></img>
          <img src={images[1][1]}></img>
          <img src={images[1][2]}></img>
          <img src={images[1][3]}></img>
          <img src={images[1][4]}></img>
          <img src={images[1][5]}></img>
          <img src={images[1][6]}></img>
          <img src={images[1][7]}></img>
          <img src={images[1][8]}></img>
          <img src={images[1][9]}></img>
          <img src={images[1][10]}></img>
          <img src={images[1][11]}></img>
          <img src={images[1][12]}></img>
        </section>
      </div>
      <div>
        <h2>{categories[2]}</h2>
        <section className="carousel">
          <img src={images[2][0]}></img>
          <img src={images[2][1]}></img>
          <img src={images[2][2]}></img>
          <img src={images[2][3]}></img>
          <img src={images[2][4]}></img>
          <img src={images[2][5]}></img>
          <img src={images[2][6]}></img>
          <img src={images[2][7]}></img>
          <img src={images[2][8]}></img>
          <img src={images[2][9]}></img>
          <img src={images[2][10]}></img>
          <img src={images[2][11]}></img>
          <img src={images[2][12]}></img>
        </section>
      </div>
      <div>
        <h2>{categories[3]}</h2>
        <section className="carousel">
          <img src={images[3][0]}></img>
          <img src={images[3][1]}></img>
          <img src={images[3][2]}></img>
          <img src={images[3][3]}></img>
          <img src={images[3][4]}></img>
          <img src={images[3][5]}></img>
          <img src={images[3][6]}></img>
          <img src={images[3][7]}></img>
          <img src={images[3][8]}></img>
          <img src={images[3][9]}></img>
          <img src={images[3][10]}></img>
          <img src={images[3][11]}></img>
          <img src={images[3][12]}></img>
        </section>
      </div>
      <div>
        <h2>{categories[4]}</h2>
        <section className="carousel">
          <img src={images[4][0]}></img>
          <img src={images[4][1]}></img>
          <img src={images[4][2]}></img>
          <img src={images[4][3]}></img>
          <img src={images[4][4]}></img>
          <img src={images[4][5]}></img>
          <img src={images[4][6]}></img>
          <img src={images[4][7]}></img>
          <img src={images[4][8]}></img>
          <img src={images[4][9]}></img>
          <img src={images[4][10]}></img>
          <img src={images[4][11]}></img>
          <img src={images[4][12]}></img>
        </section>
      </div>
      <div>
        <h2>{categories[5]}</h2>
        <section className="carousel">
          <img src={images[5][0]}></img>
          <img src={images[5][1]}></img>
          <img src={images[5][2]}></img>
          <img src={images[5][3]}></img>
          <img src={images[5][4]}></img>
          <img src={images[5][5]}></img>
          <img src={images[5][6]}></img>
          <img src={images[5][7]}></img>
          <img src={images[5][8]}></img>
          <img src={images[5][9]}></img>
          <img src={images[5][10]}></img>
          <img src={images[5][11]}></img>
          <img src={images[5][12]}></img>
        </section>
      </div>
    </main>
  );
};

export default Section;
