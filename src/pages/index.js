import * as React from "react"
import { useState } from 'react';
import { Link } from "gatsby"
import './custom.css';
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { 
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
        <Row>
          <Col xs={24} sm={24} md={14} lg={12} xl={12}>
            <div id="wgmi">
              <StaticImage
                src="../images/wgmi.svg"
                width={350}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="WGMI"
                style={{ marginBottom: `1rem` }}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum ut id placerat tortor sed. Tellus proin urna, ac justo, rhoncus enim, ultrices. Vulputate imperdiet tempus in dignissim id. Lectus bibendum scelerisque vitae urna dictumst sed at.
              </p>
              <Row>
                <Col>
                  <a class="calltoaction"><button>How To Buy</button></a>
                </Col>
                <Col>
                  <a class="passiveaction"><button>Read</button></a>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={24} sm={24} md={10} lg={12} xl={12}>
            <div>
              <StaticImage
                src="../images/shibs.svg"
                width={600}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Island Shib Brothers"
                style={{ marginBottom: `1.45rem` }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
    
    <section id="info">
      <div id="contract">
        <div><h2>Contract</h2></div>
        <Row>
          <Col className="gutter-row" span={24}>
            <div id="contractbox">
              <h5><span id="contractgreen">CA:</span> 1xfe6567ee89ad114833c05dd22c9597baca8aa540</h5>
            </div>
          </Col>
        </Row>
      </div>

      <div id="the-stats">
        <div><h2>The Stats</h2></div>
        <Row>
          <Col 
            xs={24} 
            sm={24} 
            md={{span: 8, offset: 4}} 
            lg={{span: 8, offset: 4}} 
            xl={{span: 8, offset: 4}}
          >
            <div class="statcard">
              <div class="statimg">
                <StaticImage
                  src="../images/statone.svg"
                  height={120}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Value Shibs"
                  style={{ marginBottom: `1.45rem` }}
                />
              </div>
              <div class="statboard">
                <p class="statnumber">10,000.00</p>
                <p class="statname">VALUE</p>
              </div>
            </div>
          </Col>
          <Col 
            xs={24} 
            sm={24} 
            md={8} 
            lg={8} 
            xl={8}
          >
            <div class="statcard">
              <div class="statimg">
                <StaticImage
                  src="../images/stattwo.svg"
                  height={120}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Holder Shibs"
                  style={{ marginBottom: `1.45rem` }}
                />
              </div>
              <div class="statboard">
                <p class="statnumber">10,000.00</p>
                <p class="statname">HOLDERS</p>
              </div>
            </div>
          </Col>
          <Col 
            xs={24} 
            sm={24} 
            md={8} 
            lg={8} 
            xl={8}
          >
            <div class="statcard">
              <div class="statimg">
                <StaticImage
                  src="../images/statfou.svg"
                  height={120}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Burnt Shibs"
                  style={{ marginBottom: `1.45rem` }}
                />
              </div>
              <div class="statboard">
                <p class="statnumber">10,000.00</p>
                <p class="statname">BURNED</p>
              </div>
            </div>
          </Col>
          <Col 
            xs={24} 
            sm={24} 
            md={8} 
            lg={8} 
            xl={8}
          >
            <div class="statcard">
              <div class="statimg">
                <StaticImage
                  src="../images/statthr.svg"
                  height={120}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Circular Shibs"
                  style={{ marginBottom: `1.45rem` }}
                />
              </div>
              <div class="statboard">
                <p class="statnumber">10,000.00</p>
                <p class="statname">CIRCULATION</p>
              </div>
            </div>
          </Col>
          <Col 
            xs={24} 
            sm={24} 
            md={8} 
            lg={8} 
            xl={8}
          >
            <div class="statcard">
              <div class="statimg">
                <StaticImage
                  src="../images/statfiv.svg"
                  height={120}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Capped Shibs"
                  style={{ marginBottom: `1.45rem` }}
                />
              </div>
              <div class="statboard">
                <p class="statnumber">10,000.00</p>
                <p class="statname">MARKET CAP</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div id="features">

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
                alt="Island Shib Brothers"
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
                alt="Island Shib Brothers"
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
