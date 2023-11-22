let isOver18;
let hasCriminalBlacklist;
let isAllow;

//กำหนดค่าตามคุณสมบัติของ James
isOver18 = true; // James มีอายุ 18 ปี
hasCriminalBlacklist = false; // James ไม่เคยมีประวัติอาชญากรรม

//James มีสิทธิ์เข้างานหรือไม่
isAllow = isOver18 && !hasCriminalBlacklist;

console.log(isAllow);
