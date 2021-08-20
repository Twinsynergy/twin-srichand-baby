import styled from "styled-components";

const ProductCertificate = styled.div`
  background-image: url("/assets/image/bg-product-cert.webp");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 732px;
  @media (max-width: 1024px) {
    background-position: top left;
  }
  @media (max-width: 425px) {
    height: 400px;
  }
`;

export default ProductCertificate;
