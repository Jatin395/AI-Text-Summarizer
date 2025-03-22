import React, { useState } from 'react'
import Footer from './Footer';
import { Button } from './ui/button'
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Contact from './Contact';
import Use from './Use';

function Home() {
    const [input, setinput] = useState('');
    const [res, setres] = useState('');
    const [show, setshow] = useState(false);
    const [summaryType, setSummaryType] = useState('medium');
    const URL = "https://ai-text-summarizer-wwnt.onrender.com";

    const HandleClick = async () => {
        if (!input) {
            toast.error("Please enter some text to summarize");
        }

        try {
            setshow(true);
            const response = await axios.post(`${URL}/api/generateContent`, { text: input, summaryLength: summaryType });
            if (response.status === 200) {
                setres(response.data.result);
            }
        } catch (error) {
            console.log("Error", error);
        } finally {
            setshow(false);
        }
    }

    const handleShortSummary = () => {
        setSummaryType('short');
    }

    const handleMediumSummary = () => {
        setSummaryType('medium');
    }

    const handleLongSummary = () => {
        setSummaryType('long');
    }

    return (
        <>
            <div className="sm:h-[100vh] flex mt-2 flex-col justify-center items-center bg-blue">
                <h2 className='text-xl sm:text-4xl font-extrabold'>Free Text Summarizer</h2>

                <div className="flex justify-center items-centertext-center flex-col sm:flex-row gap-4 w-full p-4 mb-4 shadow-xl">
                    {/* left */}
                    <div className="flex-1">
                        <textarea
                            id="message"
                            rows="4"
                            onChange={(e) => { setinput(e.target.value) }}
                            className="block p-2.5 w-full text-sm h-[50vh] overflow-auto text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Write your thoughts here..."
                        ></textarea>
                    </div>
                    {/* right */}
                    <div className="flex-1">
                        <ReactMarkdown
                            children={res}
                            remarkPlugins={[remarkGfm]}
                            className="block p-2.5 w-full text-sm h-[50vh] leading-6 overflow-auto text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="flex justify-center items-center flex-col sm:flex-row gap-4 mb-4">
                    <h2>Summary Type :</h2>
                    <Button
                        variant={summaryType === 'short' ? 'outline' : 'green'}
                        onClick={handleShortSummary}
                        className={`${summaryType === 'short' ? 'bg-green text-white scale-105' : 'bg-white text-green-500 border-green-500 scale-95'} transition-transform duration-300`}
                    >
                        Short Summary
                    </Button>
                    <Button
                        variant={summaryType === 'medium' ? 'outline' : 'green'}
                        onClick={handleMediumSummary}
                        className={`${summaryType === 'medium' ? 'bg-green text-white scale-105' : 'bg-white text-green-500 border-green-500 scale-95'} transition-transform duration-300`}
                    >
                        Medium Summary
                    </Button>
                    <Button
                        variant={summaryType === 'long' ? 'green' : 'outline'}
                        onClick={handleLongSummary}
                        className={`${summaryType === 'long' ? 'bg-green text-white scale-105' : 'bg-white text-green-500 border-green-500 scale-95'} transition-transform duration-300`}
                    >
                        Long Summary
                    </Button>
                </div>

                <Button variant='green' onClick={HandleClick}>Summarize</Button>
            </div>

            {show && (
                <>
                    <div className="w-full h-full flex justify-center items-center fixed top-0 left-0 bg-white opacity-75 z-50">
                        <div role="status">
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </>
            )}
            <Use />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
