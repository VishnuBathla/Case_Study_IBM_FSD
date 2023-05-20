import React, { useState } from 'react';
// import '../styles/CreateQuiz.css'
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
//Adding antd modules and style
import { Modal, Form, Input } from 'antd';
import 'antd/dist/reset.css';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

class CreatQuiz extends React.Component {

  render(){
   //popup and form code
    const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
        const [form] = Form.useForm();
        return (
          <Modal
            visible={visible}
            title="New Quiz"
            okText="Next"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
              form
                .validateFields()
                .then((values) => {
                  console.log(values)
                  form.resetFields();
                  onCreate(values);
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
            >
              <Form.Item
                name="Title"
                label="Title"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Title of course!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name="QuestionCount" label="Number Of Question"
              rules={[
                {
                  required: true,
                  message: 'Please enter the total count!',
                },
              ]}
              >
                <Input  type='Number' min={0}/>
              </Form.Item>
              <Form.Item name="Time" label="Time-Limit(in mins)"
              rules={[
                {
                  required: true,
                  message: 'Please enter time!',
                },
              ]}
              >
                <Input  type='Number' min={0}/>
              </Form.Item>
              
            </Form>
          </Modal>
        );
      };
      
      const CollectionsPage = () => {
        const [visible, setVisible] = useState(false);
      
        const onCreate = (values) => {
          console.log('Received values of form: ', values);
          setVisible(false);
        };
      
        return (
          <>
            <div onClick={() => {
                setVisible(true);
              }}><CheckBoxIcon />
              Quiz
              </div>
            <CollectionCreateForm
              visible={visible}
              onCreate={onCreate}
              onCancel={() => {
                setVisible(false);
              }}
            />
          </>
        );
      };
  return (
    <div className="MainDiv">
      <CollectionsPage />
      </div>
  );
}
}
export default CreatQuiz;