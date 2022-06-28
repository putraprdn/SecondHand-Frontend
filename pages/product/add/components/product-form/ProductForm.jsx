import { useState } from "react";
import currencyFormat from "../../../../dashboard/service/currency";
import { Plus } from "react-feather"
import { useFilePicker } from 'use-file-picker';
import Link from "next/link";

const ProductForm = () => {
    const [Images, setImages] = useState([]);
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

    return (
        <div className="col-6 mb-5">
            <form>
                <div>
                    <div className="mb-3">
                        <label htmlFor="txt_nama" className="form-label">Nama Produk</label>
                        <input type="text" className="form-control br-10" id="txt_nama" name="txt_nama" placeholder="Nama Produk" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="txt_harga" className="form-label">Harga Produk</label>
                        <input type="text" className="form-control br-10" id="txt_harga" name="txt_harga" placeholder={currencyFormat(0)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cb_kategori" className="form-label">Kategori</label>
                        <select name="cb_kategori" id="cb_kategori" className="form-control br-10">
                            <option selected>-- Pilih Kategori --</option>
                            <option value="Hobi">Hobi</option>
                            <option value="Kendaraan">Kendaraan</option>
                            <option value="Baju">Baju</option>
                            <option value="Elektronik">Elektronik</option>
                            <option value="Kesehatan">Kesehatan</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="txt_deskripsi" className="form-label">Deskripsi</label>
                        <textarea className="form-control br-10" id="txt_deskripsi" rows={3} defaultValue={""} placeholder="Contoh : Jalan Ikan Hiu 33" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fl_image" className="form-label">Foto Produk</label>
                        <div className="row row-cols-1 row-cols-md-5 g-3">
                            {
                                filesContent.map((file, index) => (
                                    <div className="col-2" key={index}>
                                        <div className="btn position-relative border border-2 border-dark br-10" style={{ width: "90px", height: "90px" }} onClick={() => openFileSelector()}>
                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                <img alt={file.name} src={file.content} width={'90px'} height={"90px"} className="br-10"></img>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                            {
                                loading ? <div className="col-2">Loading...</div> : errors.length ? <div className="col-2">Error...</div> : <div className="col-2" hidden></div>
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
                        <Link href="/product/add/preview"><button type="submit" className="btn btn-outline-primary w-100">Preview</button></Link>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-primary w-100">Terbitkan</button>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default ProductForm;