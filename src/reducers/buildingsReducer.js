import { GET_BUILDINGS_DATA, GET_BUILDING_DATA } from '../actions/types';

const initialState = {
    img: '/img/animations/buildings.jpg',
    lot1: {
        svg: '1590,682,1605,731,1765,731,1819,651,1767,488,1704,492,1670,556,1678,615,1621,622',
        images: [
            {
                src: '/img/animations/buildings/1/1.png',
                step: true,
                active: true,
                svg: [
                    '466,344,1066,445,1244,413,1241,476,1063,515,468,405',
                    '466,413,1066,514,1244,482,1243,530,1063,571,466,459',
                    '468,457,1070,574,1243,536,1243,593,1066,636,468,506',
                    '471,505,1071,634,1241,592,1239,648,1070,694,473,554',
                    '473,554,1070,692,1239,649,1236,704,1070,749,473,604',
                    '476,604,1070,750,1239,705,1236,760,1068,808,476,655',
                    '476,652,1066,806,1239,758,1236,813,1068,861,476,703'
                ]
            },
            {
                src: '/img/animations/buildings/1/2.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/3.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/4.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/5.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/6.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/7.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/8.png',
                step: true,
                active: false,
                svg: [
                    '382,366,526,392,1000,333,1360,376,1490,357,1490,399,1362,425,1000,376,526,438,386,415',
                    '367,418,526,448,1010,382,1356,426,1490,405,1490,459,1356,481,1012,432,528,500,369,467',
                    '367,464,526,494,1008,422,1356,472,1490,451,1490,505,1356,527,1008,475,528,546,369,513',
                    '371,524,530,554,1008,476,1360,532,1494,511,1492,558,1354,581,1008,525,532,606,373,573',
                    '371,568,530,598,1008,520,1360,576,1494,555,1492,602,1360,626,1008,569,532,650,373,617',
                    '378,620,528,657,1008,566,1360,632,1484,609,1484,659,1360,680,1008,616,528,708,380,673',
                    '376,666,526,703,1006,612,1358,678,1482,655,1482,705,1358,726,1006,662,526,754,378,719'
                ]
            },
            {
                src: '/img/animations/buildings/1/9.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/10.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/11.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/12.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/13.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/14.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/15.png',
                step: true,
                active: false,
                svg: [
                    '816,417,1004,448,1474,366,1474,411,1006,502,818,467',
                    '818,477,1006,508,1476,426,1476,471,1008,562,820,527',
                    '818,529,1006,560,1476,478,1476,523,1008,614,820,579',
                    '816,589,1006,625,1465,528,1467,577,1008,682,818,639',
                    '818,643,1008,679,1467,575,1467,627,1008,742,820,693',
                    '818,697,1008,733,1467,629,1467,675,1008,796,820,747',
                    '818,749,1004,796,1469,676,1467,727,1008,848,820,799'
                ]
            },
            {
                src: '/img/animations/buildings/1/16.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/17.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/18.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/19.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/20.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/21.png',
                step: true,
                active: false,
                svg: [
                    '413,351,871,423,1433,338,1431,403,870,506,415,413',
                    '412,419,868,502,1436,409,1438,462,870,562,415,470',
                    '414,469,870,557,1438,459,1440,512,870,615,417,520',
                    '415,519,868,617,1445,510,1443,558,870,671,417,568',
                    '417,565,871,675,1446,558,1445,609,873,735,418,616',
                    '417,617,870,734,1443,605,1441,652,873,790,418,668',
                    '412,664,866,788,1443,654,1443,703,870,842,415,713'
                ]
            },
            {
                src: '/img/animations/buildings/1/22.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/23.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/24.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/25.png',
                step: false,
                active: false
            },
            {
                src: '/img/animations/buildings/1/26.png',
                step: false,
                active: false
            },

        ]
    },
    currentBuilding: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BUILDINGS_DATA:
            return { ...state };
        case GET_BUILDING_DATA:
            const lot = action.payload.lot;
            for (let building in state) {
                if (building === lot) {
                    return state[building];
                }
            }
            return null;
        default:
            return state;
    }
}