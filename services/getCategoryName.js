import { getRequest } from '../pages/api/apiConfig'

export const getCategoryName = async (id) => {
    const res = await getRequest(`category/${id}`)
    return res.data.data.name
}