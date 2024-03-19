/** @format */

import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
	Button,
	Cascader,
	Checkbox,
	ColorPicker,
	DatePicker,
	Form,
	Input,
	InputNumber,
	Radio,
	Select,
	Slider,
	Switch,
	TreeSelect,
	Upload,
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

export default function Signup() {
	const [componentDisabled, setComponentDisabled] = useState(true);
	return (
		<>
			{/* <Checkbox
					checked={componentDisabled}
					onChange={(e) => setComponentDisabled(e.target.checked)}
				>
					Form disabled
				</Checkbox> */}
			<Form
				labelCol={{
					span: 4,
				}}
				wrapperCol={{
					span: 14,
				}}
				layout="horizontal"
				// disabled={componentDisabled}
				style={{
					maxWidth: 600,
				}}
			>
				{/* <Form.Item
					label="Checkbox"
					name="disabled"
					valuePropName="checked"
				>
					<Checkbox>Checkbox</Checkbox>
				</Form.Item> */}
				{/* <Form.Item label="Radio">
					<Radio.Group>
						<Radio value="apple"> Apple </Radio>
						<Radio value="pear"> Pear </Radio>
					</Radio.Group>
				</Form.Item> */}
				<Form.Item label="User Name">
					<Input />
				</Form.Item>
				<Form.Item label="Password">
					<Input />
				</Form.Item>
				<Form.Item label="Confirm password">
					<Input />
				</Form.Item>
				<Form.Item label="Email">
					<Input />
				</Form.Item>
				<Form.Item label="Gender">
					<Select>
						<Select.Option value="True">Male</Select.Option>
						<Select.Option value="False">Female</Select.Option>
					</Select>
				</Form.Item>
				{/* <Form.Item label="TreeSelect">
					<TreeSelect
						treeData={[
							{
								title: "Light",
								value: "light",
								children: [
									{
										title: "Bamboo",
										value: "bamboo",
									},
								],
							},
						]}
					/>
				</Form.Item> */}
				{/* <Form.Item label="Cascader">
					<Cascader
						options={[
							{
								value: "zhejiang",
								label: "Zhejiang",
								children: [
									{
										value: "hangzhou",
										label: "Hangzhou",
									},
								],
							},
						]}
					/>
				</Form.Item> */}
				<Form.Item label="Birthday">
					<DatePicker />
				</Form.Item>
				{/* <Form.Item label="RangePicker">
					<RangePicker />
				</Form.Item> */}
				<Form.Item label="Phone Number">
					<InputNumber />
				</Form.Item>
				<Form.Item label="TextArea">
					<TextArea rows={4} />
				</Form.Item>
				{/* <Form.Item label="Switch" valuePropName="checked">
					<Switch />
				</Form.Item> */}
				<Form.Item
					label="Avatar"
					valuePropName="fileList"
					// getValueFromEvent={normFile}
				>
					<Upload action="/upload.do" listType="picture-card">
						<button
							style={{
								border: 0,
								background: "none",
							}}
							type="button"
						>
							<PlusOutlined />
							<div
								style={{
									marginTop: 8,
								}}
							>
								Upload
							</div>
						</button>
					</Upload>
				</Form.Item>
				<Form.Item label="Button">
					<Button>Signup</Button>
				</Form.Item>
				{/* <Form.Item label="Slider">
					<Slider />
				</Form.Item>
				<Form.Item label="ColorPicker">
					<ColorPicker />
				</Form.Item> */}
			</Form>
		</>
	);
}
