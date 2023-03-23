import axios from 'axios'
import React, { useState } from 'react'
import File from '../../components/input/File'
import Select from '../../components/input/Select'
import Tags from '../../components/input/Tags'
import Textarea from '../../components/input/Textarea'
import Textfield from '../../components/input/Textfield'
import Toggle from '../../components/input/Toggle'
import Sidebar from '../../components/Sidebar'

function AddProducts() {

  const [tags, settags] = useState([])
  const [data, setdata] = useState()
  const [file, setfile] = useState()
  const [loading, setloading] = useState(false)
  
  const onNameChange = (e) => {
    setdata({...data, name: e.target.value})
  }

  const onPriceChange = (e) => {
    setdata({...data, price: e.target.value})
  }

  const onSdChange = (e) => {
    setdata({...data, short_desc: e.target.value})
  }

  const onDescChange = (e) => {
    setdata({...data, desc: e.target.value})
  }

  const onAiChange = (e) => {
    setdata({...data, additional_info: e.target.value})
  }

  const onHomeChange = (e) => {
    setdata({...data, onHomepage: e.target.value})
  }

  const onStockChange = (e) => {
    setdata({...data, inStock: e.target.value})
  }

  const onCatChange = (e) => {
    setdata({...data, category: e.target.value})
  }

  const onFileChange = (e) => {
    setfile(e.target.files[0])
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setloading(true)
    try {
      const fd = new FormData();
      fd.append('name', data.name)
      fd.append('price', data.price)
      fd.append('description', data.desc)
      fd.append('short_description', data.short_desc)
      fd.append('additional_info', data.additional_info)
      fd.append('onHomePage', data.onHomepage)
      fd.append('inStock', data.inStock)
      fd.append('category', data.category)
      fd.append('tags', JSON.stringify(tags))
      fd.append('image', file)
      await axios.post('https://sore-cyan-twill.cyclic.app/api/products', fd)
      alert('file uploaded')
      setloading(false)
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }

  return (
    <Sidebar>
      <h1 className='text-4xl text-gray-900 dark:text-gray-100 font-semibold tracking-tight'>Add Products</h1>
        <form onSubmit={submitHandler} className="grid grid-cols-2 gap-12 mt-10">
          <div>
            <Textfield onChange={onNameChange} label="Name" type="text"/>
            <br /><br />
            <Textfield onChange={onPriceChange} label="Price" type="number"/>
            <br /><br />
            <Textarea onChange={onSdChange} label="Short Description" rows={4}/>
            <br /><br />
            <Textarea onChange={onDescChange} label="Description" rows={4}/>
            <br /><br />
            <Textarea onChange={onAiChange} label="Additional Information" rows={4}/>
          </div>
          <div>
            <br />
              <Toggle onChange={onHomeChange} label="On Homepage"/>
              <br /><br />
              <Toggle onChange={onStockChange} label="In Stock"/>
              <br /><br />
              <Tags tags={tags} settags={settags}/>
              <br /><br />
              <Select onChange={onCatChange} label="Category" options={['T-Shirts','Hoodies','Mugs','Caps']}/>
              <br /><br />
              <File onChange={onFileChange}/>
              <br /><br />
              <button type="submit" class="w-full justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {loading ? "Loading" : "Submit"}
    <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
          </div>
        </form>
    </Sidebar>
  )
}

export default AddProducts