import { useState } from "react";
import currencyFormat from "../../../../dashboard/service/currency";
import { Plus } from "react-feather"
import { useFilePicker } from 'use-file-picker';
import Link from "next/link";

import { useFormik } from 'formik';
import * as Yup from 'yup';

import img_fb from '../../../../../public/images/facebook.png'


const LoadingBox = () => {
    return (
        <div className="col-2">
            <div className="btn position-relative border border-2 border-dark br-10" style={{ width: "90px", height: "90px" }}>
                <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="col-2">Loading...</div>
                </div>
            </div>
        </div>
    )
}
const ErrorBox = () => {
    return (
        <div className="col-2">
            <div className="btn position-relative border border-2 border-dark br-10" style={{ width: "90px", height: "90px" }}>
                <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="col-2">Error</div>
                </div>
            </div>
        </div>
    )
}

const ProductForm = ({ setProduct, setImages, storeProduct, images }) => {

    const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*',
        multiple: true,
        limitFilesConfig: { max: 4 },
        // minFileSize: 0.1, // in megabytes
        maxFileSize: 50,
        imageSizeRestrictions: {
            // maxHeight: 900, // in pixels
            // maxWidth: 1600,
            // minHeight: 600,
            // minWidth: 768,
        },
    });

    const [form, setForm] = useState({})
    const [price, setPrice] = useState(0)
    var formData = new FormData();

    const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }

    const addData = async () => {
        await filesContent.map((file, _) => {

            const blob = file.content.substring(5, 14) == 'image/png' ? b64toBlob(file.content.substring(22), file.content.substring(5, 14)) : b64toBlob(file.content.substring(23), file.content.substring(5, 15));
            formData.append("image", blob, file.name)
        })
        formData.append("name", form.name);
        formData.append("description", form.description);
        formData.append("price", form.price);
        formData.append("categoryId", form.categoryId);
    }

    return (
        <div className="col-6 mb-5">
            <form>
                <div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nama Produk</label>
                        <input
                            type="text"
                            className="form-control br-10"
                            id="name" name="name"
                            placeholder="Nama Produk"
                            onChange={(e) => setForm({
                                ...form,
                                name: e.target.value
                            })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Harga Produk</label>
                        <input
                            type="number"
                            className="form-control br-10"
                            id="price"
                            name="price"
                            placeholder={currencyFormat(0)}
                            onChange={(e) => setForm({
                                ...form,
                                price: e.target.value
                            })}
                        // value={() => currencyFormat(price)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="categoryId" className="form-label">Kategori</label>
                        <select id="categoryId" className="form-control br-10" defaultValue="0" onClick={(e) => setForm({
                            ...form,
                            categoryId: e.target.value
                        })}>
                            <option value="0">-- Pilih Kategori --</option>
                            <option name="categoryId" value="1" >Hobi</option>
                            <option name="categoryId" value="2" >Kendaraan</option>
                            <option name="categoryId" value="3" >Baju</option>
                            <option name="categoryId" value="4" >Elektronik</option>
                            <option name="categoryId" value="5" >Kesehatan</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Deskripsi</label>
                        <textarea
                            className="form-control br-10"
                            id="description"
                            rows={3}
                            defaultValue={""}
                            placeholder="Contoh : Jalan Ikan Hiu 33" onChange={(e) => setForm({
                                ...form,
                                description: e.target.value
                            })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fl_image" className="form-label">Foto Produk</label>
                        <div className="row row-cols-1 row-cols-md-5 g-3">
                            {
                                filesContent.map((file, index) => {
                                    // console.log(filesContent);
                                    return (
                                        <div className="col-2" key={index}>
                                            <div className="btn position-relative border border-2 border-dark br-10" style={{ width: "90px", height: "90px" }} onClick={() => openFileSelector()}>
                                                <div className="position-absolute top-50 start-50 translate-middle">
                                                    <img alt={file.name} src={file.content} width={'90px'} height={"90px"} className="br-10"></img>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            {
                                loading ? <LoadingBox /> : errors.length ? <ErrorBox /> : <div className="col-2" hidden></div>
                            }
                            <div className="col-2">
                                <div className="btn position-relative border border-2 br-10" style={{ width: "90px", height: "90px" }} onClick={() => openFileSelector()}>
                                    <div className="position-absolute top-50 start-50 translate-middle">
                                        <Plus size={20} color="grey" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <Link href="/product/add/preview"><button type="button" className="btn btn-outline-primary w-100">Preview</button></Link>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-primary w-100" onClick={
                            () => {
                                addData().then((_) => {
                                    storeProduct(formData);
                                }).catch((err) => {
                                    console.log(err);
                                });
                            }
                        }>Terbitkan</button>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default ProductForm;