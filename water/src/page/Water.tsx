import React from 'react'
import { useState } from 'react'


function Water() {

    const [weight, setWeight] = useState<number>(0)

    const [milliliter, setMilliliter] = useState<number>(0)

    

    const handleSubMitted = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        const bmi = (weight * 2.2) * 30/2
          console.log(bmi)
          setMilliliter(bmi)
        };

    const handleWeightChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setWeight(Number(event.target.value))
        };

    // กำหนด usestate เป็นfalse
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleMode = () => {
      setIsDarkMode(!isDarkMode);
    };

  return (
    <div className={
      isDarkMode ? "app dark-mode" : "app light-mode"}>

        <div className="top">
          <h1>ควรดื่มน้ำวันละเท่าไหร่</h1>
          <form onSubmit={handleSubMitted}>
              <label htmlFor="weight">Weight :</label>
              <input onChange={handleWeightChange} 
              type="text" 
              id="weight"
               placeholder='น้ำหนักของคุณ
              '/><br />
              <input type="submit" value="คำนวณ" id='calulate' />
          </form>
          <h3>น้ำที่ควรได้รับ {milliliter}</h3>

          <button onClick={toggleMode}>
            {/* "Light" : "Dark"  คือคำที่เปลี่ยนตอนกดbutton*/}
               {isDarkMode ? "Light" : "Dark"} Mode
            </button>
        </div>
         
    </div>
  )
}

export default Water