const mockUsers = [
    {
        id: "TC-01",
        description: "Tài khoản bị khóa",
        isActive: false, age: 25, income: 15000000, creditScore: 650, hasBadDebt: false,
        expected: "Từ chối: Tài khoản đang bị khóa"
    },
    {
        id: "TC-02",
        description: "Khách hàng chưa đủ tuổi",
        isActive: true, age: 16, income: 15000000, creditScore: 650, hasBadDebt: false,
        expected: "Từ chối: Khách hàng chưa đủ tuổi"
    },
    {
        id: "TC-03",
        description: "Thu nhập không đủ điều kiện",
        isActive: true, age: 25, income: 5000000, creditScore: 650, hasBadDebt: false,
        expected: "Từ chối: Thu nhập không đủ điều kiện"
    },
    {
        id: "TC-04",
        description: "Điểm tín dụng quá thấp (vừa bằng biên 600)",
        isActive: true, age: 25, income: 15000000, creditScore: 600, hasBadDebt: false,
        expected: "Từ chối: Điểm tín dụng quá thấp"
    },
    {
        id: "TC-05",
        description: "Khách hàng LÝ TƯỞNG (Không nợ xấu)",
        isActive: true, age: 25, income: 15000000, creditScore: 650, hasBadDebt: false,
        expected: "Thành công: Đủ điều kiện vay vốn"
    },
    {
        id: "TC-06",
        description: "Khách hàng CÓ NỢ XẤU",
        isActive: true, age: 25, income: 15000000, creditScore: 650, hasBadDebt: true,
        expected: "Từ chối: Khách hàng đang có nợ xấu"
    }
];

Kết quả test:
TC-01 : PASSED
TC-02 : PASSED
TC-03 : PASSED
TC-04 : PASSED
TC-05 : PASSED
TC-06 : PASSED