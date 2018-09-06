import { MEDIA_LOADED, MEDIA_LOADING } from '../actions/types';

const initialState = {
    '/': {
        bg_img: {
            imgSrc: '/img/GRD_start.jpg',
            a: {
                imgSrc: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=light-landscape-nature-326055.jpg&fm=jpg',
            },
            b: {
                imgSrc: 'https://wallpaperbrowse.com/media/images/beautiful-sunset-images-196063.jpg',
            },
            c: {
                imgSrc: 'http://hdqwalls.com/wallpapers/convict-lake-autumn-4k-2k.jpg',
            },
            d: {
                imgSrc: 'https://images.pexels.com/photos/1146134/pexels-photo-1146134.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            },
            e: {
                imgSrc: 'https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            },
            f: {
                imgSrc: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            },
            g: {
                imgSrc: 'https://images.pexels.com/photos/312105/pexels-photo-312105.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            },

            svg: [
                {
                    link: '/animations/gardens',
                    points: '477,502,910,741,1107,632,654,426'
                },
                {
                    link: '/animations/about',
                    points: '917,744,1003,699,1091,744,1002,793'
                },
                {
                    link: '/animations/boulevard',
                    points: '964,578,1339,405,1422,441,1482,414,1587,451,1185,680'
                },
                {
                    link: '/animations/grandpark',
                    points: '623,415,964,575,1264,437,922,303'
                }
            ]
        }
    },
    isReady: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case MEDIA_LOADED:
            return {
                ...state,
                isReady: true
            }
        case MEDIA_LOADING:
            return {
                ...state,
                isReady: false
            }
        default:
            return state;
    }
}