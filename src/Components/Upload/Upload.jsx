import React from 'react'
import FileUpload from '../FileUpload/FileUpload'
import { useNavigate } from 'react-router-dom';
import copy from 'copy-to-clipboard';


function Upload() {


    const navigate = useNavigate(); 

    const [copied, setCopied] = React.useState(false);

    const copyID = (e) => {
        copy(e.target.value);
        e.target.focus();
        e.target.select();
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
    return (
    <div className='h-screen flex flex-col justify-center items-center pt-[4rem]'>
        <form className='flex flex-col gap-[5rem] bg-base-300 p-[4rem] rounded-xl drop-shadow-xl drop-shadow-[0_10px_10px_hsl(var(--inc))]'>
            <div>
                <h1 className='text-5xl font-[700] text-center'>Upload</h1>
            </div>
            <div className='w-full'>
                <FileUpload />
            </div>
            <div className='pt-[4rem] grid justify-end w-full'>
                <button className='btn btn-primary'>Upload</button>
            </div>
        </form>

        <div className='mt-5 w-[50%] flex justify-center'>
            <div className=' w-1/2'>
                <label htmlFor="roomIDInput">{(copied) ? "Copied" : ""}</label>
                <div class="flex w-full">
                    <input class="input input-bordered w-full text-center" id='roomIDInput' onClick={copyID} value=''/>
                </div>
            </div>
        </div>
    </div>
)
}

export default Upload