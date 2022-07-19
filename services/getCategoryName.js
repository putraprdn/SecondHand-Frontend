import { getRequest } from '../pages/api/apiConfig'

export const getCategoryName = async (id) => {
    try {
        const res = await getRequest(`category/${id}`)
        return res.data.data.name
        
    } catch (error) {
        console.log(error)
    }
}