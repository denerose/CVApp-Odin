import { useState } from 'react'
import './App.css'
import { InfoForm,  InfoCard } from './components/infoForm'
import { EducationForm } from './components/educationForm'
import EducationCard from './components/educationCard'
import { WorkForm } from './components/workForm'
import { WorkCard } from './components/workCard'


function App() {
  const [userData, setUserData] = useState({
    name: "Jane A Doe",
    email: "email@example.com"
  })

  const [educationArray, setEducationArray] = useState([])
  const [workArray, setWorkArray] = useState([])

  function removeEducationRecord(keyToRemove){
    const newList = educationArray.filter(item => item.uid !== keyToRemove)
    console.log(newList)
    setEducationArray(newList)
  }

  function removeWorkRecord(keyToRemove){
    const newList = workArray.filter(item => item.uid !== keyToRemove)
    console.log(newList)
    setWorkArray(newList)
  }
  
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
        <WorkForm 
          setWork={setWorkArray}
          currentWork={workArray}
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
          {educationArray.map((education) => {
            return <div key={education.uid} className='eduBox'>
              <EducationCard
              props={education}
              />
              <button type="button" className="removeBtn" onClick={() => removeEducationRecord(education.uid)}>remove</button>
            </div>
          })}
        </div>
        <div>
          <h3>Work History</h3>
          {workArray.map((work) => {
            return <div key={work.uid} className='workBox'>
              <WorkCard 
              props={work}
              />
            <button type="button" className="removeBtn" onClick={() => removeWorkRecord(work.uid)}>remove</button>
            </div>
          })}
        </div>
      </div>
    </main>
  )
}

export default App
