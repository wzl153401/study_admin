import { } from '@/services/api';
import { Button, Drawer, Input, message, Card, Form, Spin, Row, Col, Select, Table, Modal, Descriptions } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
import { PageContainer } from '@ant-design/pro-components';
import React, { useRef, useState, useEffect, } from 'react';
import Vditor from 'vditor';
import "vditor/dist/index.css";
import styles from './index.less';

const Code: React.FC = (props: any) => {
  const [form1] = Form.useForm();
  const [datalist, setdatalist] = useState([{}])
  const [loading, setloading] = useState(false)
  // 查询
  const onFinish = (values: any) => {
    console.log(values, 'value')

  }
  const [value, setvalue] = useState('')
  const editorRef = useRef<HTMLDivElement>(null);
  const onChange = (val: any) => {
    setvalue(val)
  }
  useEffect(() => {
      const vditor = new Vditor(editorRef.current,
        {
          value,
          input: (value) => onChange(value),
          cache: { id: 'vditor' },
          height: '100%',
          counter: { enable: true }
        })
    }, [])
return (
  <PageContainer>
    <div className={styles.data}>
      <Card className={styles.left}>
        <Form className={styles.form} form={form1} onFinish={onFinish} >
          <Row>
            <Col span={18} >
              <FormItem labelCol={{ span: 6 }} name="phone" wrapperCol={{ span: 10 }} label="关键字">
                <Input
                  placeholder="请输入"
                />
              </FormItem>
            </Col>
            <Col span={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button style={{ marginRight: '15px' }} onClick={() => {
                form1.resetFields()
              }} >
                重置
              </Button>
              <Button type="primary" htmlType="submit" >
                查询
              </Button>
            </Col>
          </Row>
        </Form>
        <Spin spinning={loading} delay={300}>
          <Table
            dataSource={datalist}
            className={styles.table}
            columns={[
              {
                title: '手机号',
                dataIndex: 'eventtime',
                key: '',
              }]}
          >

          </Table>
        </Spin>
      </Card>
      <Card className={styles.right}>
        <Form className={styles.form} form={form1} onFinish={onFinish} >
          <Row>
            <Col span={5} >
              <FormItem labelCol={{ span: 6 }} name="phone" wrapperCol={{ span: 18 }} label="名称">
                <Input
                  placeholder="请输入"
                />
              </FormItem>
            </Col>
            <Col span={5} >
              <FormItem labelCol={{ span: 6 }} name="phone" wrapperCol={{ span: 18 }} label="提示语">
                <Input
                  placeholder="请输入"
                />
              </FormItem>
            </Col>
            <Col span={4} >
              <FormItem labelCol={{ span: 10 }} wrapperCol={{ span: 14 }} initialValue={0} name='is' label="章节类型">
                <Select
                  placeholder=""
                >
                  {[{ id: 0, name: '学习' }, { id: 1, name: '练习' }, { id: 2, name: '综合练习' }, { id: 3, name: '游戏' }].map((item: any) => {
                    return (<Select.Option value={item.id} key={item.id}>{item.name}</Select.Option>)
                  })}
                </Select>

              </FormItem>
            </Col>
            <Col span={8} >
              <FormItem labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} initialValue={0} name='is' label="内容类型">
                <Select
                  placeholder=""
                >
                  {[{ id: 0, name: '汉字' }, { id: 1, name: '单词' }, { id: 2, name: '拼音' }, { id: 3, name: '字母' }, { id: 4, name: '键盘符号&' }, { id: 5, name: '特殊字符 ctrl+shift 需要转义的' }].map((item: any) => {
                    return (<Select.Option value={item.id} key={item.id}>{item.name}</Select.Option>)
                  })}
                </Select>

              </FormItem>
            </Col>
            <Col span={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button style={{ marginRight: '15px' }} >
                编辑
              </Button>
              <Button type="primary" htmlType="submit" >
                保存
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ width: '80%' }}>
              <FormItem name='textarea' >
                <div className="markdown-editor" ref={editorRef}>

                </div>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Card >
    </div>
  </PageContainer>
);
};

export default Code;
