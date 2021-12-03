import * as React from "react"
import { Link } from "gatsby"
import './custom.css';
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { 
  Anchor, 
  Row, 
  Col, 
} from 'antd';

const IndexPage = () => (
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
                src="../images/gatsby-astronaut.png"
                width={300}
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

          </Col>
        </Row>
      </div>
    </section>

    <section>
      <div id="the-stats">
        <div><h2>The Stats</h2></div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={24}>

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
          <Col className="gutter-row" span={24}>

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

export default IndexPage
