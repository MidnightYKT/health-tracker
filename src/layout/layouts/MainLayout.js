import React from 'react'
import { Layout, Typography } from 'antd'
import { Outlet } from 'react-router-dom'

import { pathname } from '../pathname'

const { Content } = Layout
const { Text } = Typography

const MainLayout = ({ params }) => {
    const path = pathname(params)
    return (
        <Layout>
            <Content className="m-6">
                <div className="bg-white w-full pt-4 px-6">
                    {path !== '' ? (
                        <div className="mb-4">
                            <Text className="text-2xl">{path}</Text>
                            <div className="bg-black h-0.5 -mx-6 mt-4"></div>
                        </div>
                    ) : (
                        <></>
                    )}
                    <Outlet />
                </div>
            </Content>
        </Layout>
    )
}

export default MainLayout
