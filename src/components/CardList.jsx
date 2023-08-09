import './CardList.css'

export const CardList = () => {
  return (
    <div className='cards'>
      <div className="card">
        <div className="face front">
          <img src="./castillo_ambulante.jpg" alt="" />
          <h3>2004</h3>
        </div>

        <div className="face back">
          <h3>El castillo ambulante</h3>
          <p>El Castillo Ambulante.</p>

          <div className="link">
            <a href="Details"></a>
          </div>
        </div>
      </div>

      {/* <!--2--> */}
      <div className="card">
        <div className="face front">
          <img src="./2_Sophiejpg.jpg" alt="" />
          <h3>Sophie</h3>
        </div>
        <div className="face back">
          <h3>Sophie</h3>
          <p>
            {" "}
            Es una joven de dieciocho años que trabaja en una sombrerería. Es
            víctima de una maldición por parte de la Bruja del Páramo que le
            hace tener la apariencia de una mujer de noventa años. De carácter
            tímido y cerrado, tendrá que enfrentarse a sí misma para poder
            romper el maleficio que se ha desatado sobre ella y ayudar a Howl.{" "}
          </p>

          <div className="link">
            <a href="Details"></a>
          </div>
        </div>
      </div>

      {/* <!--3--> */}
      <div className="card">
        <div className="face front">
          <img src="./Howl_with_black_hair.webp" alt="" />
          <h3>Howl Jenkins Pendragon</h3>
        </div>
        <div className="face back">
          <h3>Howl Jenkins Pendragon</h3>
          <p>
            Es el amo y señor del castillo ambulante. Es un mago dotado de un
            poder inmesurable del que se cuentan varias leyendas
          </p>

          <div className="link">
            <a href="Details"></a>
          </div>
        </div>
      </div>

      {/* <!--4--> */}
      <div className="card">
        <div className="face front">
          <img src="./studio-ghibli-bruja-del-paramo.webp" alt="" />
          <h3>Bruja del Páramo</h3>
        </div>
        <div className="face back">
          <h3>Bruja del Páramo</h3>
          <p>
            Es una malvada bruja que persigue a Howl para adueñarse de su
            corazón. De acuerdo con Howl, la Bruja del Páramo alguna vez fue una
            bella mujer, motivo por el cual se acercó a ella, pero terminó
            huyendo al ver cómo era realmente.
          </p>

          <div className="link">
            <a href="Details"></a>
          </div>
        </div>
      </div>

      {/* <!--5--> */}
      <div className="card">
        <div className="face front">
          <img src="./ziiezmh0vdn51.png" alt="" />
          <h3>Markl</h3>
        </div>
        <div className="face back">
          <h3>Markl</h3>
          <p>
            Es el joven discípulo de Howl. Es huérfano y se encarga de recibir a
            los visitantes que llegan al castillo para ver al mago o a los
            enviados del rey que portan cartas de invitación.
          </p>

          <div className="link">
            <a href="Details"></a>
          </div>
        </div>
      </div>

      {/* <!--6--> */}
      <div className="card">
        <div className="face front">
          <img
            src="./calcifer_by_carolinebuschel_dfskq97-pre.jpg"
            alt=""
          />
          <h3>Calcifer</h3>
        </div>
        <div className="face back">
          <h3>Calcifer</h3>
          <p>
            {" "}
            Es un demonio de fuego, encargado de mantener la energía del
            castillo ambulante. Irónico y bromista, promete ayudar a Sophie a
            condición de que esta le ayude a él.
          </p>

          <div className="link">
            <a href="Details"></a>
          </div>
        </div>
      </div>

      {/* <!--7--> */}
      <div className="card">
        <div className="face front">
          <img src="./Nabo.jpg" alt="" />
          <h3>Nabo</h3>
        </div>
        <div className="face back">
          <h3>Nabo</h3>
          <p>
            {" "}
            En realidad, éste resulta ser el príncipe Justin, del reino vecino,
            quien había sido hechizado y cuya desaparición había sido la causa
            de la guerra.
          </p>

          <div className="link">
            <a href="Details"></a>
          </div>
        </div>
      </div>

      {/* <!--8--> */}
      <div className="card">
        <div className="face front">
          <img src="./Hen.jpeg" alt="" />
          <h3>Hen</h3>
        </div>
        <div className="face back">
          <h3>Hen</h3>
          <p>
            Es el perro mágico de Madame Suliman, quien le encarga investigar la
            situación geográfica de Howl. En la adaptación japonesa su
          </p>

          <div className="link">
            <a href="Details"></a>
          </div>
        </div>
      </div>
    </div>
  );
};
