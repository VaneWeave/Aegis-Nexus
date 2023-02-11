import React from 'react'

function FileVerify() {
  return (
    <div className='w-full'>
        <div className='file-inputs'>
            <label className="label">
                <span class="pb-4 label-text text-xl w-full text-center" for="file_input">Upload the Certificate</span>
            </label>
            <div className='flex justify-center items-center'>
                <div className='indicator w-full'>
                    <span className="indicator-item badge">Required</span>
                    <input className="file-input file-input-bordered file-input-info w-full" type='file' id='file' name='' accept='' onChange='' required />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FileVerify