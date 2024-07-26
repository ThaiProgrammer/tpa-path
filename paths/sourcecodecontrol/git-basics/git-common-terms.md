<script setup>
    import FlashCard from '/components/FlashCard.vue';

    const terms = [
        {
            term: "Working Directory",
            form: "noun",
            definition: "เป็นโฟลเดอร์ที่เราใช้ทำงาน โดยจะมี 2 สถานะ ได้แก่ clean คือไม่มีการเปลี่ยนแปลงใด ๆ และ dirty คือมีการเปลี่ยนแปลงเกิดขึ้นในโปรเจกต์นี้"
        },
        {
            term: 'Staging Area',
            form: 'noun',
            definition: 'เป็นที่ที่ใช้สำหรับเก็บไฟล์ต่าง ๆ ที่เราได้แก้ไข และรอการ commit ไปยัง repository'
        },
        {
            term: 'Repository',
            form: 'noun',
            definition: 'เป็นที่เก็บข้อมูล และประวัติการเปลี่ยนแปลงทั้งหมดของโปรเจกต์ โดย Repo จะมีอยู่ 2 ประเภท คือ Local Repository ที่จะอยู่บนเครื่องของคุณ และ Remote Repository ที่จะอยู่บนเซิร์ฟเวอร์'
        },
        {
            term: 'Clone',
            form: 'verb',
            definition: 'การคัดลอก repository จาก remote repository มายัง local repository ของคุณ'
        },
        {
            term: 'Branch',
            form: 'noun',
            definition: 'เป็นส่วนที่ย่อยออกมาจาก repo, ถ้ามอง repo เป็นต้นไม้, branch ก็เป็นเหมือนกิ่งไม้ที่แตกออกมาจากต้นไม้ต้นนั้น'
        },
        {
            term: 'Commit',
            form: 'verb',
            definition: 'คือการบันทึกการเปลี่ยนแปลงของไฟล์ลงใน repository โดยมักจะมีข้อความอธิบายการเปลี่ยนแปลงด้วย'
        },
        {
            term: 'Merge',
            form: 'verb',
            definition: 'การรวม branch แต่ละ branch เข้าด้วยกัน'
        },
        {
            term: 'Conflict',
            form: 'noun',
            definition: 'คือสถานการณ์ที่เกิดขึ้นเมื่อ Git ไม่สามารถรวมการเปลี่ยนแปลงของไฟล์จาก branch ต่าง ๆ ได้ และต้องให้ผู้ใช้เลือกว่าจะใช้การเปลี่ยนแปลงจาก branch ไหน'
        },
        {
            term: 'Fetch',
            form: 'verb',
            definition: 'การดึงข้อมูลจาก remote repository มายัง local repository และดูว่า branch ที่กำลังทำอยู่มีการเปลี่ยนแปลงอะไรบ้าง แต่ยังไม่ได้อัปเดตข้อมูลลงไปใน branch'
        },
        {
            term: 'Pull',
            form: 'verb',
            definition: 'การดึงข้อมูลจาก remote repository มายัง local repository และอัปเดตข้อมูลลงไปใน branch ที่กำลังทำอยู่'
        },
        {
            term: 'Push',
            form: 'verb',
            definition: 'การส่งข้อมูลที่เราได้ทำการ commit ไว้ที่ local repository ไปยัง remote repository ที่เรากำลังทำงานร่วมกับผู้อื่นอยู่'
        },
    ];
</script>

# Git common terms

ก่อนที่เราจะไปลองใช้งาน Git กันแบบจริง ๆ จัง ๆ เรามาทำความรู้จักกับคำศัพท์พื้นฐานที่เกี่ยวกับ Git กันก่อนเลยดีกว่า จะได้ไม่งงเวลาใช้งานนะครับ

<div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; gap: 16px">
<FlashCard v-for="term in terms" :key="term.term">
    <template v-slot:front>
        {{ term.term }}
    </template>
    <template v-slot:back>
        <div style="margin-bottom: 10px">
            <p style="margin: 0; line-height: 120%; font-size: x-large;"><strong>{{ term.term }}</strong></p>
            <p style="margin: 0; line-height: 120%; color: gray;"><em>({{ term.form }})</em></p>
        </div>
        {{ term.definition }}
    </template>
</FlashCard>
</div>

## Credit
ขอบคุณเนื้อหาดีๆจากต้นทางครับ [TTSS Learning Portal - Learn together, succeed together.](https://learning-ttss.vercel.app/portal.html)