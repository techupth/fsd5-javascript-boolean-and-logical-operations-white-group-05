// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;
let hasPromotion;
// กำหนดค่าตามคุณสมบัติของ John
lastMonthPaidMoreThan4000 = true; // มียอดสั่งซื้อเดือนที่แล้วมากกว่า 4000 บาท
isWeekday = true; // ไปซื้อของวันศุกร์
hasBoughtProductFromITCategory = false; // ไม่เคยซื้อของในหมวดหมู่ IT มาก่อน
hasAttendedDiscountEvent = true; // เคยเข้าร่วมกิจกรรมมหกรรมลดราคาครั้งที่ 2
isPlatinum = false; // เป็น Member ระดับ Gold

//คุณสมบัติของ  John มีสิทธิได้รับโปรโมชั่นส่วนลดหรือไม่
hasPromotion =
  (lastMonthPaidMoreThan4000 &&
    isWeekday &&
    !hasBoughtProductFromITCategory &&
    !hasAttendedDiscountEvent) ||
  isPlatinum;

console.log(hasPromotion);
