function currencyFormat(amount) {
    var forNum = amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    return `Rp. ${forNum},00`
}

export default currencyFormat;