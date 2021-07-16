import React, { Fragment } from "react";
import { Layout } from "@/components/container";
import { Jumbotron, PageHeadings, HeadSeo, Tabs } from "@/components/commons";
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
    <Fragment>
      <HeadSeo
        siteTitle="Where to buy"
        desc="สั่งซื้อซื้อสินค้าได้ที่ไหนบ้าง"
        imgSrc="https://srichandbaby.com/assets/image/pagetitle/banner-head.jpg"
        siteUrl="https://srichandbaby.com/where-to-buy"
      />
      <Layout>
        <Jumbotron className="pt-20 md:pt-36" />
        <section className="section section-where-to-buy pb-24">
          <div className="container mx-auto px-5">
            <PageHeadings align="center" title="สั่งซื้อออนไลน์ได้ที่" />
            <div className="text-gray-600 body-font md:px-5 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
                    <a href="/" target="_blank" rel="noreferrer">
                      <span>
                        <img
                          className="w-full object-cover object-center"
                          src="/assets/image/brands/1948-beauty.jpeg"
                          alt="blog"
                        />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
                    <a href="/" target="_blank" rel="noreferrer">
                      <span>
                        <img
                          className="w-full object-cover object-center"
                          src="/assets/image/brands/shopee.jpeg"
                          alt="blog"
                        />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
                    <a href="/" target="_blank" rel="noreferrer">
                      <span>
                        <img
                          className="w-full object-cover object-center"
                          src="/assets/image/brands/watsonslogo.jpeg"
                          alt="blog"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="where-to-buy pb-0 lg:pb-20">
              <div className="flex items-center justify-between text-center py-10 lg:py-20 px-5">
                <div className="flex-1 min-w-0">
                  <h3 className="text-3xl leading-8 font-semibold tracking-tight tracking-wide text-gray-500 sm:text-4xl">
                    หาซื้อได้ที่
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
    </Fragment>
  );
};

export default WhereToBuy;
