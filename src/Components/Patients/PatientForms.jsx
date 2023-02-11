import React from 'react'

function PatientForms() {
  return (
    <div className='h-screen flex flex-col justify-center items-center pt-[4rem]'>
        <div className='pt-[2rem] pb-[2rem]'>
            <h1 className='text-5xl font-[700]'>Patient Forms</h1>
        </div>
        <div className='w-full flex justify-center items-center flex-col'>
            <div className="form-control w-[90%]">
                <label className="label">
                    <span className="label-text">What is your name?</span>
                    <span className="label-text-alt">Alt label</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                {/* <label className="label">
                    <span className="label-text-alt">Alt label</span>
                    <span className="label-text-alt">Alt label</span>
                </label> */}
            </div>
            <div className="form-control w-[90%] ">
                <label className="label">
                    <span className="label-text">What is your name?</span>
                    <span className="label-text-alt">Alt label</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                {/* <label className="label">
                    <span className="label-text-alt">Alt label</span>
                    <span className="label-text-alt">Alt label</span>
                </label> */}
            </div>
            <div className="form-control w-[90%] ">
                <label className="label">
                    <span className="label-text">What is your name?</span>
                    <span className="label-text-alt">Alt label</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                {/* <label className="label">
                    <span className="label-text-alt">Alt label</span>
                    <span className="label-text-alt">Alt label</span>
                </label> */}
            </div>
        </div>
    </div>
  )
}

export default PatientForms