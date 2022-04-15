String.prototype.toLongDate = function () {
    const date = this.split("T")[0]
    const d = new Date(date)//date= yyyy-MM-dd
    if (d instanceof Date && !isNaN(d)) {
        const months = ["", "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Agustos", "Eylül", "Ekim", "Kasım", "Aralık"]
        let dateValues = date.split('-')
        return (dateValues[2] + " " + months[parseInt(dateValues[1])] + " " + dateValues[0])
    }
    return date
}