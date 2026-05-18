Test 1: Khách hàng thường (MEMBER)
hiển thị màu XANH (PASS) vì $250000 / 10000 = 25$, khớp hoàn toàn

Test 2: Khách hàng VIP với đơn hàng nhỏ dưới 500k
hiển thị màu XANH (PASS) vì $300000 / 10000 = 30$, rơi vào nhánh else của VIP.

Test 3: Khách hàng VIP với đơn hàng lớn trên 500k
hiển thị màu XANH (PASS) vì $600000 > 500000$, điểm được nhân đôi thành 120.

Test 4: Điểm biên - Khách hàng VIP với đơn hàng ĐÚNG BẰNG 500k
hiển thị màu XANH (PASS).
- Giải thích về lỗi: Trong đoạn code bạn gửi, điều kiện đang viết là if (orderTotal >= 500000). Dấu >= nghĩa là lớn hơn hoặc bằng, do đó trường hợp đúng 500,000 vẫn được tính nhân đôi điểm (ra 100) $\rightarrow$ Test Pass.
- Nếu bạn muốn code bị lỗi bỏ sót đúng 500k giống như ghi chú, điều kiện đúng phải là if (orderTotal > 500000). Nếu sửa thành dấu >, Test 4 sẽ ngay lập tức báo màu ĐỎ (FAIL) vì code sẽ trả về 50 điểm thay vì 100 điểm.

Test 5: Trường hợp hạng khách hàng không hợp lệ
hiển thị màu XANH (PASS) vì trả về đúng chuỗi cảnh báo lỗi.