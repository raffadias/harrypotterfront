import Sidebar from "../components/Sidebar";
import logo from "../assets/slytherin.png";
import salazar from "../assets/salazar.webp";

export default function Slytherin() {
    const mainText = `Slytherin was one of the four Houses at Hogwarts School of Witchcraft and Wizardry, founded by Salazar Slytherin.
    In establishing the house, Salazar instructed the Sorting Hat to pick students who had a few particular characteristics he most valued. 
    Those characteristics included cunning, resourcefulness, leadership, and ambition.`
    return (
        <>
            <div className="bg-gray-700 h-screen w-auto">
                <div className="flex flex-col text-center font-aboreto">
                    <Sidebar />
                    <div className="border-2 border-solid bg-[#1a472a] border-gray-300 rounded-xl h-[45rem] ml-[15rem] mr-[10rem] mt-[2rem]">
                        <div className="flex flex-col justify-center">
                            <img src={logo} alt="" className="h-20 w-20 mt-5 self-center"/>
                            <h1 className="font-bold text-white self-center mt-[1rem] text-4xl shadow-sm">Slytherin House</h1>
                        </div>
                        <div className="text-xl text-white mt-[2rem] mx-[2rem]">
                            {mainText}
                        </div>
                        <div className="flex flex-col justify-center">
                            <img src={salazar} className="h-[18rem] w-[10rem] self-center mt-5 rounded-xl border-2 border-gray-300 shadow-lg" alt="" />
                            <p className="text-white font-bold text-xl">Salazar Slytherin</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}