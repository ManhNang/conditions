let currentExId = 0;
const mainMenu = document.getElementById('mainMenu');
const workspace = document.getElementById('exerciseWorkspace');
const exTitle = document.getElementById('exerciseTitle');
const dynamicInputs = document.getElementById('dynamicInputs');
const outputResult = document.getElementById('outputResult');

function openExercise(id) {
    currentExId = id;
    mainMenu.classList.add('hidden');
    workspace.classList.remove('hidden');
    outputResult.classList.add('hidden');
    generateForm(id);
}

function goBack() {
    workspace.classList.add('hidden');
    mainMenu.classList.remove('hidden');
    currentExId = 0;
}

//Hàm tạo cấu trúc HTML Input
function createInputHTML(id, labelText, type="number", placeholder="") {
    return `
        <div class="form-group">
            <label for="${id}">${labelText}:</label>
            <input type="${type}" id="${id}" placeholder="${placeholder}">
        </div>`;
}

function generateForm(id) {
    switch(id) {
        case 1:
            exTitle.innerText = "Bài 1: Chuyển đổi nhiệt độ từ °C sang °F";
            dynamicInputs.innerHTML = createInputHTML("exercise1", "Nhập độ C (°C)");
            break;
        case 2:
            exTitle.innerText = "Bài 2: Chuyển đổi khoảng cách từ Mét sang Feet";
            dynamicInputs.innerHTML = createInputHTML("exercise2", "Nhập số mét (m)");
            break;
        case 3:
            exTitle.innerText = "Bài 3: Tính diện tích hình vuông";
            dynamicInputs.innerHTML = createInputHTML("exercise3", "Nhập chiều dài cạnh a");
            break;
        case 4:
            exTitle.innerText = "Bài 4: Tính diện tích hình chữ nhật";
            dynamicInputs.innerHTML = createInputHTML("exercise4-a", "Nhập cạnh a") + createInputHTML("exercise4-b", "Nhập cạnh b");
            break;
        case 5:
            exTitle.innerText = "Bài 5: Tính diện tích tam giác vuông";
            dynamicInputs.innerHTML = createInputHTML("exercise5-a", "Nhập cạnh kề a") + createInputHTML("exercise5-b", "Nhập cạnh kề b");
            break;
        case 6:
            exTitle.innerText = "Bài 6: Giải phương trình bậc 1 (ax + b = 0)";
            dynamicInputs.innerHTML = createInputHTML("exercise6-a", "Nhập hệ số a") + createInputHTML("exercise6-b", "Nhập hệ số b");
            break;
        case 7:
            exTitle.innerText = "Bài 7: Giải phương trình bậc 2 (ax² + bx + c = 0)";
            dynamicInputs.innerHTML = createInputHTML("exercise7-a", "Nhập hệ số a") + createInputHTML("exercise7-b", "Nhập hệ số b") + createInputHTML("exercise7-c", "Nhập hệ số c");
            break;
        case 8:
            exTitle.innerText = "Bài 8: Kiểm tra tính hợp lệ tuổi của một người";
            dynamicInputs.innerHTML = createInputHTML("exercise8", "Nhập một số nguyên");
            break;
        case 9:
            exTitle.innerText = "Bài 9: Kiểm tra xem 3 số thực có phải là cạnh tam giác";
            dynamicInputs.innerHTML = createInputHTML("exercise9-a", "Nhập cạnh a") + createInputHTML("exercise9-b", "Nhập cạnh b") + createInputHTML("exercise9-c", "Nhập cạnh c");
            break;
        case 10:
            exTitle.innerText = "Bài 10: Chương trình tính giá điện sinh hoạt (Luật rẽ nhánh bậc thang)";
            dynamicInputs.innerHTML = createInputHTML("exercise10", "Nhập số điện tiêu thụ (kWh)");
            break;
        case 11:
            exTitle.innerText = "Bài 11: Chương trình tính thuế thu nhập cá nhân (Thuế lũy tiến đơn giản)";
            dynamicInputs.innerHTML = createInputHTML("exercise11", "Nhập tổng thu nhập chịu thuế (VNĐ)");
            break;
        case 12:
            exTitle.innerText = "Bài 12: Chương trình tính lãi suất ngân hàng (Lãi kép tích lũy)";
            dynamicInputs.innerHTML = createInputHTML("exercise12-current-money", "Số tiền gốc ban đầu (VNĐ)") + createInputHTML("exercise12-months", "Số tháng vay/gửi") + createInputHTML("exercise12-rate", "Lãi suất hàng tháng (%)");
            break;
    }
}

function getNum(id) { return parseFloat(document.getElementById(id).value); }

function executeCalculate() {
    outputResult.classList.remove('hidden', 'error');
    let resText = "";

    try {
        switch(currentExId) {
            case 1: {
                let c = getNum("exercise1");
                
                if(isNaN(c)) throw "Vui lòng nhập số!";
                let f = c * 9 / 5 + 32;
                resText = `Kết quả: ${c}°C tương đương với ${f.toFixed(2)}°F`;
                break;
            }
            case 2: {
                let m = getNum("exercise2");

                if(isNaN(m) || m < 0) throw "Vui lòng nhập khoảng cách hợp lệ (>= 0)!";
                let ft = m * 3.2808;
                resText = `Kết quả: ${m} m tương đương với ${ft.toFixed(4)} feet`;
                break;
            }
            case 3: {
                let a = getNum("exercise3");

                if(isNaN(a) || a <= 0) throw "Cạnh hình vuông phải lớn hơn 0!";
                resText = `Diện tích hình vuông là: ${(a * a).toFixed(2)}`;
                break;
            }
            case 4: {
                let a = getNum("exercise4-a");
                let b = getNum("exercise4-b");

                if(isNaN(a) || isNaN(b) || a <= 0 || b <= 0) throw "Các cạnh hình chữ nhật phải lớn hơn 0!";
                resText = `Diện tích hình chữ nhật là: ${(a * b).toFixed(2)}`;
                break;
            }
            case 5: {
                let a = getNum("exercise5-a");
                let b = getNum("exercise5-b");

                if(isNaN(a) || isNaN(b) || a <= 0 || b <= 0) throw "Các cạnh kề tam giác phải lớn hơn 0!";
                resText = `Diện tích tam giác vuông là: ${(0.5 * a * b).toFixed(2)}`;
                break;
            }
            case 6: {
                let a = getNum("exercise6-a");
                let b = getNum("exercise6-b");

                if(isNaN(a) || isNaN(b)) throw "Vui lòng nhập đầy đủ hệ số!";
                if(a === 0) {
                    resText = (b === 0) ? "Phương trình vô số nghiệm!" : "Phương trình vô nghiệm!";
                } else {
                    resText = `Phương trình có nghiệm duy nhất x = ${(-b / a).toFixed(2)}`;
                }
                break;
            }
            case 7: {
                let a = getNum("exercise7-a");
                let b = getNum("exercise7-b");
                let c = getNum("exercise7-c");

                if(isNaN(a) || isNaN(b) || isNaN(c)) throw "Vui lòng nhập đầy đủ 3 hệ số!";
                if(a === 0) {
                    if(b === 0) resText = (c === 0) ? "Phương trình vô số nghiệm!" : "Phương trình vô nghiệm!";
                    else resText = `Hệ số a=0, phương trình trở thành bậc 1 có nghiệm x = ${(-c / b).toFixed(2)}`;
                } else {
                    let delta = b*b - 4*a*c;
                    if(delta < 0) resText = `Delta = ${delta}. Phương trình vô nghiệm.`;
                    else if(delta === 0) resText = `Delta = 0. Phương trình có nghiệm kép x1 = x2 = ${(-b / (2*a)).toFixed(2)}`;
                    else {
                        let x1 = (-b + Math.sqrt(delta)) / (2*a);
                        let x2 = (-b - Math.sqrt(delta)) / (2*a);
                        resText = `Phương trình có 2 nghiệm phân biệt: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
                    }
                }
                break;
            }
            case 8: {
                let val = getNum("exercise8");

                if(isNaN(val) || !Number.isInteger(val)) throw "Tuổi phải là một số nguyên hợp lệ!";
                if(val > 0 && val < 120) {
                    resText = `Xác nhận: Số ${val} HỢP LỆ làm tuổi của một người.`;
                } else {
                    resText = `Xác nhận: Số ${val} KHÔNG PHẢI là tuổi con người (Yêu cầu phải > 0 và < 120).`;
                    outputResult.classList.add('error');
                }
                break;
            }
            case 9: {
                let a = getNum("exercise9-a");
                let b = getNum("exercise9-b");
                let c = getNum("exercise9-c");

                if(isNaN(a) || isNaN(b) || isNaN(c)) throw "Vui lòng nhập đủ 3 cạnh!";
                if(a > 0 && b > 0 && c > 0 && (a + b > c) && (b + c > a) && (a + c > b)) {
                    resText = `Thỏa mãn! Ba số (${a}, ${b}, ${c}) LÀ 3 cạnh của một tam giác hoàn chỉnh.`;
                } else {
                    resText = `Không thỏa mãn! Ba số (${a}, ${b}, ${c}) KHÔNG THỂ tạo thành một tam giác.`;
                    outputResult.classList.add('error');
                }
                break;
            }
            case 10: {
                let kwh = getNum("exercise10");
                if(isNaN(kwh) || kwh < 0) throw "Số kWh tiêu thụ không được âm!";
                
                let totalMoney = 0;
                if(kwh <= 50) totalMoney = kwh * 1678;
                else if(kwh <= 100) totalMoney = (50 * 1678) + ((kwh - 50) * 1734);
                else if(kwh <= 200) totalMoney = (50 * 1678) + (50 * 1734) + ((kwh - 100) * 2014);
                else totalMoney = (50 * 1678) + (50 * 1734) + (100 * 2014) + ((kwh - 200) * 2536);
                resText = `Tiền điện cần thanh toán (Chưa gồm VAT): ${Math.round(totalMoney).toLocaleString('vi-VN')} VNĐ`;
                break;
            }
            case 11: {
                let inc = getNum("exercise11");
                if(isNaN(inc) || inc < 0) throw "Thu nhập không hợp lệ!";
                
                let tax = 0;
                if(inc <= 5000000) tax = inc * 0.05;
                else if(inc <= 10000000) tax = (5000000 * 0.05) + ((inc - 5000000) * 0.1);
                else if(inc <= 18000000) tax = (5000000 * 0.05) + (5000000 * 0.1) + ((inc - 10000000) * 0.15);
                else tax = (5000000 * 0.05) + (5000000 * 0.1) + (8000000 * 0.15) + ((inc - 18000000) * 0.2);

                resText = `Thuế TNCN phải nộp tạm tính: ${Math.round(tax).toLocaleString('vi-VN')} VNĐ`;
                break;
            }
            case 12: {
                let p = getNum("exercise12-current-money");
                let m = getNum("exercise12-months");
                let r = getNum("exercise12-rate");
                if(isNaN(p) || isNaN(m) || isNaN(r) || p < 0 || m < 0 || r < 0) throw "Vui lòng nhập các thông số dương hợp lệ!";
                
                let finalAmount = p * Math.pow((1 + (r / 100)), m);
                let interest = finalAmount - p;
                resText = `Tổng tiền nhận được sau ${m} tháng: ${Math.round(finalAmount).toLocaleString('vi-VN')} VNĐ (Trong đó tiền lãi tích lũy là: ${Math.round(interest).toLocaleString('vi-VN')} VNĐ)`;
                break;
            }
        }
        outputResult.innerText = resText;
    } catch (error) {
        outputResult.innerText = "Lỗi đầu vào: " + error;
        outputResult.classList.add('error');
    }
}