import DButton from "./components/dbutton";

export default function Home() {
  return (
      <>
          <div className="flex gap-6 screen- ml-[42vw] p-4">
            <DButton  buttonName={"Projects"} buttonPage={"Page"}/>
            <DButton  buttonName={"Skills"}   buttonPage={"Page"}/>
            <DButton  buttonName={"Contact"}  buttonPage={"Page"}/>
            <DButton  buttonName={"About Me"} buttonPage={"Page"}/>
          </div>
        <div  className="flex justify-center pt-[15vh] ml-[15vw] font-extrabold text-white flex-col gap-2"
        style={{ 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' 
        }}>
          <h2 className="text-white text-2xl">Hi, I'm Guilherme!</h2>
          <h1 className="text-7xl text-blue-700/60">Web Developer</h1> 
        </div>
      </>
  );
}
