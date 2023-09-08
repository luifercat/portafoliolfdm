const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col max-w-[1040] m-auto md:pl-20 p4 py-10 mx-10"
    >
      <div className="flex justify-center items-center mb-10">
        <h1 className="px-9 text-4xl font-bold text-center text-cyan-700 custom-neum">
          CONTACTO
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-stretch gap-8 rounded-lg">
        <div className=" h-screen w-96 custom-neum02 mt-12">
          <h1 className="font-bold text-5xl   text-center pt-16  text-cyan-700 opacity-90">
            Contáctame <br />y hablemos, seguro puedo ayudarlo!!!
          </h1>
          <ul className="font-bold text-xl pt-14 pl-10  text-blue-800 list-disc opacity-90">
            <li>Dirección: Carrera 3 #10-20 Edificio Colombia</li>
            <li>Movil: 311-3470120</li>
            <li>e-mail: luifercat@gmail.com</li>
          </ul>
          <img
            className="pl-24 h-40 "
            src="./src/assets/images/logo01.png"
            alt="/"
          />
          {/*} <img
            className=" flex h-screen  scale-x-[-1] border-gray-400 rounded-lg opacity-10 "
            src="./src/assets/images/gato-tejada.jpg"
            alt="/"
          /> */}
        </div>
        <div className="">
          <form
            className="flex flex-col"
            action="https://getform.io/f/c55f614e-9249-453d-b7cc-5ee3c7c55d37"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="grid md:grid-cols-2 gap-4 w-full p-y2">
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2 text-cyan-700">
                  Nombre
                </label>
                <input
                  className=" text-cyan-700 border-1 rounded-lg p-3 flex border-gray-300 custom-neum01"
                  type="text"
                  name="name"
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2 text-cyan-700">
                  TELÉFONO
                </label>
                <input
                  className="border-1 rounded-lg p-3 flex border-gray-300 custom-neum01"
                  type="text"
                  name="phone"
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2 text-cyan-700">
                Email
              </label>
              <input
                className="border-1 rounded-lg p-3 flex border-gray-300 custom-neum01"
                type="email"
                name="email"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2 text-cyan-700">
                ASUNTO
              </label>
              <input
                className="border-1 rounded-lg p-3 flex border-gray-300 custom-neum01"
                type="text"
                name="subject"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2 text-cyan-700">
                MENSAJE
              </label>
              <textarea
                className="border-1 rounded-lg p-3 flex border-gray-300 custom-neum01"
                rows="10"
                name="message"
              />
            </div>
            <div className="flex justify-center items-center mb-10">
              <button className="font-bold hover:text-red-600 text-cyan-700 mt-4 w-auto p-4 custom-neum">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
