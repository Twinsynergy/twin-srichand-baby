import React from "react";
import { HeadSeo } from "@/components/commons";
import { Layout } from "@/components/container";

const AboutUs = () => {
  return (
    <>
      <HeadSeo
        siteTitle="เกี่ยวกับเรา"
        desc="ในอดีตมีลูกค้าบางกลุ่มนำแป้งศรีจันทร์จากต้นตำรับ (ผงหอมศรีจันทร์) ไปใช้กับเด็กเล็กซึ่งได้ผลดีในเรื่องการช่วยยับยั้ง และป้องกันการเกิดผื่นผ้าอ้อม และแนะนำกันต่อๆ มา"
        imgSrc="https://srichandbaby.com/assets/image/pagetitle/banner-head.jpg"
        siteUrl="https://srichandbaby.com/about-us"
      />
      <Layout>
        <section className="section section-hero mx-auto bg-white">
          <div
            className="page-title-area bg-two"
            style={{
              backgroundImage: "url(/assets/image/pagetitle/banner-head.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              filter: "grayscale(1)"
            }}>
            <div className="d-table">
              <div className="d-table-cell-">
                <div className="text-center text-white">
                  <h2 className="text-4xl md:text-5xl">เกี่ยวกับเรา</h2>
                  <h1 className="text-2xl md:text-3xl">ศรีจันทร์เบบี้</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto pt-16 pb-24 md:pb-36">
          <div className="block md:flex px-5">
            <div className="w-full md:w-5/12 lg:w-6/12 lg:pr-6">
              <h2 className=" text-gray-900 text-4xl sm:text-5xl md:text-6xl">เรื่องราว</h2>
              <p className="typography-intro text-2xl">
                <span className="block mb-5">
                  ในอดีตมีลูกค้าบางกลุ่มนำแป้งศรีจันทร์จากต้นตำรับ{" "}
                  <span className="whitespace-nowrap">(ผงหอมศรีจันทร์)</span>
                  <br />
                  ไปใช้กับเด็กเล็กซึ่งได้ผลดีในเรื่องการช่วยยับยั้ง และป้องกันการเกิดผื่นผ้าอ้อม
                  และแนะนำกันต่อๆ มา
                </span>

                <span className="block mb-5">
                  ทางบริษัทฯจึงเล็งเห็นโอกาสในตลาดแป้งเด็ก จึงได้พัฒนาผลิตภัณฑ์ขึ้นมาใหม่
                  เพื่อให้มีคุณสมบัติที่ดีกว่า แป้งเด็กทั่วไป
                  โดยเลือกวัตถุดิบชั้นดีจากต่างประเทศเข้ามาใช้
                </span>

                <span>
                  และทำให้ได้<span className="whitespace-nowrap">แป้งเด็กศรีจันทร์เบบี้</span>
                  ที่ช่วยปกป้อง
                  <br />
                  ผิวจากความเปีบกชื้น ช่วยยับยั้งและป้องกันการเกิดผดผื่น
                  <br />
                  อีกทั้งยังช่วยเสริมสร้างความแข็งแรงของผิวอันบอบบางของลูกน้อย
                </span>
              </p>
              <div className="relative lg:w-8/12 pt-20 pb-20 md:pb-0 md:pt-32">
                <img src="/assets/image/banner2.jpg" alt="srichand-baby" />
                <div className="baby w-24 h-28 lg:w-32 lg:h-36 absolute bottom-14 lg:-bottom-5 right-0 lg:-right-10" />
              </div>
            </div>
            <div className="w-full ml-auto md:w-5/12 lg:w-6/12">
              <div className="block relative w-full lg:w-10/12 h-full lg:ml-auto">
                <img
                  className="md:absolute right-0"
                  src="/assets/image/baby-about-1.png"
                  alt="srichand-baby"
                />
                {/* <div className="absolute bg-gray-300 md:top-96 md:right-0 md:w-24 md:h-28 lg:w-32 lg:h-36"></div> */}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AboutUs;
