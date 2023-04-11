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
  const [file2, setfile2] = useState()
  const [file3, setfile3] = useState()
  const [file4, setfile4] = useState()
  const [file5, setfile5] = useState()
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

  const onFileChange2 = (e) => {
    setfile2(e.target.files[0])
  }

  const onFileChange3 = (e) => {
    setfile3(e.target.files[0])
  }

  const onFileChange4 = (e) => {
    setfile4(e.target.files[0])
  }

  const onFileChange5 = (e) => {
    setfile5(e.target.files[0])
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setloading(true)
    try {

      const fd = new FormData();
      fd.append("image", file)
      const res = await axios.post("https://sore-cyan-twill.cyclic.app/api/upload_image", fd)

      const fd2 = new FormData();
      fd2.append("image", file2)
      const res2 = await axios.post("https://sore-cyan-twill.cyclic.app/api/upload_image", fd2)

      const fd3 = new FormData();
      fd3.append("image", file3)
      const res3 = await axios.post("https://sore-cyan-twill.cyclic.app/api/upload_image", fd3)

      const fd4 = new FormData();
      fd4.append("image", file4)
      const res4 = await axios.post("https://sore-cyan-twill.cyclic.app/api/upload_image", fd4)

      const fd5 = new FormData();
      fd5.append("image", file5)
      const res5 = await axios.post("https://sore-cyan-twill.cyclic.app/api/upload_image", fd5)


      const datatoupload = {
        name: data.name,
        image: res.data,
        images: [res2.data,res3.data,res4.data,res5.data],
        price: data.price,
        short_description: data.short_desc,
        description: data.desc,
        additional_info: data.additional_info,
        onHomePage: data.onHomepage,
        inStock: data.inStock,
        category: data.category,
        tags: tags
      }

      await axios.post("https://sore-cyan-twill.cyclic.app/api/products", datatoupload)
      setloading(false)
      alert("PRoduct Uploaded")

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
              <File onChange={onFileChange2}/>
              <File onChange={onFileChange3}/>
              <File onChange={onFileChange4}/>
              <File onChange={onFileChange5}/>
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