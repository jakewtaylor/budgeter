import OutlineLocalCafe from 'react-md-icon/dist/OutlineLocalCafe';
import OutlineLocalHospital from 'react-md-icon/dist/OutlineLocalHospital';
import OutlineFastfood from 'react-md-icon/dist/OutlineFastfood';
import OutlineLocalGasStation from 'react-md-icon/dist/OutlineLocalGasStation';
import OutlineLocalParking from 'react-md-icon/dist/OutlineLocalParking';
import OutlineAttachMoney from 'react-md-icon/dist/OutlineAttachMoney';

export const transactionCategories = [
    {
        key: 'coffee',
        label: 'Coffee',
        Icon: OutlineLocalCafe,
        color: '#5b2915',
    },
    {
        key: 'medicine',
        label: 'Medicine',
        Icon: OutlineLocalHospital,
        color: '#2d8f00',
    },
    {
        key: 'food',
        label: 'Food',
        Icon: OutlineFastfood,
        color: '#008e9e',
    },
    {
        key: 'fuel',
        label: 'Fuel',
        Icon: OutlineLocalGasStation,
        color: '#811336',
    },
    {
        key: 'parking',
        label: 'Parking',
        Icon: OutlineLocalParking,
        color: '#004cff',
    },
    {
        key: 'income',
        label: 'Income',
        Icon: OutlineAttachMoney,
        color: '#ff5900',
    },
];
