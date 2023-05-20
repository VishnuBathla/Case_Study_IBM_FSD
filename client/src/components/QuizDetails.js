import React from 'react';
import '../styles/CreateQuiz.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form, Input, Space, Radio } from 'antd';
import 'antd/dist/reset.css';

class QuizDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      visible: false,
    };
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({ value: e.target.value });
  };

  onCreate = (values) => {
    console.log('Received values of form: ', values);
    this.setState({ visible: false });
  };

  handleOptionClick = (e) => {
    e.preventDefault();
  };

  render() {
    const { value, visible } = this.state;

    const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
      const [form] = Form.useForm();
      const onFinish = (values) => {
        
        onCreate(values);
      };

      return (
        <Modal
          visible={visible}
          title="New Quiz"
          okText="Save"
          cancelText="Cancel"
          onCancel={onCancel}
          onOk={() => {
            form
              .validateFields()
              .then((values) => {
                form.submit();
              })
              .catch((info) => {
                console.log('Validate Failed:', info);
              });
          }}
        >
          <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
            initialValues={{
              modifier: 'public',
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="Questions"
              label="Question-Text"
              rules={[
                {
                  required: true,
                  message: 'Please Enter The Question!',
                },
              ]}
            >
              <Input type="textbox" />
            </Form.Item>

            <Form.Item
              name="Options"
              label="Options"
              rules={[
                {
                  required: true,
                  message: 'Please Select an Option!',
                },
              ]}
            >
              <Radio.Group value={value}>
                <Space direction="vertical">
                  <Radio value={1} onClick={this.handleOptionClick}>
                    <input type='text' className='Qoptions'/>
                  </Radio>
                  <Radio value={2} onClick={this.handleOptionClick}>
                  <input type='text'className='Qoptions'/>
                  </Radio>
                  <Radio value={3} onClick={this.handleOptionClick}>
                  <input type='text'className='Qoptions'/>
                  </Radio>
                  <Radio value={4} onClick={this.handleOptionClick}>
                  <input type='text'className='Qoptions'/>
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            
          </Form>
        </Modal>
      );
    };

    return (
      <div className="MainDiv">
        <div className="jumbotron text-center">
          <h3>Create quiz</h3>
        </div>

        <div className="container">
          <div className="CreateQuiz">
            <Button
            type="primary"
            onClick={() => {
            this.setState({ visible: true });
            }}
            >
            New Quiz
            </Button>
            <CollectionCreateForm
            visible={visible}
            onCreate={this.onCreate}
            onCancel={() => {
            this.setState({ visible: false });
            }}
            />
            </div>
            </div>
            </div>
            );
            }
            }
            
            export default QuizDetails;