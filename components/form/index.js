import { useState, useEffect } from "react";
import styles from '../../styles/Form.module.css';
import Image from 'next/image';
import axios from "axios";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { ArrowLeft } from "react-feather";

import { checkToken } from './../../services/Token';

import { useDispatch } from 'react-redux'
import { edit } from '../../redux/slices/userSilce'
const FormEdit = () => {
  
  const router = useRouter()
  const dispatch = useDispatch()

  const [srci, setSrc] = useState('/uploadimg.svg')
  const [province, setProvince] = useState([])
  const [city, setCity] = useState([])
  const [cityid, setCityId] = useState([])
  const [imageUser, setFormData] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState('');

  useEffect(function() {
     const token = localStorage.getItem('token')
     const tokenUser = checkToken(token)
     setIsLoggedIn(tokenUser)
  },[]);


  const onUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setFormData(file)
    
    setSrc(URL.createObjectURL(file));
  }

  const getProvince = async () => {
    try {
      const res = await axios.get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
      setProvince(res.data.provinsi)
    } catch (error) {
      console.log(error);
    }
  }

  const getCity = async () => {
    try {
      const res = await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${cityid}`)
      setCity(res.data.kota_kabupaten)
    } catch (error) {
      console.log(error);
    }
  }

  const handleCity = (e) => {
    const id = e.target.value
    setCityId(id)
  }

  useEffect(() => {
    getProvince()
  }, [])

  useEffect(() => {
    getCity()
  })

  const phoneRegExp = "(62\\d{1,4}(\\s*[\\-]\\s*)\\d{0,4}(\\s*[\\-]\\s*)\\d{3,5}|62\\d{9,11}$)|(^\\+(?:[0-9] ?){6,13}[0-9]$)|(^(?:(?:\\+|0{0,2})62) ?\\d{0,3}(\\s*[\\-]\\s*)\\d{0,4}(\\s*[\\-]\\s*)\\d{0,5})"

  const formik = useFormik({
    initialValues: {
      nama: '',
      kota: '',
      alamat: '',
      phoneNumber: '',
    },
    validationSchema: Yup.object({
      nama: Yup.string()
        .required('Nama harus diisi'),
      kota: Yup.string()
        .required('Kota harus diisi'),
      alamat: Yup.string()
        .required('Alamat harus diisi'),
      phoneNumber: Yup.string()
        .required('Nomor telepon harus diisi')
        .matches(phoneRegExp, 'Phone number is not valid'),
    }),
    onSubmit: values => {
      onEditProfile(values, imageUser)
    },
  })

  const onEditProfile = async (values, imageUser) => {
      try {
        
        const form = new FormData();
        form.append('name', values.nama);
        form.append('city', values.kota);
        form.append('address', values.alamat);
        form.append('phoneNumber', values.phoneNumber);
        form.append('image', imageUser);

        const res = await axios.put(`https://new-pa-be-k3.herokuapp.com/api/user/update/${isLoggedIn}`, 
          form, {
            headers: {
              "Content-Type": "multipart/form-data",
              'Authorization' : `${isLoggedIn}`
            }
        })

        dispatch(edit({
          name: res.data.data.name,
          email:  res.data.data.email,
          city:  res.data.data.city,
          address:  res.data.data.address,
          phoneNumber:  res.data.data.phoneNumber,
          image: res.data.data.image,
        }))

        router.push('/dashboard')

      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div className="container-md d-flex flex-column mt-5 justify-content-center align-items-center">
      <div className="align-self-start">
        <ArrowLeft className={styles.pointer} onClick={() => router.back()}/>
      </div>
      <div className='w-75'>
        <form onSubmit={formik.handleSubmit} className="d-flex flex-column justify-content-center align-items-center">
          <div className="mb-3 d-flex">
            <div className={styles.uploadimg}>
              <label htmlFor="select-image">
                <input 
                  accept=".png, .jpg, .jpeg" 
                  type="file" 
                  id="select-image"
                  style={{ display: 'none' }}
                  onChange={onUpload}
                />
                <Image 
                  src={srci} 
                  alt="vercel"
                  width={160} 
                  height={160}
                  quality={100}
                  className={styles.img}
                />
              </label>
            </div>
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="name-input" className="form-label">Nama*</label>
            <input 
              type="text" 
              className="form-control" 
              id="name-input" 
              placeholder="Nama" 
              name="nama"
              value={formik.values.nama}
              onChange={formik.handleChange}
            />
            {formik.touched.nama && formik.errors.nama ? (
              <div className="text-danger">{formik.errors.nama}</div>
            ) : null}

          </div>
          <div className="row mb-3 w-100">
            <div className="col ps-0">
              <label htmlFor="provinsi-input" className="form-label">Provinsi*</label>
              <select defaultValue="" className="form-select" aria-label="Default" onChange={(e) => handleCity(e)}>
                <option value="" disabled>-- Pilih Propinsi --</option>
                {province.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>{item.nama}</option>
                  )
                })}
              </select>
            </div>
            <div className="col pe-0">
              <label htmlFor="kota-input" className="form-label">Kota*</label>
              <select className="form-select" aria-label="Default select example" name="kota" onChange={formik.handleChange} value={formik.values.kota}>
                <option value="" disabled>-- Pilih Kota --</option>
                {city.map((item, index) => {
                  return (
                    <option key={index} value={item.nama}>{item.nama}</option>
                  )
                })}
              </select>
              {formik.touched.kota && formik.errors.kota ? (
              <div className="text-danger">{formik.errors.kota}</div>
              ) : null}
            </div>
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="address-input" className="form-label">Alamat*</label>
            <textarea className="form-control" id="address-input" rows="3" name="alamat" onChange={formik.handleChange} value={formik.values.alamat}></textarea>
            {formik.touched.alamat && formik.errors.alamat ? (
              <div className="text-danger">{formik.errors.alamat}</div>
            ) : null}
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="phoneNumber" className="form-label">No Handphone*</label>
            <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="+6281252443255" onChange={formik.handleChange} value={formik.values.phoneNumber}/>
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-danger">{formik.errors.phoneNumber}</div>
            ) : null}
          </div>
          <button className="btn btn-primary w-100" type="submit">Simpan</button>
        </form>
      </div>
    </div>
  )
}

export default FormEdit