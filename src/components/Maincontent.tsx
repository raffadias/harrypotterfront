import hogwartsImg from '../assets/hogwarts.png';

export default function Maincontent() {
    const wizardWorldText = `The wizarding world, also referred to as the magical community, is the society in which wizards and witches live and 
    interact separate from Muggle (non-wizarding) society. The two communities are kept separate through the use of charms, spells, and secrecy. 
    Wizards are forbidden to reveal anything about magic to Muggle society due to the International Statute of Wizarding Secrecy. 
    It is governed by the Ministry of Magic. In this website you will find some information about this world, specially from the most famous magic
    school in the entirely wizarding world,`
    return (
        <>
        <div className="flex flex-col text-center text-white mx-20 my-10 font-aboreto">
            <div className="font-bold text-4xl">
                <h1>Welcome to the <span className="xl-inline text-amber-300">Wizarding World</span></h1>
            </div>
            <div className="mx-20 my-10 px-10 py-5 font-medium border-solid border border-spacing-3 rounded-xl shadow-lg">
            {wizardWorldText} <span className="font-bold text-amber-300">Hogwarts School of Witchcraft and Wizardry.</span>
            </div>
            <div className='flex justify-center'>
                <img className="w-72 h-72" src={hogwartsImg} alt="" />
            </div>
        </div>
        </>
    )
}