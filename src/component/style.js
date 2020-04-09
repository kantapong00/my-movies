import styled from 'styled-components'
import { Layout } from 'antd'

const { Footer } = Layout

export const Background = styled.div`
  display: flex;
  background-color: #E63C49;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const WelcomeText = styled.div`
  font-size: 60px;
  color: white;
  padding-bottom: 16px;
`
export const HyperText = styled.div`
  font-size: 24px;
  color: white;
  text-decoration: underline;
`
export const BodyContent = styled.div`
  background-color: white;
  display: flex; 
  min-height: 600px;
  border-radius: 5px;
  padding: 24px 24px;
  justify-content: center;
  align-items: center;
`
export const FooterStyle = styled(Footer)`
&.ant-layout-footer {
  margin-top: 24px;
  padding: 24px 50px;
  color: white;
  text-align: center;
  font-size: 14px;
  background: #001529;
}
`