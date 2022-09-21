import React, { useState } from 'react'
import { Typography, Modal, Button, Form, Select, message, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import cookie from 'js-cookie'
import moment from 'moment'
import 'moment/locale/ru'

import ROUTES from '../../../../../routes'
import { useLoginMutation } from '../../../../../service/AuthService'

const { Text } = Typography

const LoginModal = ({ open, setOpen }) => {
    const navigate = useNavigate()
    const [postLogin] = useLoginMutation()

    const onFinish = (values) => {
        postLogin({
            username: values.username,
            password: values.password,
        }).then((res) => {
            if (res?.error) {
                message.error(res?.error?.data?.errors[0])
            } else {
                cookie.set('token', res.data.token)
                localStorage.setItem('role', JSON.stringify(res.data.role, null, '\t'))
                navigate(ROUTES.USERS)
            }
            console.log(res.data.token)
        })
    }

    return (
        <div>
            <Modal
                title="Смена курьера"
                width={700}
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                footer={[
                    <Button key="submit" htmlType="submit" form="change-courier-form">
                        Сохранить
                    </Button>,
                    <Button
                        key="back"
                        type="primary"
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded"
                        onClick={() => setOpen(false)}
                    >
                        Отмена
                    </Button>,
                ]}
            >
                <Form style={{ width: '100%' }} onFinish={onFinish}>
                    <Form.Item
                        label={<Text style={{ fontWeight: 600, fontSize: 16 }}>Email</Text>}
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Введите ваш Email',
                            },
                        ]}
                        labelCol={{ span: 24 }}
                    >
                        <Input
                            style={{
                                borderRadius: 4,
                            }}
                            placeholder="Логин"
                            size="large"
                        />
                    </Form.Item>
                    {/* <Form.Item
                            label={<Text style={{ fontWeight: 600, fontSize: 16 }}>Пароль</Text>}
                            name="password"
                            labelCol={{ span: 24 }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Введите ваш пароль',
                                },
                            ]}
                        >
                            <Input.Password
                                style={{
                                    borderRadius: 4,
                                }}
                                placeholder="Пароль"
                                size="large"
                            />
                        </Form.Item> */}
                    <Button
                        style={{
                            background: '#0D6EFD',
                            width: '100%',
                            borderRadius: 4,
                        }}
                        type="primary"
                        htmlType="submit"
                        size="large"
                        // onClick={info}
                    >
                        Войти
                    </Button>
                    <LoginModal open={open} setOpen={setOpen} />
                    {/* <Link
                            to={ROUTES.FORGOT_PASSWORD}
                            style={{
                                marginTop: 12,
                                float: 'right',
                                marginBottom: 24,
                            }}
                        >
                            Забыли пароль?
                        </Link> */}
                    {/* <Button
                            style={{
                                background: '#09304A',
                                width: '100%',
                                borderRadius: 4,
                                color: 'white',
                            }}
                            htmlType="submit"
                            size="large"
                            onClick={() => navigate(ROUTES.REGISTRATION)}
                        >
                            Зарегистрироваться
                        </Button> */}
                </Form>
            </Modal>
        </div>
    )
}

export default LoginModal
