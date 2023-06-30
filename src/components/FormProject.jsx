import React, { useState } from 'react'
import './FormProject.scss'

const FormProject = () => {
   const [project, setproject] = useState({ data: 'try' })

   const submitHandler = async (e) => {
      e.preventDefault()

      const response = await fetch(
         'https://sample-project-3f4b9-default-rtdb.asia-southeast1.firebasedatabase.app/projects.json',
         {
            method: 'POST',
            body: JSON.stringify(project),
            headers: {
               'Content-Type': 'application/json',
            },
         }
      )
   }

   return (
      <div className='form-project'>
         <div className='container'>
            <form onSubmit={submitHandler}>
               <div className='form-control'>
                  <label htmlFor='project-title'>Title</label>
                  <input type='text' name='title' id='project-title' />
               </div>

               <div className='form-control'>
                  <label htmlFor='project-description'>Description</label>
                  <textarea
                     name='description'
                     id='project-description'
                     cols='30'
                     rows='10'
                  ></textarea>
               </div>

               <div className='form-control'>
                  <label htmlFor='date-created'>Date</label>
                  <input type='text' name='date' id='date-created' />
               </div>

               <button>Submit</button>
            </form>
         </div>
      </div>
   )
}

export default FormProject
