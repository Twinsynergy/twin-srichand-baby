import React from "react";
import { HeadSeo } from "@/components/commons";
import { Layout } from "@/components/container";

const AboutUs = () => {
  return (
    <>
      <HeadSeo
        siteTitle="เกี่ยวกับเรา"
        desc="ในอดีตมีลูกค้าบางกลุ่มนำแป้งศรีจันทร์จากต้นตำรับ (ผงหอมศรีจันทร์) ไปใช้กับเด็กเล็กซึ่งได้ผลดีในเรื่องการช่วยยับยั้ง และป้องกันการเกิดผื่นผ้าอ้อม และแนะนำกันต่อๆ มา"
        siteUrl="https://srichandbaby.twinsynergy.co.th/about-us"
        imgSrc="https://srichandbaby.twinsynergy.co.th/assets/image/pagetitle/banner-about.webp"
        imgPreload="/assets/image/pagetitle/banner-about.webp"
      />
      <Layout>
        <section className="section section-hero mx-auto bg-white">
          <div
            className="page-title-area bg-two"
            style={{
              backgroundImage: "url(/assets/image/pagetitle/banner-about.webp)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top"
            }}>
            <div className="d-table">
              <div className="d-table-cell-">
                <div className="text-center text-white">
                  <h2 className="text-4xl md:text-8xl">เกี่ยวกับเรา</h2>
                  <h1 className="text-2xl md:text-3xl">ศรีจันทร์เบบี้</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section overflow-hidden relative section-main">
          <div className="absolute -left-60 top-36 hidden sm:block">
            <img src="/assets/image/rainbow-50.webp" alt="rainbow" />
          </div>
          <div className="container mx-auto pt-16 pb-24 md:pb-36">
            <div className="block md:flex px-5">
              <div className="w-full md:w-5/12 lg:w-6/12 lg:pr-6">
                <h2 className="text-ingredients text-4xl sm:text-5xl md:text-6xl">เรื่องราว</h2>
                <p className="text-ingredients-secondary text-2xl">
                  ในสมัยก่อน
                  ลูกค้าได้ซื้อผลิตภัณฑ์ผงหอมศรีจันทร์ที่มีคุณสมบัติสำหรับช่วยควบคุมความมัน
                  และป้องกันการเกิดผดผื่น สำหรับดูแลความสวยของผิวหน้า
                  แต่ทว่าลูกค้ายังมีการนำสินค้าไปทดลองใช้กับเด็กเล็ก
                  ซึ่งให้ผลลัพธ์ในเรื่องการยับยั้ง
                  และป้องกันการเกิดผดผื่นผ้าอ้อมจากความอับชื้นได้เช่นเดียวกัน
                  จึงได้แนะนำลูกค้าท่านอื่นๆกันต่อมา
                </p>
                <p className="text-ingredients-secondary text-2xl">
                  ทางศรีจันทร์ เล็งเห็นโอกาสในการขยายผลิตภัณฑ์ไปสู่กลุ่มธุรกิจใหม่
                  จึงได้พัฒนาแบรนด์ขึ้นมาสำหรับกลุ่มผลิตภัณฑ์แป้งเด็ก
                  ที่มีคุณสมบัติช่วยให้กลุ่มลูกค้าที่เป็นคุณแม่สามารถจัดการกับปัญหาผิวของลูกน้อยได้อย่างสะดวกมากขึ้นกว่าแบรนด์ทั่วไป
                </p>
                <p className="text-ingredients-secondary text-2xl">
                  เปิดตัวด้วยผลิตภัณฑ์แป้งเด็กที่ได้นำเข้าส่วนผสมจากต่างประเทศ
                  ทำให้ได้ผลิตภัณฑ์ที่ช่วยปกป้องผิวลูกน้อยจากผดผื่น อันมีสาเหตุมาจากความเปียกชื้น
                  และยังช่วยเสริมความแข็งแรงของผิวลูกน้อยอีกด้วย ปัจจุบันนี้ทางแบรนด์ SRICHAND Baby
                  ยังคงเดินหน้าในการพัฒนาผลิตภัณฑ์อื่นๆ อาทิ ผลิตภัณฑ์อาบน้ำและสระผม
                  ผลิตภัณฑ์ครีมสำหรับป้องกันการเกิดผดผื่น
                </p>

                <div className="relative  pt-20 pb-20 md:pb-0 md:pt-32">
                  <img src="/assets/image/baby-about-2.webp" alt="srichand-baby" />
                  {/* <div className="baby w-24 h-28 lg:w-32 lg:h-36 absolute bottom-14 lg:-bottom-5 right-0 lg:-right-10" /> */}
                </div>
              </div>
              <div className="w-full ml-auto md:w-5/12 lg:w-6/12">
                <div className="block relative w-full lg:w-10/12 h-full lg:ml-auto">
                  <img
                    className="md:absolute right-0"
                    src="/assets/image/baby-about-1.webp"
                    alt="srichand-baby"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-60 bottom-36 hidden sm:block">
            <img src="/assets/image/rainbow-50.webp" alt="rainbow" />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AboutUs;
