import React from 'react'
import NavBar from '../Components/NavBar'
import Projects from '../Sections/Projects'
import UpButton from '../Components/UpButton'
import Admin from '../Sections/Admin'

export default function DashboardPage() {
  return (
    <div className='h-page'>
      <NavBar links={["Projects","Admin"]}/>
      <Projects dashboard={true}/>
      <Admin />
      <UpButton />
    </div>
  )
}
