import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button, Modal } from 'antd';
import { signIn } from '../actions/index';

const Center = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const StyledButton = styled(Button)`
	width: 250px;
	height: 40px;
	margin-bottom: 10px;
	font-size: 22px;
	font-weight: 300;
`;

const ModalWrap = styled.div`
	padding: 15px;
	text-align: center;
`;

const Row = styled.div`
	margin-bottom: 15px;
`;

const Title = styled.p`
	padding-bottom: 5px;
	text-align: left;
	font-size: 18px;
`;

const Input = styled.input`
	width: 100%;
	height: 40px;
	padding: 0 15px;
	font-size: 18px;
`;

const SignIn = styled.button`
	width: 200px;
	height: 40px;
	margin-top: 20px;
	border-radius: 5px;
	box-shadow: 0 0 20px #eee;
	text-transform: uppercase;
	font-size: 22px;
	font-weight: 300;
	color: #fff;
	background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);
	background-size: 200% auto;
	transition: .5s;
	cursor: pointer;
	&:hover {
		background-position: right center;
	}
	&:disabled {
		opacity: .6;
	}
	&:disabled:hover {
		background-position: inherit;
	}
`;

class EntryPage extends Component {
	constructor() {
		super();
		this.state = {
			visible: false,
			name: '',
			password: ''
		};
	}
	showModal = () => {
		this.setState({
			visible: true
		});
	}
	handleCancel = () => {
		this.setState({
			visible: false,
			name: '',
			password: ''
		});
		this.name.value = '';
		this.password.value = '';
	}
	entryUsername = e => {
		this.setState({
			name: e.target.value
		});
	}
	entryPassword = e => {
		this.setState({
			password: e.target.value
		});
	}
	signIn = () => {
		this.props.onSignIn();
	}
	render() {
		const disabled = this.state.name.length > 3 && this.state.password.length > 3 ? false : true;
		console.log(disabled);
		return (
			<div>
				<Center>
					<div>
						<StyledButton type="primary" onClick={this.showModal}>Sign In</StyledButton>
					</div>
					<div>
						<StyledButton type="primary">Sign Up</StyledButton>
					</div>
				</Center>
				<Modal
					visible={this.state.visible}
					onCancel={this.handleCancel}
				>
					<ModalWrap>
						<Row>
							<Title>Username:</Title>
							<Input
								type="text"
								onChange={this.entryUsername}
								innerRef={name => this.name = name}
							/>
						</Row>
						<Row>
							<Title>Password:</Title>
							<Input
								type="password"
								onChange={this.entryPassword}
								innerRef={password => this.password = password}
							/>
						</Row>
						<SignIn type="primary" disabled={disabled} onClick={this.signIn}>Sign In</SignIn>
					</ModalWrap>
				</Modal>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSignIn: () => dispatch(signIn())
	};
};

export default connect(null, mapDispatchToProps)(EntryPage);
