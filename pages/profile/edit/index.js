import { HeaderBar, FormEdit } from "../../../components"

const EditProfile = () => {
  return (
    <div className="edit_profile">
        <div>
            <HeaderBar tittle="Lengkapi Info Akun"/>
        </div>
        <div>
            <FormEdit />
        </div>
    </div>
  )
}

export default EditProfile