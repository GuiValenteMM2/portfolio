import DButton from "./components/dbutton";

export default function Home() {
  return (
      <>
        <div  className="flex justify-center pt-[15vh] ml-[20vw] font-extrabold text-white flex-col gap-2"
        style={{ 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' 
        }}>
          <h1 className="text-7xl text-blue-700/60">Welcome!</h1> 
          <h2>My name is <span className="text-blue-800 text-2xl">Guilherme Valente,</span> </h2>
          <h2>I'm a <span className="text-blue-800 text-2xl">Software Developer!</span></h2>
          <div className="flex gap-2">
            <DButton  buttonName={"Projects"} buttonPage={"Page"}/>
            <DButton  buttonName={"Skills"} buttonPage={"Page"}/>
            <DButton  buttonName={"Contact"} buttonPage={"Page"}/>
          </div>
        </div>
      </>
  );
}
