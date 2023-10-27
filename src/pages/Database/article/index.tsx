import { } from '@/services/api';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, Drawer, Input, message, Card, Form, Spin, Row, Col, Select, Table, Modal, Popconfirm } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
import { PageContainer } from '@ant-design/pro-components';
import React, { useRef, useState } from 'react';
import styles from './index.less';

const Article: React.FC = () => {
  const [form1] = Form.useForm();
  const [datalist, setdatalist] = useState([{}])
  const [loading, setloading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, settitle] = useState('新增套餐')
  const columns: any = [
    {
      title: '名称',
      dataIndex: 'eventtime',
      key: '',
    },
    {
      title: '原价',
      dataIndex: 'code',
      key: '',

    },
    {
      title: '优惠后价格',
      dataIndex: 'companyName',
      key: '',

    }, {
      title: '天数',
      dataIndex: 'commodityCode',
      key: '',

    },
    , {
      title: '类型',
      dataIndex: 'commodityCode',
      key: '',

    },
    , {
      title: '套餐说明',
      dataIndex: 'commodityCode',
      key: '',

    }
    , {
      title: '操作',
      dataIndex: 'commodityCode',
      key: '',
      align: 'center',
      render: () => {
        return <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <a onClick={() => {
            settitle('编辑套餐')
            setIsModalOpen(true)
          }}>编辑</a>
          <Popconfirm
            title="停用提示"
            description="是否确定停用?"
            onConfirm={() => { message.success('hahah') }}
            onCancel={() => { console.log('1') }}
            okText="Yes"
            cancelText="No"
          >
            <a onClick={() => { console.log(2) }}>停用</a>
          </Popconfirm>
        </div>
      }
    },

  ];
  // 查询
  const onFinish = (values: any) => {
    console.log(values, 'value')

  }
  return (
    <PageContainer>
      <Card className={styles.warp}>
        <Button type="primary" onClick={() => { setIsModalOpen(true) }}>
          新增套餐
        </Button>
      </Card>
      <Card className={styles.warp}>
        <Spin spinning={loading} delay={300}>
          <Table
            pagination={false}
            dataSource={datalist}
            className={styles.table}
            columns={columns}
          >

          </Table>
        </Spin>
        <Modal
          width={460}
          title={title}
          open={isModalOpen}
          okButtonProps={{
            form: 'form',
            htmlType: 'submit',
          }}
          onCancel={() => { setIsModalOpen(false) }}>
          <Form className={styles.form} name='form' form={form1} onFinish={onFinish} >
            <Row>
              <Col span={24} >
                <FormItem labelCol={{ span: 4 }} name="1" wrapperCol={{ span: 16 }} label="名称">
                  <Input
                    placeholder="请输入"
                  />
                </FormItem>
              </Col>
              <Col span={24} >
                <FormItem labelCol={{ span: 4 }} name="2" wrapperCol={{ span: 16 }} label="原价">
                  <Input
                    placeholder="请输入"
                  />
                </FormItem>
              </Col>
              <Col span={24} >
                <FormItem labelCol={{ span: 4 }} name="3" wrapperCol={{ span: 16 }} label="优惠价">
                  <Input
                    placeholder="请输入"
                  />
                </FormItem>
              </Col>
              <Col span={24} >
                <FormItem labelCol={{ span: 4 }} name="4" wrapperCol={{ span: 16 }} label="天数">
                  <Input
                    placeholder="请输入"
                  />
                </FormItem>
              </Col>
              <Col span={24}>
                <FormItem labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} initialValue={0} name='5' label="类型">
                  <Select
                    placeholder=""
                  >
                    {[{ id: 1, name: '付费' }, { id: 2, name: '试用' },].map((item: any) => {
                      return (<Select.Option value={item.id} key={item.id}>{item.name}</Select.Option>)
                    })}
                  </Select>

                </FormItem>
              </Col>
              <Col span={24} >
                <FormItem labelCol={{ span: 4 }} name="6" wrapperCol={{ span: 16 }} label="套餐说明">
                  <TextArea
                    placeholder="请输入"
                  />
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Modal >
      </Card >
    </PageContainer>
  );
};

export default Article;
