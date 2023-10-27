import { } from '@/services/api';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, Drawer, Input, message, Card, Form, Spin, Row, Col, Select, Table, Modal, Descriptions } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
const FormItem = Form.Item;
import React, { useRef, useState } from 'react';
import styles from './index.less';

const Customer: React.FC = () => {
  const [form1] = Form.useForm();
  const [datalist, setdatalist] = useState([{}])
  const [loading, setloading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const columns: any = [
    {
      title: '手机号',
      dataIndex: 'eventtime',
      key: '',
    },
    {
      title: '是否会员',
      dataIndex: 'code',
      key: '',

    },
    {
      title: '到期时间',
      dataIndex: 'companyName',
      key: '',

    }, {
      title: '角色数量',
      dataIndex: 'commodityCode',
      key: '',

    },
    , {
      title: '是否转换',
      dataIndex: 'commodityCode',
      key: '',

    },
    , {
      title: '注册日期',
      dataIndex: 'commodityCode',
      key: '',

    },
    , {
      title: '注册渠道',
      dataIndex: 'commodityCode',
      key: '',

    },
    , {
      title: '操作',
      dataIndex: 'commodityCode',
      key: '',
      render: () => {
        return <a onClick={() => { setIsModalOpen(true) }}>详情</a>
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
        <Form className={styles.form} form={form1} onFinish={onFinish} >
          <Row>
            <Col span={8} >
              <FormItem labelCol={{ span: 6 }} name="phone" wrapperCol={{ span: 10 }} label="手机号">
                <Input
                  placeholder="请输入"
                />
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem labelCol={{ span: 6 }} wrapperCol={{ span: 10 }} initialValue={0} name='is' label="是否开通会员">
                <Select
                  placeholder=""
                >
                  {[{ id: 0, name: '全部' }, { id: 1, name: '已开通' }, { id: 2, name: '未开通' }].map((item: any) => {
                    return (<Select.Option value={item.id} key={item.id}>{item.name}</Select.Option>)
                  })}
                </Select>

              </FormItem>
            </Col>
            <Col span={8} style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
          footer={false}
          width={680}
          title="详情"
          open={isModalOpen}
          onOk={() => {

          }}
          onCancel={() => { setIsModalOpen(false) }}>
          <Descriptions style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Descriptions.Item span={1} label="用户手机号">181000000000</Descriptions.Item>
            <Descriptions.Item span={1} label="是否转换">1810000810000810000810000000</Descriptions.Item>
          </Descriptions>
          <Descriptions>
            <Descriptions.Item span={1} label="是否是会有">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item span={1} label="转换人">empty</Descriptions.Item>
          </Descriptions>
          <Descriptions>
            <Descriptions.Item span={1} label="到期时间">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item span={1} label="注册日期">empty</Descriptions.Item>
          </Descriptions>
          <Descriptions>
            <Descriptions.Item span={1} label="角色数量">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item span={1} label="注册渠道">empty</Descriptions.Item>
          </Descriptions>
          <div>角色列表</div>
          <Table
            pagination={false}
            dataSource={datalist}
            className={styles.table}
            columns={[{
              title: '名称',
              dataIndex: 'commodityCode',
              key: '',

            }, {
              title: '年级',
              dataIndex: 'commodityCode',
              key: '',

            }, {
              title: '生日',
              dataIndex: 'commodityCode',
              key: '',

            }, {
              title: '性别',
              dataIndex: 'commodityCode',
              key: '',

            }, {
              title: '积分',
              dataIndex: 'commodityCode',
              key: '',

            },]}
          >
          </Table>
        </Modal >
      </Card >
      </PageContainer>
  );
};

export default Customer;
