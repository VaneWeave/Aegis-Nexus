import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
  <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Validate your credentials today!</h1>
      <p className="py-6">Welcome to <span className='font-[100]'>Aegis</span><span className='text-[#e34d1c]'>-</span><span className='font-black text-success'>Nexus</span>, the solution to fake certificates in the healthcare industry. Trust only qualified professionals with our cutting-edge verification technology. Improve healthcare quality and ensure patient safety. Start using <span className='font-[100]'>Aegis</span><span className='text-[#e34d1c]'>-</span><span className='font-black text-success'>Nexus</span> today.</p>
      <a href="#my-modal-4" className="btn btn-primary">Get Started</a>
    </div>
  </div>
</div>

{/* Accordion */}

<div className="flex flex-col justify-center items-center pt-[4rem] pb-[4rem]">

    <h1 className='text-5xl font-[700]'>
      Frequently Asked Questions
    </h1>

    <div className='w-5/12 pt-[3rem]'>
      <div className="collapse collapse-plus">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-primary border border-base-300 rounded-box text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          What do we do?
        </div>
        <div className="collapse-content bg-primary border border-base-300 rounded-box text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
          <p className="py-6">We provide a platform for healthcare professionals to verify their credentials and for employers to verify the credentials of their employees. We also provide a platform for patients to verify the credentials of their healthcare professionals.</p>
        </div>
      </div>
    </div>
    <div className='w-5/12 pt-[3rem]'>
      <div className="collapse collapse-plus">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-primary border border-base-300 rounded-box text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          What do we do?
        </div>
        <div className="collapse-content bg-primary border border-base-300 rounded-box text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
          <p className="py-6">We provide a platform for healthcare professionals to verify their credentials and for employers to verify the credentials of their employees. We also provide a platform for patients to verify the credentials of their healthcare professionals.</p>
        </div>
      </div>
    </div>
    <div className='w-5/12 pt-[3rem]'>
      <div className="collapse collapse-plus">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-primary border border-base-300 rounded-box text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          What do we do?
        </div>
        <div className="collapse-content bg-primary border border-base-300 rounded-box text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
          <p className="py-6">We provide a platform for healthcare professionals to verify their credentials and for employers to verify the credentials of their employees. We also provide a platform for patients to verify the credentials of their healthcare professionals.</p>
        </div>
      </div>
    </div>
</div>

{/* Modal */}

<div className="modal" id="my-modal-4">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Choose how do you wish to proceed</h3>
    <p className="py-4">Are you a : Doctor or a Patient?</p>
    <div className="flex justifiy-center items-center modal-action">
     <Link to="/doctorForms" className="btn">Doctor</Link>
     <span>OR</span>
     <Link to="/patientForms" className="btn">Patient</Link>
    </div>
  </div>
</div>

</div>

  )
}

export default Home