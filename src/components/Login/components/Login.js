import React, { Component } from 'react';
import { Link } from 'react-router';
import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Received values of form:', this.props.form.getFieldsValue().username);
    // console.log('Received values of form:', this.props.form.getFieldsValue().password);
    this.props.login({
      username: this.props.form.getFieldsValue().username,
      password: this.props.form.getFieldsValue().password
    })
  }

  render(){
    console.log(this.props);
    const { login, auth, fetching } = this.props;
    const { getFieldDecorator } = this.props.form;

    return(
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormItem
          label="Account"
        >
          {getFieldDecorator('username')(
            <Input placeholder="Please input the account" size="large" id="username" />
          )}
        </FormItem>
        <FormItem
          label="Password"
        >
          {getFieldDecorator('password')(
            <Input type="password" placeholder="Please input the password" size="large" id="password" />
          )}
        </FormItem>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form>
    )
  }
}

let Login = Form.create()(LoginPage);
export default Login;
