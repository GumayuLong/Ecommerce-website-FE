/** @format */

import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./login.scss";

const onFinish = (values) => {
	console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
	console.log("Failed:", errorInfo);
};

export default function Login() {
	const [state, setState] = useState({
		username: "",
		password: "",
	});

	const handleChange = (event) => {
		setState({
			...state,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		await console.log(state.username + state.password);
	};

	return (
		<div style={{ height: "100vh" }} className="bg-login">
			<Form
				onSubmit={handleSubmit}
				name="basic"
				labelCol={{
					span: 6,
				}}
				wrapperCol={{
					span: 16,
				}}
				style={{
					maxWidth: 600,
					margin: "100px auto",
				}}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<h1 style={{ textAlign: "center" }}>LOGIN</h1>
				<Form.Item
					// label="Username"
					name="username"
					rules={[
						{
							required: true,
							message: "Please input your username!",
						},
					]}
				>
					<Input
						onChange={handleChange}
						placeholder="User name"
						style={{
							borderRadius: "10px",
							padding: "10px",
						}}
					/>
				</Form.Item>

				<Form.Item
					// label="Password"
					name="password"
					rules={[
						{
							required: true,
							message: "Please input your password!",
						},
					]}
				>
					<Input.Password
						onChange={handleChange}
						placeholder="Password"
						style={{ borderRadius: "10px", padding: "10px" }}
					/>
				</Form.Item>

				<Form.Item
					name="remember"
					valuePropName="checked"
					wrapperCol={{
						offset: 4,
						span: 16,
					}}
				>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item
					wrapperCol={{
						offset: 4,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit">
						Login
					</Button>
				</Form.Item>

				{/* <div style={{ display: "flex" }}>Or login with</div> */}
			</Form>
		</div>
	);
}
