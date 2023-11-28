import React, { useEffect, useState } from 'react'
import './StopWatch.css'

function StopWatch() {

  let [hour, setHour] = useState(0)
  let [min, setMin] = useState(0)
  let [sec, setSec] = useState(0)
  let [start, setStart] = useState(false)
  let [values, setValues] = useState(false)
  let count = 1;

  let interval;
  useEffect(() => {

    if (start) {
      interval = setInterval(() => {
        if (sec > 0) {
          setSec(sec -= 1)
        } else if (min > 0) {
          setMin(min -= 1);
          setSec(59);
        } else if (hour > 0) {
          setHour(hour -= 1);
          setMin(59);
          setSec(59);
        } else {
          setStart(false)
          setValues(false)
          clearInterval(interval);
          return
        }
      }, 1000)
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);

  }, [hour, min, sec, start])

  const handleChange = (e) => {
    let input = e.target;
    if (input.value > 0) {
      if (input.id === 'hour') {
        setHour(input.value)
      } else if (input.id === 'min') {
        if (input.value > 59) {
          alert("Max input value is 59 Minutes.")
        } else {
          setMin(input.value)
        }
      } else if (input.id === 'sec') {
        if (input.value > 59) {
          alert("Max input value is 59 Seconds.")
        } else {
          setSec(input.value)
        }
      }
      setValues(true)
    }
    // input.value = ''
    console.log(input.value, values)
  }

  function Interval() {
    if (values) {
      setStart(true);
    } else {
      alert('Enter Value.')
    }
  }
  const HandleStop = () => {
    setStart(false);
  }
  const HandleReset = () => {
    setStart(false);
    setValues(false);
    setHour(0)
    setMin(0)
    setSec(0)
    window.location.reload(false);
  }


  return (
    <>
      <div className='d-flex justify-content-center align-items-center my-5 '>
        <div className="watch">
          <div className="result text-center ">
            <h1>{hour < 10 ? "0" + hour : hour}:{min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}</h1>
          </div>
          <div className='d-flex align-items-center justify-content-around mt-4' style={{ gap: '20px' }}>
            <button onClick={Interval}>Start</button>
            <button onClick={HandleStop} style={{ cursor: 'not-allowed' }}>Stop</button>
            <button onClick={HandleReset}>Reset</button>
          </div>
        </div>
      </div>
      <div className='d-flex align-items-center justify-content-around mt-4 '>
        <div className="col-3">
          <input type="text" name='count' className='ms-2' id='hour' placeholder='Hour' onChange={handleChange} />
          <input type="text" name='count' className='ms-2' id='min' placeholder='Min' onChange={handleChange} />
          <input type="text" name='count' className='ms-2' id='sec' placeholder='Sec' onChange={handleChange} />
        </div>
      </div>
    </>
  )
}

export default StopWatch


