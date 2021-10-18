import React from "react";
import { Layout } from "@/components/container";
import { PageTitle, FeatureTitleSection, HeadSeo, Tabs } from "@/components/commons";
import { ExcelPage } from "@/components/views";

import { customer } from "../../mock/customer";

const WhereToBuy = () => {
  const central = customer.filter((region) => region.Region === "กลาง");
  central.forEach((element, index) => {
    element.Key = index + 1;
  });
  const north = customer.filter((region) => region.Region === "เหนือ");
  north.forEach((element, index) => {
    element.Key = index + 1;
  });
  const south = customer.filter((region) => region.Region === "ใต้");
  south.forEach((element, index) => {
    element.Key = index + 1;
  });
  const northeastern = customer.filter((region) => region.Region === "อีสาน");
  northeastern.forEach((element, index) => {
    element.Key = index + 1;
  });
  const eastern = customer.filter((region) => region.Region === "ตะวันออก");
  eastern.forEach((element, index) => {
    element.Key = index + 1;
  });

  return (
    <>
      <HeadSeo
        siteTitle="Where to buy"
        desc="สั่งซื้อซื้อสินค้าได้ที่ไหนบ้าง"
        siteUrl="https://srichandbaby.twinsynergy.co.th/where-to-buy"
        imgPreload="/assets/image/banner-polygon.webp"
      />
      <Layout>
        <PageTitle className="pt-20 md:pt-36" />
        <section className="section section-where-to-buy pb-24">
          <div className="container mx-auto px-5">
            <FeatureTitleSection align="left" title="คลิกด้านล่างเพื่อสั่งซื้อออนไลน์" />
            <div className="text-gray-600 body-font md:px-5 mx-auto">
              <div className="grid sm:grid-cols-3 gap-3">
                <div>
                  <a href="https://www.1948beauty.com" target="_blank" rel="noreferrer">
                    <img className="w-full" src="/assets/image/brands/1948beauty.webp" alt="blog" />
                  </a>
                </div>
                <div>
                  <a href="https://shopee.co.th/srichandofficial" target="_blank" rel="noreferrer">
                    <img className="w-full" src="/assets/image/brands/shopee.webp" alt="blog" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.watsons.co.th/all-brands/b/170331"
                    target="_blank"
                    rel="noreferrer">
                    <img
                      className="w-full"
                      src="/assets/image/brands/watsonslogo.webp"
                      alt="blog"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="where-to-buy pb-0 lg:pb-20">
              <div className="flex items-center justify-between text-center py-10 lg:py-15 sm:px-5">
                <div className="flex-1 min-w-0">
                  <h3 className="text-3xl leading-8 font-semibold tracking-tight tracking-wide text-gray-500 sm:text-4xl">
                    สามารถหาซื้อผลิตภัณฑ์ที่ร้านค้าชั้นนำ ดังนี้
                  </h3>
                </div>
              </div>
              <Tabs>
                <div label="central" title="ภาคกลาง">
                  <ExcelPage
                    data={central}
                    classThead="hidden"
                    columns={[
                      { key: "1", Header: "", accessor: "Key" },
                      { key: "2", Header: "", accessor: "Customer_Name" },
                      { key: "3", Header: "", accessor: "Province" }
                    ]}
                  />
                </div>
                <div label="north" title="ภาคเหนือ">
                  <ExcelPage
                    data={north}
                    classThead="hidden"
                    columns={[
                      { key: "1", Header: "", accessor: "Key" },
                      { key: "2", Header: "", accessor: "Customer_Name" },
                      { key: "3", Header: "", accessor: "Province" }
                    ]}
                  />
                </div>
                <div label="south" title="ภาคใต้">
                  <ExcelPage
                    data={south}
                    classThead="hidden"
                    columns={[
                      { key: "1", Header: "", accessor: "Key" },
                      { key: "2", Header: "", accessor: "Customer_Name" },
                      { key: "3", Header: "", accessor: "Province" }
                    ]}
                  />
                </div>
                <div label="eastern" title="ภาคตะวันออก">
                  <ExcelPage
                    data={eastern}
                    classThead="hidden"
                    columns={[
                      { key: "1", Header: "", accessor: "Key" },
                      { key: "2", Header: "", accessor: "Customer_Name" },
                      { key: "3", Header: "", accessor: "Province" }
                    ]}
                  />
                </div>
                <div label="northeastern" title="ภาคตะวันออกเฉียงเหนือ">
                  <ExcelPage
                    data={northeastern}
                    classThead="hidden"
                    columns={[
                      { key: "1", Header: "", accessor: "Key" },
                      { key: "2", Header: "", accessor: "Customer_Name" },
                      { key: "3", Header: "", accessor: "Province" }
                    ]}
                  />
                </div>
              </Tabs>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default WhereToBuy;
