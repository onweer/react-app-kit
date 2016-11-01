import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
const FormItem = Form.Item;

class LoginPage extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Received values of form:', this.props.form.getFieldsValue().username);
    console.log('Received values of form:', this.props.form.getFieldsValue().password);
    this.props.actions.login({
      username: this.props.form.getFieldsValue().username,
      password: this.props.form.getFieldsValue().password
    })
  }

  componentDidUpdate() {
    const error = this.props.login.error
    if(this.props.login.error) message.error(error.message)
    this.props.login.error = null;
  }

  render() {
    const { fetching, auth, error } = this.props.login;
    const { login } = this.props.actions;
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

const Login = Form.create()(LoginPage);
export default Login;
