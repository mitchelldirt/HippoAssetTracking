import {
    DataSheetGrid,
    Column,
    checkboxColumn,
    textColumn,
    keyColumn,
} from 'react-datasheet-grid'
import { useState } from 'react'

// Import the style only once in your app!
import 'react-datasheet-grid/dist/style.css'

type Row = {
    active: boolean
    firstName: string | null
    lastName: string | null
    nickname: string | null
    email: string | null
    phone: string | null
    address: string | null
}

const AssetsTable = () => {
    const [ data, setData ] = useState<Row[]>([
        { active: true, firstName: 'Elon', lastName: 'Musk', nickname: 'Elon', email: 'elonm@x.com', phone: '+19991234567', address: '100 Space Way' },
        { active: false, firstName: 'Jeff', lastName: 'Bezos', nickname: 'Jeffy', email: 'jeffb@amazon.com', phone: '+19991234569', address: '100 Delivery Way' },
    ])

    const columns: Column<Row>[] = [
        {
            ...keyColumn('active', checkboxColumn),
            title: 'Active',
        },
        {
            ...keyColumn('firstName', textColumn),
            title: 'First name',
        },
        {
            ...keyColumn('lastName', textColumn),
            title: 'Last name',
        },
        {
            ...keyColumn('nickname', textColumn),
            title: 'Nick name',
        },
        {
            ...keyColumn('email', textColumn),
            title: 'Email',
        },
        {
            ...keyColumn('phone', textColumn),
            title: 'Phone',
        },
        {
            ...keyColumn('address', textColumn),
            title: 'Address',
        }
    ]

    return (
        <div className={'w-full h-full flex flex-col items-center justify-center'}>
        <DataSheetGrid
            value={data}
            onChange={setData}
            columns={columns}
            className={'w-full h-full overflow-scroll'}
        />
        </div>
    )
}

export default AssetsTable;