export const checkToken = (token) => {
    const tokenUser = ''

    if (token?.toLowerCase().startsWith('bearer')) {
        tokenUser = token.slice('bearer'.length).trim()
    }

    return tokenUser
}
    