import MainLayout from '../layouts/MainLayout'
import { useState } from 'react'
import axios from 'axios'
import Loader from '../components/Loader'

const Index = () => {
    const [word, setWord] = useState("")
    const [loading, setLoading] = useState(false)
    const [definition, setDefinition] = useState("")

    const searchWord = (e) => {
        e.preventDefault()
        setLoading(true)
        setDefinition("")
        try {
            axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
                .then((res) => {
                    console.log(res.data[0].meanings[0].definitions[0].definition)
                    console.log(res.data)
                    setDefinition(res.data[0].meanings[0].definitions[0].definition)
                    setLoading(false)
                })
                .catch(error => {
                    if (error.response.status === 404) {
                        console.log(error.response.data.message)
                        setDefinition(error.response.data.message)
                        setLoading(false)
                    } else {
                        console.log(error.response.data.message)
                        setDefinition(error.response.data.message)
                        setLoading(false)
                    }
                })
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <MainLayout>
            <div className='h-screen flex pt-40 items-center flex-col gap-10 px-5 sm:px-10 md:px-[20%]'>
                <div className='flex items-center justify-center gap-1 flex-col'>
                    <h1 className='md:text-8xl text-4xl sm:text-6xl flex font-bold font-fontdiner p-2 bg-gradient-to-r from-emerald-700 via-indigo-500 to-green-500 bg-clip-text text-transparent'>
                        <p className='header-text-span'>U</p>
                        <span className='header-text-span'>r</span>
                        <span className='header-text-span'>k</span>
                        <span className='header-text-span'>e</span>
                        <span className='header-text-span'>l</span>
                        <span className='header-text-span'>L</span>
                        <span className='header-text-span'>e</span>
                        <span className='header-text-span'>x</span>
                        <span className='header-text-span'>i</span>
                        <span className='header-text-span'>c</span>
                        <span className='header-text-span'>o</span>
                        <span className='header-text-span'>n</span>
                    </h1>
                    <p className='md:text-2xl sm:text-xl text-15px text-emerald-600 font-playwrite text-center'>...Find the meaning of words in a click...</p>
                </div>

                <form onSubmit={searchWord} action="" className='w-full flex justify-center'>
                    <div className='border border-blue-300 rounded-3xl flex w-full sm:w-[550px] md:w-[500px] focus:shadow-sm focus:shadow-emerald-500  hover:shadow-md hover:shadow-emerald-500'>
                        <input type="text" value={word} onChange={(e) => { setWord(e.target.value) }} placeholder='Search any word' className='w-full border-none outline-none bg-transparent px-5 py-3 text-xl text-white' />
                        <button type='submit' className='text-2xl rounded-[18px] h-full w-20 mr text-black bg-emerald-600  flex items-center justify-center'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    
                </form>

                <div>
                    {loading && <Loader />}
                    {!loading && (
                        <p className='md:text-2xl text-xl text-white font-quicksand font-semibold text-center'>{definition}</p>
                    )}
                </div>
            </div>
        </MainLayout>
    )
}

export default Index
