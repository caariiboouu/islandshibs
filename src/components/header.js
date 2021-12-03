import * as React from "react"
import { useState, useEffect } from 'react';
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

import 'antd/dist/antd.css';
import './layout.css';
import { 
  Affix, 
  Menu, 
  Anchor, 
  Row, 
  Col, 
} from 'antd';

const { Link } = Anchor;

const Header = ({ siteTitle }) => {
  const [targetOffset, setTargetOffset] = useState(undefined);
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);

  return (
    <Affix>
    <header
      style={{
        background: `black`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={4}>
            <div>
`            <StaticImage
              src="../images/islandshibslogo.png"
              width={300}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Island Shibs Logo"
              style={{ marginBottom: `1.45rem` }}
            />
            </div>
          </Col>
          <Col className="gutter-row" span={16}>
            <div>
              <Menu mode="horizontal">
                <Anchor targetOffset={targetOffset}>
                  <Link href="#woofpaper" title="Woofpaper" />
                  <Link href="#how-to-buy" title="How To Buy" />
                  <Link href="#community" title="Community" />
                </Anchor>
              </Menu>
            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div>
              IDO &#11106;
            </div>
          </Col>
        </Row>

      </div>
    </header>
  </Affix>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
