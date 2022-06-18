import { useState, useEffect } from "react"
import styles from '../../styles/Form.module.css'
import Image from 'next/image'
import axios from "axios"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router'
import { ArrowLeft } from "react-feather";

const FormEdit = () => {
  
  const [srci, setSrc] = useState('/uploadimg.svg')
  const [province, setProvince] = useState([])
  const [city, setCity] = useState([])
  const [cityid, setCityId] = useState([])

  const router = useRouter()

  const onUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setSrc(reader.result);
    }
    reader.readAsDataURL(file);
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

  const formik = useFormik({
    initialValues: {
      nama: '',
      kota: '',
      alamat: '',
      noHP: '',
    },
    validationSchema: Yup.object({
      nama: Yup.string()
        .required('Nama harus diisi'),
      kota: Yup.string()
        .required('Kota harus diisi'),
      alamat: Yup.string()
        .required('Alamat harus diisi'),
      noHP: Yup.string()
        .required('No HP harus diisi'),
    }),
    onSubmit: values => {
      onEditProfile(values)
    },
  })

  const onEditProfile = (values) => {
      const res = values 
      console.log(res)
  }

  return (
    <div className="container-md d-flex flex-column mt-5 justify-content-center align-items-center">
      <div className="align-self-start">
        <ArrowLeft onClick={() => router.back()}/>
      </div>
      <div className='w-75'>
        <form onSubmit={formik.handleSubmit} className="d-flex flex-column justify-content-center align-items-center">
          <div className="mb-3 d-flex">
            <div className={styles.uploadimg}>
              <label htmlFor="select-image">
                <input 
                  accept="image/*" 
                  type="file" 
                  id="select-image"
                  style={{ display: 'none' }}
                  onChange={onUpload}
                />
                <Image 
                  src={srci} 
                  alt="vercel"
                  layout="fill" 
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
            <label htmlFor="phone-input" className="form-label">No Handphone*</label>
            <input type="text" className="form-control" id="phone-input" placeholder="contoh: +628123456789" name="noHP" onChange={formik.handleChange} value={formik.values.noHP}/>
            {formik.touched.noHP && formik.errors.noHP ? (
              <div className="text-danger">{formik.errors.noHP}</div>
            ) : null}
          </div>
          <button className={styles.btn_input} type="submit">Simpan</button>
        </form>
      </div>
    </div>
  )
}

export default FormEdit