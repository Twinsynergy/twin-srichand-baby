import styled from "styled-components";

const ProductCardStyle = styled.div`
  .product-wrapper {
    &::before {
      display: none;
      position: absolute;
      width: 126px;
      height: 119px;
      content: "";
      background: transparent url("/assets/image/duo-star.webp") center center no-repeat;
      top: -50px;
      left: -30px;
    }
    &:hover {
      &::before {
        display: block;
      }
    }
  }
  .product_image {
    height: 450px;
    @media (max-width: 768px) {
      height: 350px;
    }
  }
`;

export default ProductCardStyle;
