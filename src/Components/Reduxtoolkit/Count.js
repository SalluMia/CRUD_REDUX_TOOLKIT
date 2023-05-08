import React from 'react'
import { useDispatch } from 'react-redux';
import { decre, incre } from '../reducers/counterSlice';
import { useSelector } from 'react-redux';
import { addData, delData, updateData } from '../reducers/inputSlice';
import { useState } from 'react';
import style from './style.css'
function Count() {

  const formdata = useSelector((state) => state.form.value)
  const dispatch = useDispatch()
  const [editIndex, setEditIndex] = useState(null);
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value
    setData(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(data)
  }

  const handleDel = (index) => {
    dispatch(delData(index));
  }


  const handleEdit = (index) => {
    const editData = formdata[index];
    setData({
      name: editData.name,
      email: editData.email,
      phone: editData.phone
    })
    setEditIndex(index)
    console.log(index)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: data.name,
      email: data.email,
      phone: data.phone
    };
    if (editIndex !== null) {
      dispatch(updateData({ formData, index: editIndex }));
      setEditIndex(null)
      
        setData({
          name: '',
          email: '',
          phone: ''
        })

    }
    else {
      dispatch(addData(formData))
    }
    setData({
      name: '',
      email: '',
      phone: ''
    })
  }
  return (
    <div>
      <div className="container m-5 p-3">
        <h4 className='text-center bg-light p-3 mb-5'><b>Redux ToolKit</b></h4>
        <div className="row">
          <div className="col-sm-3">
            <div className="form-sect">
            <h4 className='my-3 bg-warning p-2 text-center'><b>Form Data</b></h4>
            <form action="" className='form'>
              <input type="text" placeholder='Enter Name' className='form-control mb-2'
                name='name'
                value={data.name}
                onChange={handleinput}
                style={{ borderRadius: '2px', fontSize: '14px' }}
              />

              <input type="text" placeholder='Enter Email' className='form-control mb-2'
                name='email'
                value={data.email}
                onChange={handleinput}
                style={{ borderRadius: '2px', fontSize: '14px' }}

              />

              <input type="text" placeholder='Enter Phone' className='form-control mb-2'
                name='phone'
                value={data.phone}
                onChange={handleinput}
                style={{ borderRadius: '2px', fontSize: '14px' }}

              />

              <button className='btn btn-info btn-sm my-2'
                onClick={handleSubmit}
              ><b>{editIndex !== null ? 'Updata Data' : 'Add Data'}</b></button>

            </form>
            </div>
          
          </div>

          <div className="col-sm-8 ">
            <div className="info-sect">
            <h4 className='my-3 bg-warning p-2 text-center'><b>INFORMATION RECORDS</b></h4>
             <div className="table-section" style={{height:'400px', overflow:'scroll'}}>
             <table className='table table-striped table-bordered'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {formdata && formdata.map((fm, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <span style={{ fontSize: '14px' }}><i class="fa-solid fa-check" style={{ fontSize: '10px', color: 'orangered' }}></i> {fm?.name}</span>
                      </td>
                      <td>
                        <span style={{ fontSize: '14px' }}><i class="fa-sharp fa-solid fa-reply" style={{ fontSize: '10px', color: 'orangered' }}></i> {fm?.email}</span>
                      </td>
                      <td>
                        <span style={{ fontSize: '14px' }}><i class="fa-solid fa-phone" style={{ fontSize: '10px', color: 'orangered' }}></i> {fm?.phone}</span>
                      </td>
                      <td className='text-center'>
                        <span>
                          <button className='btn btn-danger btn-sm px-1 py-0'
                            onClick={() => handleDel(index)}>
                            <i className="fa-solid fa-trash" style={{ fontSize: '12px' }}></i>
                          </button>
                        </span>
                        <span>
                          <button className='btn btn-success btn-sm  btn-sm mx-1 px-1 py-0'
                            onClick={() => handleEdit(index)}>
                            <i class="fa-solid fa-pen-to-square" style={{ fontSize: '12px' }}></i>
                          </button>
                        </span>
                      </td>
                    </tr>
                  )
                })}

              </tbody>
            </table>
             </div>
            </div>
          
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Count
