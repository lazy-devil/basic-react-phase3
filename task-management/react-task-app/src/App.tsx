import './App.css'
import Header from './components/header-component/header-component'
import AddForm from './components/add-form-component/add-form-component'
import Item from './components/item-component/item-component'
import { useState } from 'react'
import { ItemType } from './common/global'

function App() {
  const [tasks, setTasks] = useState<ItemType[]>([
    { id: '1', title: 'แก้บั๊คโปรแกรม' },
    { id: '2', title: 'คู่มือการใช้งานโปรแกรม' },
    { id: '3', title: 'กดเงินที่ธนาคาร' }
  ])
  const [title, setTitle] = useState<string>('')
  const [editId, setEditId] = useState<string | null>(null)

  const deleteTask = (id: string) => {
    const result = tasks.filter(item => item.id != id)
    setTasks(result)
  }
  const saveTask = (e: Event) => {
    e.preventDefault()
    if (!title) {
      alert('กรุณาป้อนข้อมูล')
    } else if (editId) {
      const updateTask = tasks.map(item =>
        item.id == editId ? { ...item, title: title } : item)
      console.log(updateTask)
      setTasks(updateTask)
      setTitle('')
      setEditId(null)
    } else {
      const newTask: ItemType = {
        id: Math.floor(Math.random() * 1000).toString(),
        title: title
      }
      setTasks([...tasks, newTask])
      setTitle('')
    }
  }
  const editTask = (id: string | null) => {
    setEditId(id)
    const editTask = tasks.find(item => item.id == id)
    setTitle(editTask?.title ?? '')
  }

  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask} editId={editId} />
        <section>
          {
            tasks.map((data: ItemType) => (
              <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask} />
            ))
          }
        </section>
      </div>
    </div>
  )
}

export default App
