import { useState } from 'react'
import './App.css'
import { InfoForm,  InfoCard } from './components/infoForm'
import { EducationForm } from './components/educationForm'
import EducationCard from './components/educationCard'


function App() {
  const [userData, setUserData] = useState({
    name: "Jane A Doe",
    email: "email@example.com"
  })

  const [educationArray, setEducationArray] = useState([])
  
  return (
    <main>
      <div className="editorWindow">
        <h1>Editor</h1>
        <InfoForm 
          setUserDataInput={setUserData}
        />
        <EducationForm
          newEducation={setEducationArray}
          currentEducation={educationArray}
        />
      </div>
      <div className="previewWindow">
        <h1>Preview</h1>
        <InfoCard 
          name={userData.name}
          email={userData.email}
        />
        <div>
          <h3>Education</h3>
          {educationArray.map((education, index) => {
            return <div key={index}>
              <EducationCard
              props={education}
              />
            </div>
          })}
        </div>
        <div>
          <h3>Work History</h3>
        </div>
      </div>
    </main>
  )
}

export default App
