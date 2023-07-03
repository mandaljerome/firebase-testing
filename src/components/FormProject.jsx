import React, { useState } from 'react'
import './FormProject.scss'

const FormProject = () => {
   const [project, setProject] = useState({
      title: '',
      description: '',
      date: '',
   })

   const eventChangeHandler = (e) => {
      setProject(() => {
         return { ...project, [e.target.id]: e.target.value }
      })
      console.log(e.target)
   }

   const submitHandler = async (e) => {
      e.preventDefault()

      try {
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

         setProject({
            title: '',
            description: '',
            date: '',
         })
      } catch (err) {
         throw err
      }
   }

   return (
      <div className='form-project'>
         <div className='container'>
            <form onSubmit={submitHandler}>
               <div className='form-control'>
                  <label htmlFor='project-title'>Title</label>
                  <input
                     type='text'
                     name='title'
                     id='title'
                     value={project.title}
                     onChange={eventChangeHandler}
                  />
               </div>

               <div className='form-control'>
                  <label htmlFor='project-description'>Description</label>
                  <textarea
                     name='description'
                     id='description'
                     cols='30'
                     rows='10'
                     value={project.description}
                     onChange={eventChangeHandler}
                  ></textarea>
               </div>

               <div className='form-control'>
                  <label htmlFor='date-created'>Date</label>
                  <input
                     type='date'
                     name='date'
                     id='date'
                     value={project.date}
                     onChange={eventChangeHandler}
                  />
               </div>

               <button>Submit</button>
            </form>
         </div>
      </div>
   )
}

export default FormProject
