import React from "react";
import Image from "next/image";
import { FeatureTitleSection } from "@/components/commons";

const HomeConcept = () => {
  return (
    <section className="section section-concept relative bg-white overflow-hidden py-10 md:py-20">
      <div className="container mx-auto px-5">
        <div className="rainbow" />
        <div className="flex flex-wrap lg:flex-nowrap gap-5">
          <div className="w-full relative lg:w-6/12 pr-10 md:pr-12">
            <Image
              src="/assets/image/PR-Bed-Set_136.png"
              alt="srichand-baby"
              width={512}
              height={649}
              layout="responsive"
              placeholder="blur"
            />
            <div className="absolute w-1/4 bottom-0 right-0">
              <Image src="/assets/image/baby-hi.png" alt="srichand-baby" width={163} height={310} />
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <FeatureTitleSection
              className="pt-10 lg:pt-5 mb-5"
              align="left"
              title="ตัวช่วยดูแลผิว เพื่อคุณแม่มือโปร"
            />
            <p className="mb-5 text-2xl">
              เพราะผิวลูกน้อยเป็นผิวที่บอบบาง และง่ายต่อการระคายเคือง
              <span className="block md:inline">
                มากกว่าผิวของผู้ใหญ่ รวมถึงเกราะป้องกันผิวนั้นยังบอบบาง
              </span>
              <span className="block md:inline">
                {" "}
                ทำให้เกิดความกังวลใจอยู่ตลอดเวลา ไม่สามารถปฏิบัติหน้าที่ได้อย่างเต็มที่
              </span>
              <span className="block md:inline">
                {" "}
                จึงมองหาผลิตภัณฑ์ที่เข้ามาช่วยจัดการปัญหาผิวของลูกน้อย
              </span>
            </p>
            <p className="text-2xl">
              ศรีจันทร์ เบบี้เป็นแบรนด์ที่เข้าใจปัญหาผิวที่เกิดขึ้นกับลูกน้อย
              <span className="block md:inline">
                {" "}
                จึงพัฒนาผลิตภัณฑ์เพื่อคุณแม่ ด้วยการคัดสรรสารสกัดจาก
              </span>
              <span className="">ธรรมชาตืที่ช่วยปกป้องผิวจากผดผื่นคัน ที่มีสาเหตุมาจาก</span>
              <span className="">ความอับชื้น พร้อมฟื้นบำรุงและเสร้มสร้างผิวของลูกน้อยให้</span>
              <span className="">แข็งแรง ให้คุณแม่ๆ จัดการปัญหาผิวได้อย่างมือโปร</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeConcept;
