import React, { useState } from 'react'
import './App.css'
import Picture from './components/picture-component/picture-component'

function App() {
  const [word, setWord] = useState('')
  const [photos, setPhotos] = useState([])
  const key = 'xHcwZ-TEcAjSZG3ULrN607JZupCRW1IVoK6agw-CYz8'
  function searchImage(e: React.FormEvent) {
    e.preventDefault()
    if (!word) {
      alert('กรุณาป้อนข้อมูล')
    } else {
      fetchImageFromApi()
    }
  }

  async function fetchImageFromApi() {
    // https://api.unsplash.com/search/photos?page=1&query=office&client_id=xHcwZ-TEcAjSZG3ULrN607JZupCRW1IVoK6agw-CYz8
    const url = `https://api.unsplash.com/search/photos?page=1&per_page=15&query=${word}&client_id=${key}`
    const res = await fetch(url)
    const data = await res.json()
    const result = data.results

    if (result.length == 0) {
      alert('ไม่มีข้อมูลรูปภาพ')
      setWord('')
    } else {
      setPhotos(result)
    }
  }

  return (
    <>
      <h1>ระบบค้นหารูปภาพด้วย API</h1>
      <form onSubmit={(e) => searchImage(e)}>
        <input type='text'
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder='ป้อนชื่อรูปภาพที่ต้องการค้นหา' />
        <button type='submit'>ค้นหา</button>
      </form>
      <div className='search-result'>
        {photos.map((data: any, index: number) => {
          return <Picture {...data} key={index} />
        })}
      </div>
    </>
  )
}

export default App
