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
                  <a href="#howtobuy" class="calltoaction"><button>How To Buy</button></a>
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
          <Col span={24}>
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
        <Row>
          <Col
            xs={24} 
            sm={24} 
            md={16} 
            lg={16} 
            xl={16}  
          >
            <div class="featurehead">
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <div class="iscash">
                <StaticImage
                    src="../images/iscash.png"
                    width={80}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Capped Shibs"
                    style={{ marginBottom: `1.45rem` }}
                  />
              </div>
              <div class="featurepoint">
                <h4>Reflection</h4>
                <p>5% is reflected to all holders for passive income</p>
              </div>
            </div>
            <div>
              <div class="iscash">
                <StaticImage
                    src="../images/iscash.png"
                    width={80}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Capped Shibs"
                    style={{ marginBottom: `1.45rem` }}
                  />
              </div>
              <div class="featurepoint">
                <h4>LP Acquisition</h4>
                <p>5% is added to a liquidity pool</p>
              </div>
            </div>
            <div>
              <div class="iscash">
                <StaticImage
                    src="../images/iscash.png"
                    width={80}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Capped Shibs"
                    style={{ marginBottom: `1.45rem` }}
                  />
              </div>
              <div class="featurepoint">
                <h4>Burn</h4>
                <p>A burn wallet receives a portion of the reflections to never be seen again.</p>
              </div>
            </div>
          </Col>
          <Col
            xs={{span: 16, offset: 4}}
            sm={{span: 16, offset: 4}}
            md={{span: 8, offset: 0}} 
            lg={{span: 8, offset: 0}} 
            xl={{span: 8, offset: 0}}  
          >
            <StaticImage
              src="../images/featurebadge.png"
              width={600}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Capped Shibs"
              style={{ marginBottom: `1.45rem` }}
            />
          </Col>
        </Row>
      </div>
    </section>

    <section>
      <div id="island-map">
        <div><h2>Island Map</h2></div>
        <Row>
          <Col span={24}>
            <StaticImage
                src="../images/comingsoon.svg"
                width={1200}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Capped Shibs"
                style={{ marginBottom: `1.45rem` }}
              />
          </Col>
        </Row>
      </div>
    </section>

    <section>
      <div id="how-to-buy">
        <div><h2>How To Buy</h2></div>
        <Row>
          <Col
            xs={{span: 10, offset: 2}}
            sm={{span: 10, offset: 2}}
            md={{span: 10, offset: 2}}
            lg={{span: 10, offset: 2}}
            xl={{span: 10, offset: 2}}
          >
            <div class="htbpanel">
                <a type="primary" onClick={show1Modal}>
                  <StaticImage
                  src="../images/htbmm.png"
                  width={600}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="How to Buy with Metamask"
                  style={{ marginBottom: `1.45rem` }}
                />
                </a>
                <Modal title="Basic Modal 1" visible={isModal1Visible} onOk={handle1Ok} onCancel={handle1Cancel}>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
            </div>
          </Col>
          <Col span={10}>
            <div class="htbpanel">
                <a type="primary" onClick={show2Modal}>
                  <StaticImage
                    src="../images/htbtw.png"
                    width={600}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="How to Buy with Trust Wallet"
                    style={{ marginBottom: `1.45rem` }}
                  />
                </a>
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
      <div id="precommunity">
        <Row>
          <Col span={24}>

          </Col>
        </Row>
      </div>
    </section>
    <section>
      <div id="community">
        <div>
          <h2>Community</h2>
          <p class="subheader">Join our social platforms to get updates using the links below.</p>
        </div>

        <Row>
          <Col 
            xs={{ span: 10, offset: 7 }}
            sm={{ span: 10, offset: 7 }}
            md={{ span: 10, offset: 7 }}
            lg={{ span: 10, offset: 7 }}
            xl={{ span: 10, offset: 7 }}
          >
          <StaticImage
            src="../images/commlinks.png"
            width={800}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="How to Buy with Trust Wallet"
            style={{ marginBottom: `1.45rem` }}
          />
          </Col>
        </Row>
      </div>
    </section>
    </Layout>
  )
  
  }

export default IndexPage
