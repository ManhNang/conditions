function assertEquals(expected, actual, testName = "Test Case"){
    if (actual === expected) {
        console.log(
            `%c[PASS] ${testName} -> Expected: ${expected} | Actual: ${actual}`, 
            "color: #2ecc71; font-weight: bold; background-color: #e8f8f5; padding: 2px 5px; border-radius: 3px;"
        );
    } else {
        console.log(
            `%c[FAIL] ${testName} -> Expected: ${expected} | Actual: ${actual}`, 
            "color: #e74c3c; font-weight: bold; background-color: #fceae9; padding: 2px 5px; border-radius: 3px;"
        );
    }
}

assertEquals(
    calculateRewardPoints("MEMBER", 250000), 
    25, 
    "Test 1: MEMBER mua đơn hàng 250k (250000 / 10000 = 25 điểm)"
);

assertEquals(
    calculateRewardPoints("VIP", 300000), 
    30, 
    "Test 2: VIP mua đơn hàng dưới 500k (Không nhân đôi: 300000 / 10000 = 30 điểm)"
);

assertEquals(
    calculateRewardPoints("VIP", 600000), 
    120, 
    "Test 3: VIP mua đơn hàng trên 500k (Được nhân đôi: 60 * 2 = 120 điểm)"
);

assertEquals(
    calculateRewardPoints("VIP", 500000), 
    100, 
    "Test 4: VIP mua đơn hàng ĐÚNG BẰNG 500k (Biên logic)"
);

assertEquals(
    calculateRewardPoints("GUEST", 100000), 
    "Khách hàng không hợp lệ", 
    "Test 5: Nhập sai hạng khách hàng (GUEST)"
);
