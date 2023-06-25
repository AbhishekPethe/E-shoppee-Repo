import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/about.jpg'

const AboutPage = () => {
  return <main>
    <PageHero title="about" />
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="furniture" />
      <article>
        <div className="title">
          <h2>Our Story</h2>
        </div>
        <p>Welcome to our E-commerce website! We're thrilled to have you here and would like to tell you a little bit about us.

At E-Shoppee, we are passionate about providing a seamless and enjoyable online shopping experience for our customers. Our platform offers a wide range of high-quality products from various categories, all conveniently accessible from the comfort of your own home.

Our mission is to make online shopping easy, convenient, and secure. We strive to bring you the latest trends, innovative products, and trusted brands, ensuring that you find exactly what you're looking for. Whether you're searching for fashion and apparel, electronics, home goods, beauty products, or anything in between, we've got you covered.

We prioritize customer satisfaction above everything else. Our dedicated team works tirelessly to ensure that every aspect of your shopping journey is smooth and enjoyable. From a user-friendly interface to secure payment gateways and prompt delivery, we go the extra mile to provide you with a seamless shopping experience.

We understand that trust and reliability are crucial when it comes to online shopping. That's why we partner with reputable suppliers and vendors to source our products, ensuring their authenticity and quality. Additionally, we implement strict security measures to safeguard your personal information and maintain your privacy.

Thank you for choosing E-Shoppee. We hope you enjoy your shopping experience with us, and we look forward to serving you with exceptional products and outstanding customer service. Happy shopping!</p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 700px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
