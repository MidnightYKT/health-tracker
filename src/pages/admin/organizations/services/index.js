import React, { useState, useRef } from 'react'
import { Button, Table, Input, Space, DatePicker, Select, Tag, Badge } from 'antd'
import moment from 'moment'
import 'moment/locale/ru'

// import { useGetCityOrderQuery, useGetStatsCourierBoolQuery } from '../../../service/CompanyService'

const { RangePicker } = DatePicker
const { Option } = Select

const Services = () => {
    const [open, setOpen] = useState()
    const [dataChange, setDataChange] = useState()
    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const searchInput = useRef()

    const columns = [
        {
            title: 'Название',
            dataIndex: 'id',
            key: 'id',
            width: 80,
            align: 'center',
            defaultSortOrder: 'ascend',
            render: (text, record) => (
                <span>{/* {record.first_name} {record.last_name} {record.middle_name} */}</span>
            ),
        },
        {
            title: 'Стоимость',
            dataIndex: 'organisation_name',
            key: 'organisation_name',
        },
        {
            title: 'Описание',
            dataIndex: 'organisation_name',
            key: 'organisation_name',
        },
        {
            title: 'Изображение',
            dataIndex: 'organisation_name',
            key: 'organisation_name',
        },
        {
            title: 'Дата начала',
            dataIndex: 'organisation_name',
            key: 'organisation_name',
        },
        {
            title: 'Дата окончания',
            dataIndex: 'organisation_name',
            key: 'organisation_name',
        },
        {
            title: 'Активность показа',
            dataIndex: 'organisation_name',
            key: 'organisation_name',
        },
        {
            title: 'Организация',
            dataIndex: 'organisation_name',
            key: 'organisation_name',
        },
    ]

    return (
        <div className="bg-white">
            <main className="px-4 pt-4 mt-6">
                <Table columns={columns} rowKey="id" />
            </main>
        </div>
    )
}

export default Services
