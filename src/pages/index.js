import * as React from "react"
import { useState } from 'react';
import { Link } from "gatsby"
import './custom.css';
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { 
  Anchor, 
  Row, 
  Col,
  Modal, 
  Button,
} from 'antd';

const IndexPage = () => {
  const [isModal1Visible, setIsModal1Visible] = useState(false);
  const [isModal2Visible, setIsModal2Visible] = useState(false);

  const show1Modal = () => {
    setIsModal1Visible(true);
  };
  const show2Modal = () => {
    setIsModal2Visible(true);
  };

  const handle1Ok = () => {
    setIsModal1Visible(false);
  };
  const handle2Ok = () => {
    setIsModal2Visible(false);
  };

  const handle1Cancel = () => {
    setIsModal1Visible(false);
  };
  const handle2Cancel = () => {
    setIsModal2Visible(false);
  };


  return (
    <Layout>
    <section>
      <div id="woofpaper">
        <Seo title="Home" />
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <div>
              <h1>WGMI</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum ut id placerat tortor sed. Tellus proin urna, ac justo, rhoncus enim, ultrices. Vulputate imperdiet tempus in dignissim id. Lectus bibendum scelerisque vitae urna dictumst sed at.
              </p>
              <button>How To Buy</button>
              <button>Read</button>
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div>
              <StaticImage
                src="../images/shibs.svg"
                width={600}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
    
    <section>
      <div id="contract">
        <div><h2>Contract</h2></div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={24}>
            <p>CA: 1xfe6567ee89ad114833c05dd22c9597baca8aa540</p>
          </Col>
        </Row>
      </div>
    </section>

    <section>
      <div id="the-stats">
        <div><h2>The Stats</h2></div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <p>1</p>
          </Col>
          <Col className="gutter-row" span={12}>
            <p>2</p>
          </Col>
          <Col className="gutter-row" span={8}>
            <p>3</p>
          </Col>
          <Col className="gutter-row" span={8}>
            <p>4</p>
          </Col>
          <Col className="gutter-row" span={8}>
            <p>5</p>
          </Col>
        </Row>
      </div>
    </section>

    <section>
      <div id="island-map">
        <div><h2>Island Map</h2></div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={24}>

          </Col>
        </Row>
      </div>
    </section>

    <section>
      <div id="how-to-buy">
        <div><h2>How To Buy</h2></div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <div>
            <StaticImage
                src="../images/shibs.svg"
                width={600}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
              />
                <Button type="primary" onClick={show1Modal}>
                  Open Modal
                </Button>
                <Modal title="Basic Modal 1" visible={isModal1Visible} onOk={handle1Ok} onCancel={handle1Cancel}>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div>
              <StaticImage
                src="../images/shibs.svg"
                width={600}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
              />
                <Button type="primary" onClick={show2Modal}>
                  Open Modal
                </Button>
                <Modal title="Basic Modal 2" visible={isModal2Visible} onOk={handle2Ok} onCancel={handle2Cancel}>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
            </div>
          </Col>
        </Row>
      </div>
    </section>

    <section>
      <div id="community">
        <div><h2>Community</h2></div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={24}>

          </Col>
        </Row>
      </div>
    </section>
    </Layout>
  )
  
  }

export default IndexPage
