import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            노드버드
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            프로필
          </Link>
        </Menu.Item>
        <Menu.Item>
            <Input.Search enterButton style={{verticalAlign: 'middle'}} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            회원가입
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          왼쪽 메뉴
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://velog.io/" target="_blank" rel="noreferrer noopener">Velog</a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
