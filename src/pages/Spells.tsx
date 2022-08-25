import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Select, { StylesConfig } from 'react-select';
import { getSpells } from '../services/spellsRequisitions';
import { DataGrid } from '@mui/x-data-grid';
import Spinner from '../components/Spinner';
import { createTheme, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/material/styles';

type MyOptionType = {
    label: string;
    value: string;
};
export default function Spells() {
    const [spells, setSpells] = useState<Array<any>>();
    const [spellType, setSpellType] = useState<string>('');
    const [loading, setLoading] = useState<Boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>('');
    useEffect(() => {
        const isSpellSelected = spellType !== '';
        if (isSpellSelected) {
            setLoading(true);
            getSpells(spellType).then((response: any) => {
                const { data } = response;
                setSpells(data);
                setLoading(false);
                setErrorMsg('');
            }).catch((error: any) => {
                setLoading(false);
                console.error(error);
                setErrorMsg('Error finding data');
            })
        }
    }, [spellType]);
    const spellsTypes = [
        { value: 'Charm', label: 'Charm' },
        { value: 'Conjuration', label: 'Conjuration' },
        { value: 'Spell', label: 'Spell' },
        { value: 'Transfiguration', label: 'Transfiguration' },
        { value: 'HealingSpell', label: 'Healing Spell' },
        { value: 'DarkCharm', label: 'Dark Charm' },
        { value: 'Jinx', label: 'Jinx' },
        { value: 'Curse', label: 'Curse' },
        { value: 'MagicalTranportation', label: 'Magical Tranportation' },
        { value: 'Hex', label: 'Hex' },
        { value: 'CounterSpell', label: 'Counter Spell' },
        { value: 'DarkArts', label: 'Dark Arts' },
        { value: 'CounterJinx', label: 'Counter Jinx' },
        { value: 'CounterCharm', label: 'Counter Charm' },
        { value: 'Untransfiguration', label: 'Untransfiguration' },
        { value: 'BindingMagicalContract', label: 'Binding Magical Contract' },
        { value: 'Vanishment', label: 'Vanishment' },
    ];
    const customStyles: StylesConfig<MyOptionType> = {
        menu: (provided, state) => ({
            ...provided,
            backgroundColor: '#4f545c'
        }),
        input: (provided, state) => ({
            ...provided,
            color: '#2f3136',
        }),
    }

    const rows: any = spells?.map((spell: any) => {
        return (
            {
                id: spell.id,
                col1: spell.incantation === null ? spell.name : spell.incantation,
                col2: spell.effect
            }
        )
    });
    const columns: any = [
        {
            field: 'col1', headerName: 'Incantation or Name', width: 400, renderCell: (cellValues: any) => {
                return (
                    <div className='text-white'>
                        {cellValues.value}
                    </div>
                )
            }
        },
        {
            field: 'col2', headerName: 'Effect', width: 710, renderCell: (cellValues: any) => {
                return (
                    <div className='text-white'>
                        {cellValues.value}
                    </div>
                )
            }
        },
    ];

    return (
        <>
            <div className="bg-gray-700 h-screen w-auto md:h-full">
                <div className="flex flex-col text-center font-aboreto">
                    <Sidebar />
                    <div className="ml-[15rem] mr-[15rem] lg:ml-[8rem] lg:mr-[8rem] sm:ml-[2rem] sm:mr-[2rem] my-10">
                        <div className="w-auto text-white font-bold">
                            <label className="text-white">Select a spell type to see their names and effects</label>
                            <Select
                                options={spellsTypes}
                                styles={customStyles}
                                placeholder="Select a spell type"
                                onChange={(e: any) => {
                                    setSpellType(e?.value);
                                }}
                                theme={(theme) => ({
                                    ...theme,
                                    padding: 0,
                                    colors: {
                                        ...theme.colors,
                                        primary25: '#FCD34D',
                                        primary: '#FCD34D',
                                    },
                                })}
                            />
                        </div>
                        <div className='flex flex-wrap backdrop-blur-lg backdrop-brightness-150 bg-transparent mx-auto w-auto my-5 h-[29.7rem] sm:h-[29.7rem] rounded-xl z-10'>
                            {spells !== undefined && loading === false ? (
                                <>
                                    <DataGrid
                                        sx={{
                                            '.MuiDataGrid-root': {
                                                color: '#FFFF'
                                            },
                                            '& .MuiDataGrid-columnHeaders': {
                                                fontFamily: 'Aboreto',
                                                fontWeight: 'bold',
                                                color: '#FFFF'
                                            },
                                            '& .MuiDataGrid-cell': {
                                                fontFamily: 'Aboreto',
                                            },
                                            '& .MuiDataGrid-cell:hover': {
                                                backgroundColor: '#2f3136',
                                            }
                                        }}
                                        rows={rows}
                                        columns={columns}
                                        pageSize={7}
                                        rowsPerPageOptions={[5]}
                                    />
                                </>
                            ) : (
                                <div className='flex self-center mx-auto'>
                                    {errorMsg.length > 3 ?
                                        (
                                            <span className="text-white font-bold">{errorMsg}</span>
                                        ) :
                                        (
                                            <span className=' text-white font-bold mr-3'>{loading ? 'Loading spells' : 'Select a spell type'}</span>
                                        )}

                                    {loading && <Spinner />}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}