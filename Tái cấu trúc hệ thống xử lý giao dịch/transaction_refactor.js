/**
 * HỆ THỐNG TÍNH PHÍ GIAO DỊCH - FINBANK (LEGACY CODE)
 * Lỗi: Lạm dụng if-else cho cả giá trị hằng số lẫn khoảng giá trị.
 */
function calculateTransactionFee(transactionType, amount) {
    let fee = 0;

    // BAD CODE: Sử dụng if-else liên tục cho các giá trị rời rạc
    switch(transactionType){
        case "DEPOSIT":
            fee = 0;
            break;
        case "WITHDRAW":
            if (amount <= 1000000) {
            fee = 1100;
            } else if (amount <= 5000000) {
                fee = 2200;
            } else {
                fee = 3300;
            }
            break;
        case "TRANSFER":
            if (amount <= 1000000) {
            fee = 2000;
            } else if (amount <= 5000000) {
                fee = 5000;
            } else {
                fee = 7000;
            }
            break;
        default:
            return "Lỗi: Loại giao dịch không được hỗ trợ!";
    }

    return fee;
}

// --- KHU VỰC THỬ NGHIỆM ---
console.log("Phí rút 2 triệu:", calculateTransactionFee("WITHDRAW", 2000000));
console.log("Phí chuyển 6 triệu:", calculateTransactionFee("TRANSFER", 6000000));