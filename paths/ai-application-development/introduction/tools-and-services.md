# เครื่องมือและบริการสำหรับการพัฒนาแอปพลิเคชัน AI ฝั่ง Microsoft

## บริการ AI ของ Microsoft Azure

Microsoft มีบริการ AI หลากหลาย ที่สามารถใช้ในการพัฒนา AI Application ได้ โดยจะแบ่งเป็น 3 กลุ่มใหญ่ๆ ด้วยกันตามรายการด้านล่าง

### 1. Azure AI Services

ชุดอิ่มใจที่รวมบริการ AI สำเร็จรูปพร้อมใช้เข้ามาไว้เป็นอันเดียว (ชื่อเดิมเรียกว่า Azure Cognitive Services) บริการลักษณะนี้คือ AI Model ที่ถูกสร้างมาทำงานเฉพาะทาง ที่สามารถสั่ง deploy เป็น Web API พร้อม SDK ในภาษาโปรแกรมยอดนิยม

ในชุด Azure AI Service สามารถ แบ่งเป็นกลุ่มย่อยๆ ได้ดังนี้

- **Vision**: วิเคราะห์ภาพและวิดีโอเพื่อนำข้อมูลออกมาใช้งาน
- **Speech**: แปลงเสียงเป็นข้อความและข้อความเป็นเสียง และรวมถึงการแปลเสียง
- **Language**: เข้าใจและประมวลผลภาษาธรรมชาติ รวมถึงการวิเคราะห์ความรู้สึกและการแปลภาษา
- **Generative**: สร้าง หรือสังเคราะห์ content ใหม่ๆ เช่นข้อความ หรือรูปภาพ

[เรียนรู้เพิ่มเติมเกี่ยวกับ Azure AI Services](https://azure.microsoft.com/en-us/solutions/ai)

### 2. Azure Machine Learning

Azure Machine Learning เป็นบริการบนคลาวด์อีกตัวที่ช่วยให้นักพัฒนาสามารถสร้าง ฝึก และปรับใช้โมเดลการเรียนรู้ของเครื่อง (machine learning) ได้ มันมีเครื่องมือสำหรับขั้นตอนต่างๆ ที่จำเป็นในการสร้าง Model:

- **Data Preparation**: ทำ clean data และเตรียมข้อมูลสำหรับการทำ machine learning
- **Model Training**: การ train model โดยใช้อัลกอริทึมและเฟรมเวิร์กต่างๆ 
- **Model Deployment**: ใช้โมเดลที่เทรนแล้ว มา deploy เป็น Web API เพื่อไปใช้งานในระบบต่อ 
- **Model Management**: จัดการ และตรวจสอบ model แต่ละ version 

> การใช้งาน Azure Machine Learning มักจะเป็นจุดที่เราพิจารณาแล้วว่า model แบบสำเร็จรูป ไม่ตอบโจทย์อีกต่อไป คนที่มาทำในส่วนนี้ควรมีความรู้ด้าน Data science และ Machine learning นอกเหนือจากความรู้ในการพัฒนาซอฟต์แวร์ด้วยนะ

[เรียนรู้เพิ่มเติมเกี่ยวกับ Azure Machine Learning](https://azure.microsoft.com/en-us/services/machine-learning/)


### 3. Azure Applied AI Services

กลุ่มสุดท้ายนี้ ปัจจุบันเป็นกลุ่มที่ถูกรวมเข้าไปในชุด Azure AI Service แล้ว แต่กลุ่มนี้เมื่อก่อนถูกเรียกว่า Azure Applied AI Service เป็นกลุ่มที่มีการพัฒนารูปแบบการใช้งานจาก Azure AI Service ที่ให้มาแค่ model กับ Web API มาเป็นรูปแบบที่มีการปรับให้เข้ากับ use case ในการใช้งานจริงทางธุรกิจมากขึ้น

- Azure AI Document Intelligence 
- Azure AI Search 
- Azure AI Video Indexer
- Azure AI Personalizer

## ที่มาอ้างอิง

- https://azure.microsoft.com/en-us/solutions/ai
- https://nextflow.in.th/2022/azure-applied-ai-service-ai-microsoft/
- https://azure.microsoft.com/en-us/services/machine-learning/




