import React from "react";

const HomeConcept = () => {
  return (
    <section className="section section-concept relative bg-white overflow-hidden py-10 md:py-20">
      <div className="container mx-auto px-5">
        <div className="rainbow" />
        <div className="flex flex-wrap lg:flex-nowrap gap-5">
          <div className="w-full relative lg:w-6/12 pr-10 md:pr-12">
            <img
              className="w-full object-cover"
              src="/assets/image/mom-hug-baby.webp"
              alt="srichand-baby"
            />
            <div className="absolute w-1/4 bottom-0 right-0">
              <img src="/assets/image/baby-hi.webp" alt="srichand-baby" />
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <h1 className="text-primary">ศรีจันทร์ เบบี้</h1>
            <h3 className="text-orange">ตัวช่วยดูแลผิว เพื่อคุณแม่มือโปร</h3>
            <p className="mb-5 text-2xl text-secondary">
              เพราะผิวลูกน้อยเป็นผิวที่บอบบาง และง่ายต่อการระคายเคืองมากกว่าผิวของผู้ใหญ่
              รวมถึงเกราะป้องกันผิวนั้นยังบอบบาง ทำให้คุณแม่เกิดความกังวลใจอยู่ตลอดเวลา
              ไม่สามารถปฏิบัติหน้าที่ได้อย่างเต็มที่
              จึงมองหาผลิตภัณฑ์ที่เข้ามาช่วยจัดการปัญหาผิวของลูกน้อย
            </p>
            <p className="text-2xl text-secondary">
              ศรีจันทร์ เบบี้เป็นแบรนด์ที่เข้าใจปัญหาผิวที่เกิดขึ้นกับลูกน้อย
              จึงพัฒนาผลิตภัณฑ์เพื่อคุณแม่
              ด้วยการคัดสรรสารสกัดจากธรรมชาติที่ช่วยปกป้องผิวจากผดผื่นคัน
              ที่มีสาเหตุมาจากความอับชื้น พร้อมฟื้นบำรุงและเสริมสร้างผิวของลูกน้อยให้แข็งแรง
              ให้คุณแม่ๆ จัดการปัญหาผิวได้อย่างมือโปร
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeConcept;
