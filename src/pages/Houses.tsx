import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { AiOutlineArrowDown } from "react-icons/ai";
import { getAllHouses } from "../services/houseRequisitions";
import Gryffindor from "../assets/gryffindor.png";
import Slytherin from "../assets/slytherin.png";
import Hufflepuff from "../assets/hufflepuff.png";
import Ravenclaw from "../assets/ravenclaw.png";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";


export default function Houses() {
    const [houses, setHouses] = useState<Array<string>>();
    const [loading, setLoading] = useState<Boolean>(true);
    useEffect(() => {
        setLoading(true);
        getAllHouses().then((response) => {
            const { data } = response;
            setHouses(data);
            setLoading(false);
        }).catch((error) => {
            console.error(error);
            setLoading(false);
        });
    }, []);
    return (
        <>
            <div className="bg-gray-700 h-screen w-auto">
                <div className="flex flex-col text-center font-aboreto">
                    <Sidebar />
                    
                    {loading && (
                        <div className='flex self-center mx-auto mt-[20rem]'>
                            <Spinner/>
                        </div>
                    )}
                    <div className="flex ml-14">
                        {houses?.map((house: any) => (
                            <>
                                <Link
                                    to={`/${house.name.toLowerCase()}`}
                                    className={`
                                h-[39rem] w-[18rem] bg-gray-900 mt-[3rem] mx-auto rounded-xl shadow-lg group
                                ${house.name === 'Gryffindor' && 'hover:bg-[#690120]'} 
                                ${house.name === 'Slytherin' && 'hover:bg-[#1a472a]'} 
                                ${house.name === 'Hufflepuff' && 'hover:bg-[#b48c1d]'} 
                                ${house.name === 'Ravenclaw' && 'hover:bg-[#0E1A40]'}
                                hover:transition-all hover:duration-200 hover:ease-in-out hover:h-[40rem] hover:w-[19rem] hover:mt-[2rem]`}
                                >
                                    {house.name === 'Gryffindor' && (<img src={Gryffindor} alt="" className="h-[12rem] w-[10rem] mx-auto mt-5" />)}
                                    {house.name === 'Slytherin' && (<img src={Slytherin} alt="" className="h-[12rem] w-[11rem] mx-auto mt-5" />)}
                                    {house.name === 'Hufflepuff' && (<img src={Hufflepuff} alt="" className="h-[12rem] w-[10rem] mx-auto mt-5" />)}
                                    {house.name === 'Ravenclaw' && (<img src={Ravenclaw} alt="" className="h-[12rem] w-[10rem] mx-auto mt-5" />)}
                                    <h2 className={`text-white font-bold mt-5 mb-10`}>{house.name}</h2>
                                    <p className="text-white font-bold text-[11px]">Founder: {house.founder}</p>
                                    <div className="flex justify-center align-center mt-5">
                                        <p className="text-white font-bold text-[11px] self-center">Colors:</p>
                                        {house.name === 'Gryffindor' && (
                                            <>
                                                <div className="h-8 w-8 bg-[#990230] ml-5 rounded-full shadow-sm"></div>
                                                <div className="h-8 w-8 bg-amber-300 ml-5 rounded-full shadow-sm"></div>
                                            </>
                                        )}
                                        {house.name === 'Slytherin' && (
                                            <>
                                                <div className="h-8 w-8 bg-green-900 ml-5 rounded-full shadow-sm"></div>
                                                <div className="h-8 w-8 bg-white ml-5 rounded-full shadow-sm"></div>
                                            </>
                                        )}
                                        {house.name === 'Hufflepuff' && (
                                            <>
                                                <div className="h-8 w-8 bg-amber-300 ml-5 rounded-full shadow-sm"></div>
                                                <div className="h-8 w-8 bg-gray-600 ml-5 rounded-full shadow-sm"></div>
                                            </>
                                        )}
                                        {house.name === 'Ravenclaw' && (
                                            <>
                                                <div className="h-8 w-8 bg-blue-900 ml-5 rounded-full shadow-sm"></div>
                                                <div className="h-8 w-8 bg-[#B08D57] ml-5 rounded-full shadow-sm"></div>
                                            </>
                                        )}
                                    </div>
                                    <label className="text-white font-bold flex justify-center align-center mt-5">
                                        Traits <AiOutlineArrowDown size="12" className="text-white self-center ml-3" />
                                    </label>
                                    <ul className="list-none flex flex-col">
                                        {house.traits.map((trait: any) => (
                                            <li className="text-white text-[11px]">
                                                {trait.name}
                                            </li>
                                        ))}
                                    </ul>
                                    <label className="text-white font-bold flex justify-center align-center mt-5">
                                        Element: {house.element}
                                    </label>
                                </Link>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}