import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../api/todoApi'
import { deleteUser } from '../../api/todoApi';
import { addUser } from '../../api/todoApi';
import { editUser } from '../../api/todoApi';

// MUI 
import DeleteIcon from '@mui/icons-material/Delete';
import ChangeIcon from '@mui/icons-material/PublishedWithChanges';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius : "10px",
  boxShadow: 24,
  p: 4,
};


function Contact() {

  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [ inpEd , setInpEd ] = useState ("")
  const [ idx , setIdx ] = useState (null)
  function editShow ( user ) {
    handleOpen()
    setInpEd ( user . name )
    setIdx ( user . id )
  }

  const [ inp , setInp ] = useState ( "" )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  })
  const data = useSelector((store) => store.todos.infoData)
  return (
    <>
    <h1 className='text-[200%] pl-[10%] py-[2%] font-bold'>
      Наша копмания 
    </h1>
    <div className='py-[2%] flex justify-center gap-[2%] items-center'>
    <TextField value={inp} onChange={(event)=> setInp ( event.target.value)} size='small' id="outlined-basic" label="Name" variant="outlined" />
    <Button onClick={()=> dispatch(addUser ( { id : data.length+1 , name : inp , isCompleted : false }) ,setInp(""))} variant="outlined">Add</Button>
    </div>
    <div className='pb-[2%]'>

    <table className='m-auto w-[40%]'>
      <thead>
        <tr className='bg-purple-200'>
          <th>
            Name 
          </th>
          <th>
            ○○○
          </th>
        </tr>
      </thead>
      <tbody>
      {data.map((elem) => {
        return (
          <tr key={elem.id}>

            <td className='cursor-pointer hover:bg-red-400 ease-in duration-150 hover:text-white bg-gray-300 pl-[2%] py-[1%] border-b-4'>
              {elem.name}
            </td>

            <td className='cursor-pointer hover:bg-gray-300 ease-in duration-150 text-center bg-red-300 border-b-4'>
              <button onClick={()=> dispatch(deleteUser(elem.id))}>
              <DeleteIcon className='hover:text-red-800' />
              </button>
              <button onClick={()=> editShow ( elem )}>
              <ChangeIcon className='hover:text-green-600'/>
              </button>
            </td>
          </tr>
        )
      })}
    
      </tbody>
    </table>
    </div>

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Change your name
          </Typography>
          <div className='flex items-center gap-[2%]'>
          <TextField value={inpEd} onChange={(event)=> setInpEd ( event.target.value)} size='small' id="outlined-basic" label="Name" variant="outlined" />
    <Button onClick={()=> dispatch(editUser ( { id : idx , name : inpEd , isCompleted : false }) , handleClose())} variant="outlined">Edit</Button>
          </div>
        </Box>
      </Modal>
    
    </>
  )
}

export default Contact