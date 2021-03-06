/* eslint-disable no-console */
import React, { useState } from "react";
import { Layout } from "@/components/container";
import {
  HomeSlider,
  HomeConcept,
  HomeIngredients,
  HomeInfoBrandCarousel,
  HomeReview
} from "@/components/views";
import { HeadSeo } from "@/components/commons";
import { getAllContentFromSlide } from "../utils/storyblok";

const slideCustomer = [
  {
    key: "1",
    reviews:
      "จะร้อนแค่ไหนพี่ตะวันก็สบายตัวแน่นอน มีสารสกัดจาก “ข้าวโอ็ค” เสริมทัพด้วยสารสกัดจาก “ดอกคาเลนดูล่า” ตัวช่วยให้ผิวชุ่มชื่นและปลอบประโลมผิว",
    image: "/assets/image/customer/customer-1.webp",
    title: "customer-1"
  },
  {
    key: "2",
    reviews:
      "หลังจากอาบแล้วรู้สึกว่าผิวดูนุ่มชุ่มชื้นที่สำคัญคือมั่นใจได้ว่าอ่อนโยนปลอดภัย ปราศจากพาราเบน แอลกอฮอล์ ซิลิโคน และสารแต่งสีใดๆ เพื่อให้คุณแม่ใช้ได้อย่างมั่นใจค่ะ",
    image: "/assets/image/customer/customer-2.webp",
    title: "customer-2"
  },
  {
    key: "3",
    reviews:
      "They are soft and not too thick or thin, and the raw edge detail gives this basic a cool factor in the fashion department!",
    image: "/assets/image/customer/customer-3.webp",
    title: "customer-3"
  }
];

const slideIngredients = [
  {
    key: "1",
    title: "Defensil",
    desc: '<div><p class="text-xl md:text-2xl mb-4">สาร Defensil เป็นสารที่ถูกคิดค้นขึ้นโดย RAHN Defensil(c) จากประเทศสวิสเซอร์แลนด์</p><p class="text-xl md:text-2xl mb-4">ช่วยเคลือบปกป้องผิวจาก การเสียดสีของผ้าอ้อมแล้ว อีกทั้งยังฟื้นฟูผิวลูกน้อย ให้แข็งแรงเพื่อลด โอกาสการเป็นซํ้า ประกอบด้วยสารสกัดจากธรรมชาติ 3 ชนิด ได้แก่</p><ul class="text-ingredients-list text-left text-xl md:text-2xl list-decimal pl-5"><li>Balloon Vine ปลอบประโลมผิวจากการระคายเคืองที่เกิดจากการเสียดสีของผิว</li><li>Echilum Oil ช่วยปกป้องผิวให้แลดูแข็งแรง มอบความชุมชื่นให้ผิว เพื่อลดโอกาสเกิดผิวระคายเคือง</li><li>Sunflower Oil มี Vitamin E ช่วยดูแลและฟื้นบำรุงผิว</li></ul></div>',
    image: "/assets/image/ingredients/ingredients-1-defensil.webp"
  },
  {
    key: "2",
    title: "Almond Milk",
    desc: '<div><p class="text-xl md:text-2xl mb-4">นํ้านมอัลมอนด์เป็นมอยส์เจอไรเซอร์ที่ดีต่อผิวมาก อุดมไปด้วยวิตามินอีแคลเซียมแมกนีเซียมโปรตีน และกรดไขมันโอเมก้า 3 ซึ่งด้วยประโยชน์ทั้งหมดที่มีในนมอัลมอนด์นี้</p><p class="text-xl md:text-2xl mb-4">จะช่วยทำให้ผิวของลูกน้อยไม่ระคายเคืองลดผดผื่นคันดูดซับนํ้าและนํ้ามันได้ดีช่วยปกป้องผิวจากความร้อนและความเปียกชื้นทำให้ผิวของลูกน้อยจะนุ่มชุ่มชื้นน่าสัมผัสแบบไม่มีความชื้นส่วนเกิน</p></div>',
    image: "/assets/image/ingredients/ingredients-2-almonds.webp"
  },
  {
    key: "3",
    title: "Honey Extract",
    desc: '<div class="text-xl md:text-2xl">นํ้าผึ้งบริสุทธิ์ จากแหล่งธรรมชาติที่อุดมสมบูรณ์จากฝรั่งเศสที่จะช่วยให้ผิวของลูกน้อยเนียนนุ่ม ยืดหยุ่นช่วยในกระบวนการผลัดเซลล์ผิว และเสริมคอลลาเจนให้ผิวดูสุขภาพดี สว่างใส แถมยังมีฤทธิ์ในการต้านเชื้อแบคทีเรียที่ไม่พึงประสงค์ที่ก่อให้เกิดผื่นคัน</div>',
    image: "/assets/image/ingredients/ingredients-3-honey-extract.webp"
  },
  {
    key: "4",
    title: "Calendula Extract",
    desc: '<div><p class="text-xl md:text-2xl mb-4">สารสกัดดอก Calendula officinalis L. (ดอก Marigold หรือ ดอกคาเลนดูล่า หรือ ดาวเรืองหม้อ) พบได้ตามแถบเมดิเตอร์เรเนียน</p><ul class="text-ingredients-list text-left text-xl md:text-2xl list-decimal pl-5"><li>Anti-inflamatory ลดการอักเสบ เช่นการอักเสบจากสิว ช่วยลดรอยแดงจากสิว ช่วยสมานแผล</li><li>Moisturizing เสริมความชุ่มชื้น ลดการระคายเคืองผิว</li><li>โดยเหมาะสำหรับผิวแพ้ง่ายและแห้ง หรือผิวที่ระคายเคือง Immunodolulatory เสริมให้ผิวแข็งแรง ช่วยให้ผิวไม่แพ้ง่าย เหมาะสำหรับผิวที่แพ้ง่าย เป็นผื่นง่าย</li><li>Reepithelizing เร่งการก่อตัวของชั้นผิว ช่วยให้ชั้นผิวมีสุขภาพดี แข็งแรง ให้ผิวสามารถสร้าง ชั้นผิวใหม่มาทดแทนได้รวดเร็ว และที่สำคัญ ให้ผิวอ่อนเยาว์อยู่เสมอ(anti-aging)</li></ul></div>',
    image: "/assets/image/ingredients/ingredients-4-celendula-extract.webp"
  },
  {
    key: "5",
    title: "Oat Extract",
    desc: '<div><p class="text-xl md:text-2xl mb-4">สารสกัดจากข้าวโอ๊ต ที่คัดสรรมาจากข้าวโอ๊ตเกรดพรีเมี่ยม อุดมไปด้วยกรดไขมันที่จำเป็นต่อโครงสร้างผิว</p><p class="text-xl mb-4">ซึ่งช่วยเพิ่มความชุ่มชื่นให้ผิวเนียนนุ่ม ช่วยบำรุงเกราะป้องกันผิว เสริมสร้างความแข็งแรง พร้อมล็อกความชุ่มชื้นทำให้ผิวอ่อนนุ่ม น่าสัมผัสแลดูสุขภาพดี</p></div>',
    image: "/assets/image/ingredients/ingredients-5-oat-extract.webp"
  }
];

const brand = [
  { key: "1", image: "/assets/image/brands/intro-feature-natural.webp", title: "natural" },
  {
    key: "2",
    image: "/assets/image/brands/intro-feature-paraben-free.webp",
    title: "paraben free"
  },
  {
    key: "3",
    image: "/assets/image/brands/intro-feature-hypoallergenic.webp",
    title: "hypoallergenic"
  },
  { key: "4", image: "/assets/image/brands/intro-feature-spincontrol.webp", title: "spincontrol" }
];

export default function Home(props) {
  const [story] = useState(props.story);
  return (
    <>
      <HeadSeo
        siteTitle="ตัวช่วยดูแลผิว เพื่อคุณแม่มือโปร"
        desc="เพราะผิวลูกน้อยเป็นผิวที่บอบบาง และง่ายต่อการระคายเคืองมากกว่าผิวของผู้ใหญ่ รวมถึงเกราะป้องกันผิวนั้นยังบอบบาง ทำให้เกิดความกังวลใจอยู่ตลอดเวลา"
        siteUrl="https://srichandbaby.twinsynergy.co.th/"
      />
      <Layout title="ศรีจันทร์ เบบี้" className="page-home">
        {story && <HomeSlider blok={story} />}
        <HomeConcept />
        <HomeIngredients slideValue={slideIngredients} />
        <HomeInfoBrandCarousel slideValues={brand} />
        <HomeReview customer={slideCustomer} />
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const { stories } = await getAllContentFromSlide();
  return {
    props: {
      story: stories || [],
      preview: context.preview || false
    },
    revalidate: 10
  };
}
