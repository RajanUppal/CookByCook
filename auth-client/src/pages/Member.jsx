import React, { useState } from 'react'
import avatar from '../assets/profile.jpg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const Member = () => {

  const [image, setImage] = useState({})
    const [uploading, setUploading] = useState(false)
    const handleImage = async (e) => {
        const file = e.target.files[0]
        let formData = new FormData()
        formData.append('image',file)
        setUploading(true)
        try {
            const {data} = await axios.post('http://localhost:8000/api/v1/all/upload-image', formData)
            setUploading(false)
            setImage({
                url: data.url,
                public_id: data.public_id
            })
            if(uploading === false){
                toast.success('Successfully uploaded')
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    const handleOnSubmit = async (event) => {
      event.preventDefault();
      const form = event.target; // Access the form element
      const formData = new FormData(form); // Create FormData object from the form
      
      // Extract data from FormData object
      const name = formData.get('name');
      const email = formData.get('email');
      const mobile = formData.get('mobile');
      const age = formData.get('age');
      const gender = formData.get('gender');
      const nationality = formData.get('nationality');
      const state = formData.get('state');
      const city = formData.get('city');
      const street = formData.get('street');
      const zipCode = formData.get('zipCode');
      const experience = formData.get('experience');
      const cookingStyle = formData.get('cookingStyle');
      const aboutYou = formData.get('aboutYou');
      const memberImage = image.url; // Access image from state
      
      try {
          const res = await axios.post("http://localhost:8000/api/v1/become-member/savemember", {
              name,
              email,
              mobile,
              age,
              gender,
              nationality,
              state,
              city,
              street,
              zipCode,
              experience,
              cookingStyle,
              aboutYou,
              memberImage
          }, {
              headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
              }
          });
          if (res.data.success) {
              toast.success(res.data.message);
              form.reset();
              setImage({
                url: avatar,
                public_id: null 
            });
          } else {
              toast.error(res.data.message);
          }
      } catch (error) {
          console.log(error);
          toast.error("An error occurred. Please try again.");
      }
  };
  

  return (

    <div className="addchef">
    <div className="w-full mx-auto pt-[16vh]">
     <form className="ease-in duration-300 lg:w-[60%] md:w-[70%] sm:w-[80%] shadow-sm backdrop-blur-md bg-white/80 mx-auto rounded-md px-8 py-5 mb-8" onSubmit={handleOnSubmit}>
         <h2 className='text-4xl font-bold text-[#142850] text-center py-6'>Become a Member</h2>

            <label htmlFor="file-upload" className='custom-file-upload'>
                      <img src={image?.url || avatar} alt="" className="h-1/5 w-1/5 bg-contain rounded-full mx-auto cursor-pointer" />
            </label>
                  <label className='block text-center text-gray-900 text-base mb-2' htmlFor="">Your Image</label>
                  <input type="file" label="Image" name="myFile" id='file-upload' className='hidden' accept='.jpeg .png .jpg' onChange={handleImage}/>

            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 py-2">

        
           
           <input type="text" placeholder='Enter Name' name='name' className='shadow-sm bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' required/>

           <input type="email" placeholder="Enter email address" name='email' className='shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'required />

           <input type="text" placeholder="Mobile (eg. 9999888777)" name="mobile" className="shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  pattern="[0-9]{10}"  required />

           <input type="number" placeholder='Enter Age' name='age' className='shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' required />

           <select className=" select shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="gender">
               <option disabled selected className='text-gray-700'>Gender</option>
               <option>Male</option>
               <option>Female</option> 
               <option>Others</option> 
           </select>

            <input type="text" placeholder="Nationality" name='nationality' className='shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'required/>

            <input type="text" placeholder="State" name='state' className='shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' required />

            <input type="text" placeholder="City" name='city' className='shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' required/>
            
            <input type="text" placeholder="Apartment No, Street" name='street' className='shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' required/>
                    
            <input type="text" placeholder="Zip-Code (eg. 123456)" name='zipCode' className='shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' pattern="[0-9]{6}" required/>

           <input type="number" placeholder='Enter experience in years' name='experience' className='shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />

           <input type="text" placeholder='Cooking style (eg. Chinese, South-India)' name='cookingStyle' className='shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' required/>

           <textarea className="textarea textarea-ghost lg:w-[205%] md:w-[205%] shadow-sm bg-white appearance-none border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="aboutYou" placeholder='About You'></textarea>


       </div>
         <button className="bg-[#142850] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-xl font-medium text-white mx-auto text-center mb-3 mt-5" type='submit'>
             Join Us
         </button>

         <ToastContainer />

     </form>
 </div>
</div>
  )
}

export default Member