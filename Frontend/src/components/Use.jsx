import React from 'react'
import line from '../assets/line.svg'
import line2 from '../assets/line2.svg'
import lite from '../assets/lite.svg'
import pen from '../assets/pen.svg'
import Tik from '../assets/tik.svg'

function Use() {
    return (
        <>
            <h1 className='mt-12 text-3xl font-extrabold text-center'>Summarize any text with a click of a button</h1>
            <p className='font-semibold text-center mt-4'>Our Summarizer is the best tool to help you quickly capture key insights from any text. Here’s<br /> why we stand out from the competition.</p>
            <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">
                <div className="">
                    <div className="bg-gray-100  p-2 h-56 rounded-md w-64 pt-5">
                        <img src={pen} className='' />
                        <h2 className='text-xl my-3 font-bold'>AI-powered</h2>
                        <p className='font-semibold'>Extract the key points from any document in seconds</p>
                    </div>
                </div>
                <div className="">
                    <div className="bg-gray-100 p-2 rounded-md w-64 h-56">
                        <img src={line} />
                        <h2 className='text-xl my-3 font-bold'>Versatile</h2>
                        <p className='font-semibold'>Use Summarizer with any long-form content, article, or text</p>
                    </div>
                </div>
                <div className="">
                    <div className="bg-gray-100 p-2 rounded-md w-64 h-56">
                        <img src={line2} />
                        <h2 className='text-xl my-3 font-bold'>Customizable</h2>
                        <p className='font-semibold'>Choose between bullet point or paragraph style and adjust length</p>
                    </div>
                </div>
                <div className="">
                    <div className="bg-gray-100 p-2 rounded-md w-64 h-56">
                        <img src={lite} />
                        <h2 className='text-xl my-3 font-bold'>Flexible</h2>
                        <p className='font-semibold'>Summarize up to 600 words of text</p>
                    </div>
                </div>
            </div>

            <h1 className='mt-12 text-3xl font-extrabold py-8 text-center'>What can you do with our Summarizer tool?</h1>
            <div className="flex justify-center items-center mt-9 gap-10 flex-wrap">
                <div className="w-64 h-48 gap-2 justify-center  pl-8 flex flex-col bg-blue rounded-md">
                    <div className="w-11 text-center">
                        <img src={Tik} className='w-full' />
                    </div>
                    <h2>Simplify text</h2>
                    <p>Make complex information simpler</p>
                </div>
                <div className="w-64 h-48 gap-2 justify-center  pl-8 flex flex-col bg-orange-100 rounded-md">
                    <div className="w-11 text-center">
                        <img src={Tik} className='w-full' />
                    </div>
                    <h2>Shorten reports</h2>
                    <p>Identify the most important details</p>
                </div>
                <div className="w-64 h-48 gap-2 justify-center  pl-8 flex flex-col bg-lime-400 rounded-md">
                    <div className="w-11 text-center">
                        <img src={Tik} className='w-full' />
                    </div>
                    <h2>Highlight points</h2>
                    <p>Emphasize key points clearly</p>
                </div>
                <div className="w-64 h-48 gap-2 justify-center  pl-8 flex flex-col bg-sky-100 rounded-md">
                    <div className="w-11 text-center">
                        <img src={Tik} className='w-full' />
                    </div>
                    <h2>Extract insights</h2>
                    <p>Identify the main ideas</p>
                </div>
            </div>
        </>
    )
}

export default Use