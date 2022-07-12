import React,{useEffect} from 'react'
import { Row, Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { selectAdd, selectUpdate, selectAddClicked } from '../redux/features/onClickedSlice'
import { useSelector,useDispatch } from 'react-redux'
import { count } from '../redux/features/counterSlice'
import axios from 'axios'
import { toast } from 'react-toastify'



const Body = () => {

  const dispatch=useDispatch()

  const add = useSelector(selectAdd)

  const addClicked = useSelector(selectAddClicked)

  const update = useSelector(selectUpdate)

  const { register, handleSubmit, formState: { errors },reset } = useForm()

  useEffect(() => {
    reset({code:"",name:"",phone:""})
  }, [addClicked])
  

  const onSubmit = (data) => {
    if(add){
      axios.post('http://localhost:4000/add_data',data).then((res)=>{
        dispatch(count())
        toast.success('Successfully added')
      }).catch((err)=>{
        toast.error(err.response.data.Message)
        console.log(err.response.data.Message)
      })
    }else{
      axios.patch('http://localhost:4000/update_data',data).then((res)=>{
        toast.success('Successfully updated')
        console.log("Success")
      }).catch((err)=>{
        toast.error(err.response.data.Message)
        console.log(err.response.data.Message)
      })
    }
    console.log(data)
  }

  return (
    <div className="body_container">
      {add && <h1>Add Data</h1>}
      {update && <h1>Update Data</h1>}

      {
        (add || update) &&
        <div className="container1">
          <Form className="form" onSubmit={handleSubmit(onSubmit)} method='POST'>
            <Row>
              <Form.Control type='text' className='form-inputText' placeholder='Code' {...register('code', { required: "code is required" })} />
            </Row>

            <Row>
              <Form.Control type='text' className='form-inputText' placeholder='Name' {...register('name', { required: "Name is required" })} />
            </Row>

            <Row>
              <Form.Control type='text' className='form-inputText' placeholder='phone number' {...register('phone', {
                required: "phone number required", minLength: { value: 10, message: "Your phone number must be atleast 10 numbers" },
                maxLength: { value: 10, message: "Enter a valid phone" }
              })} />
            </Row>
            <Row>
              <Button className="pgm__register-model-button" variant="primary" type='submit'  >Submit</Button>
            </Row>
          </Form>
          <div className='error-container'>
            {errors.code && <span className="error" role='alert'>{errors.code.message}</span>}<br />
            {errors.name && <span className="error" role='alert'>{errors.name.message}</span>}<br />
            {errors.phone && <span className="error" role='alert'>{errors.phone.message}</span>}<br />
          </div>
        </div>
      }

      <div className="container2">

      </div>
    </div>
  )
}

export default Body