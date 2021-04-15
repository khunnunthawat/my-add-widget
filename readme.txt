Daytech Dashboard (Phase 2)

กำหนดการ
ส่งภายในวันที่ 16 เมษายน 18.00 น. (ค่อยทำวันที่ 16 ก็ได้ครับ หากกำลังศึกษาเรื่องอื่นอยู่ หรือทำควบคู่กันไปก็ได้)
ก่อนทำ Phase 2 ให้ commit งานทั้งหมดก่อนหน้าไว้ที่ branch ชื่อ phase-1 จากนั้นให้ checkout ไป branch ชื่อ phase-2 จากนั้นจึงค่อยลงมือทำงาน


Demo ตามนี้ครับ
https://dt.findxsolution.com/
ให้ลองเข้า Demo ทั้งคอมและมือถือดู


Feature ที่เพิ่มเติม
ให้เข้าไปดู Demo อีกครั้ง และสังเกต Feature ที่เพิ่มเข้ามา

สามารถเพิ่ม Widget ทั้งสามแบบได้ โดยขึ่น Modal ให้ทำรายการ
 JustSay แสดงข้อความที่ผู้ใช้ระบุ
กดเพิ่มแล้วจะมีฟอร์มให้กรอกข้อความ จากนั้นค่อยเพิ่ม JustSay Widget
ถ้าระบุไม่ถึง 3 ตัวอักษร แสดง error "Please enter at least 3 characters."
ข้อความจะถูก trim ช่องว่างหน้าหลังก่อนเช็คเงื่อนไขข้างต้น และก่อนนำไปสร้าง Widget [1]
Counter ใช้นับเลข สามารถระบุจำนวนเริ่มต้นได้
กดเพิ่มแล้วจะมีให้กรอกค่า จากนั้นค่อยเพิ่ม Counter Widget
ถ้าไม่ระบุ แสดง error "Please provide some value."
หรือระบุค่าน้อยกว่า 0 แสดง error "Please enter at least 0."
Timer นาฬิกาจับเวลา
กดเพิ่มแล้วจะเป็นการเพิ่ม Widget Timer ทันที
ในแต่ละ Widget ที่เพิ่ม สังเกตส่วนท้ายว่ามีการบอกว่าเพิ่ม Widget ดังกล่าวเมื่อไหร่ สามารถใช้ [2] ในการแก้ปัญหาได้
ทุก Widget ที่เพิ่มเข้ามา มีการทำงานแยกกันโดยสมบูรณ์ เช่นระบบ Counter, Timer ของแต่ละ Widget สามารถใช้งานแยกกันได้ ไม่ตีกัน
โดยกรณีเริ่มเข้าสู่หน้าเว็บ หรือไม่มีรายการ Widget ที่เคยเพิ่ม ให้แสดงผล "No widget at all. Click HERE to add a new one" ตาม Demo
สามารถล้าง Widget ทั้งหมดทิ้งโดยกดปุ่ม Clear all
หน้า Counter ข้อความปุ่ม Reset เปลี่ยนเป็น Set zero, หน้า About แก้ข้อความนิดหน่อย ;P


คำแนะนำ
อย่าลืมใส่ key props ของการวน map ของ array เพื่อสร้าง JSX Component ทุกครั้ง
Button ที่ใช้ทั้งโปรเจกต์ สามารถใช้จาก Component เดียว reuse ทั้งงานได้นะ 
ตัวอย่าง Modal Component (Modal.js)
สามารถนำไปใช้ได้แล้ว ปรับปรุงตามสะดวก
ให้ทำความเข้าใจตัว 
หลักการทำงานของ props children, onCancel 
Tailwind CSS ที่ใช้ทั้งหมด ว่ามีคอนเสปต์การทำงานของ CSS อย่างไร
import { IoClose } from 'react-icons/io5';

const Modal = ({ children, onCancel = () => {} }) => {
  return (
    <div className='fixed flex items-center justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70'>
      <div className='relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full'>
        <button
          className='absolute text-lg text-gray-600 top-4 right-4 focus:outline-none'
          onClick={onCancel}
        >
          <IoClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
วิธีการเรียกใช้ Component Modal
ไม่ว่าจะใส่ไว้ที่ไฟล์ไหน จะมีผลคือกินทั้งจอเสมอ
...
<Modal onCancel={...}>
   ของที่ต้องการ
</Modal>

// onCancel คือคำสั่งเมื่อกดปุ่ม x ใน Modal จะเรียกใช้หรือไม่ก็ได้


Package ที่ต้องใช้
React icons https://react-icons.github.io/react-icons/
ที่ใน Demo ใช้ มี BiBomb, RiAddCircleLine, IoTimerOutline, AiOutlineMessage, RiIncreaseDecreaseLine, IoClose


แก้ไขจาก Phase 1
เนื่องจากการแสดงผลที่สับสน ตัว Layout ที่ก่อนหน้านี้ให้ใช้ .masonry ขอเปลี่ยนเป็นใช้ Flexbox แทนโดยแสดง 2 columns เมื่อเป็นจอ desktop และแสดง 1 column เมื่อเป็นจอมือถือ (จุดแบ่งที่ 768px หรือ md: ใน Tailwind CSS)


อ้างอิง
[1] ใช้คำสั่ง .trim() เช่น 
let text = "   ab c     ";
console.log(text.trim())  // output: "ab c"
[2] https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date ให้ใช้คำตอบของคนที่จำนวนโหวตสูงสุด (คำตอบที่ 2) 