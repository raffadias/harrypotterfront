import hogwartsImg from '../assets/hogwarts.png';
import gryffindorImg from '../assets/gryffindor.png';
import slytherinImg from '../assets/slytherin.png';
import hufflepuffImg from '../assets/hufflepuff.png';
import ravenclawImg from '../assets/ravenclaw.png';
import { GiCheckedShield, GiCastle } from 'react-icons/gi';
import { ImMagicWand } from 'react-icons/im';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Sidebar() {
    const [houses, setHouses] = useState<Boolean>(false);
    return (
        <>
            <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-gray-100 shadow-lg">

                <div className="mt-50">
                    <Link to="/">
                        <SidebarIcon icon={<img className="w-8 h-8" src={hogwartsImg} alt="" />} text="Home" />
                    </Link>
                </div>
                <Link to="/spells">
                    <SidebarIcon icon={<ImMagicWand size="28" className="hover:animate-wiggle" />} text="Spells" />
                </Link>

                <a onClick={() => { setHouses(!houses) }}>
                    <SidebarIcon icon={<GiCheckedShield size="28" className="hover:animate-beat" />} text="Hogwarts Houses" className="z-99" />
                </a>
                <div className={`${houses ? 'translate-x-0' : 'translate-x-[-4rem]'} ease-in-out duration-300 z-0`}>
                    <Link to="/houses">
                        <SidebarIcon icon={<GiCastle size="28"/>} text="All houses" />
                    </Link>
                    <Link to="/gryffindor">
                        <SidebarIcon icon={<img className="w-8 h-8" src={gryffindorImg} alt="" />} text="Gryffindor" />
                    </Link>
                    <Link to="/slytherin">
                        <SidebarIcon icon={<img className="w-8 h-8" src={slytherinImg} alt="" />} text="Slytherin" />
                    </Link>
                    <Link to="/hufflepuff">
                        <SidebarIcon icon={<img className="w-8 h-8" src={hufflepuffImg} alt="" />} text="Hufflepuff" />
                    </Link>
                    <Link to="/ravenclaw">
                        <SidebarIcon icon={<img className="w-8 h-8" src={ravenclawImg} alt="" />} text="Ravenclaw" />
                    </Link>
                </div>
            </div>
        </>
    )
}

function SidebarIcon({ icon, text = 'Tooltip 🔥' }: any) {
    return (
        <div className="sidebar-icon group">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100 font-aboreto font-bold z-99">
                {text}
            </span>
        </div>
    )
}