1. Chạy TC-01: calculateShippingFee("STANDARD", 0)
Kết quả: PASSED (Khớp với kỳ vọng).

2. Chạy TC-02: calculateShippingFee("EXPRESS", 5)
Kết quả: PASSED (Nhánh else xử lý chính xác mốc biên 5).

3. Chạy TC-03: calculateShippingFee("SAME_DAY", -2.5)
Kết quả: PASSED (Chặn dữ liệu lỗi thành công).

4. Chạy TC-04: calculateShippingFee("standard", 10)
Kết quả: PASSED (Nhưng ở góc độ trải nghiệm người dùng, ta nên dùng .toUpperCase() để tránh lỗi gõ chữ thường).

5. Chạy TC-05: calculateShippingFee("SAME_DAY", 9999)
Kết quả: PASSED.