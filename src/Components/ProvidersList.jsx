import React from 'react';
import ProviderCard from './ProviderCard';

export default class ProvidersList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.createList()
        )
    }

    createList = () => {
        let providers = this.props.providers
        let list = [];

        for (let i = 0; i < providers.length; i += 2) {
            list.push(
                <div className="row">
                    <div className="col-3" />
                    <div className="col-3">
                        <ProviderCard provider={providers[i]} />
                    </div>
                    <div className="col-3">
                        <ProviderCard provider={providers[i+1]} />
                    </div>
                    <div className="col-3" />
                </div>
            )
        }

        return list;
    }
}

// mocked object to be gotten from API call
// const providers = [
//     {
//         "rating": 4,
//         "review_count": 22,
//         "name": "Michael C Trahos, DO",
//         "transactions": [],
//         "url": "https://www.yelp.com/biz/michael-c-trahos-do-alexandria?adjust_creative=vR93UmeLI0ui5-2WEIHR5g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=vR93UmeLI0ui5-2WEIHR5g",
//         "distance": 3740.841604824435,
//         "coordinates": {
//             "latitude": 38.8284454345703,
//             "longitude": -77.0854034423828
//         },
//         "alias": "michael-c-trahos-do-alexandria",
//         "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/FdOJiLGop6wK4qRrKa7sTA/o.jpg",
//         "categories": [
//             {
//                 "alias": "familydr",
//                 "title": "Family Practice"
//             },
//             {
//                 "alias": "osteopathicphysicians",
//                 "title": "Osteopathic Physicians"
//             },
//             {
//                 "alias": "gerontologist",
//                 "title": "Gerontologists"
//             }
//         ],
//         "display_phone": "(703) 998-4913",
//         "phone": "+17039984913",
//         "id": "kOpxxRsCE-DanmFKNc4HRw",
//         "is_closed": false,
//         "location": {
//             "city": "Alexandria",
//             "display_address": [
//                 "1707 Osage St",
//                 "Ste 203",
//                 "Alexandria, VA 22302"
//             ],
//             "country": "US",
//             "address2": "Ste 203",
//             "address3": "",
//             "state": "VA",
//             "address1": "1707 Osage St",
//             "zip_code": "22302"
//         }
//     },
//     {
//         "rating": 4,
//         "review_count": 22,
//         "name": "Michael C Trahos, DO",
//         "transactions": [],
//         "url": "https://www.yelp.com/biz/michael-c-trahos-do-alexandria?adjust_creative=vR93UmeLI0ui5-2WEIHR5g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=vR93UmeLI0ui5-2WEIHR5g",
//         "distance": 3740.841604824435,
//         "coordinates": {
//             "latitude": 38.8284454345703,
//             "longitude": -77.0854034423828
//         },
//         "alias": "michael-c-trahos-do-alexandria",
//         "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/FdOJiLGop6wK4qRrKa7sTA/o.jpg",
//         "categories": [
//             {
//                 "alias": "familydr",
//                 "title": "Family Practice"
//             },
//             {
//                 "alias": "osteopathicphysicians",
//                 "title": "Osteopathic Physicians"
//             },
//             {
//                 "alias": "gerontologist",
//                 "title": "Gerontologists"
//             }
//         ],
//         "display_phone": "(703) 998-4913",
//         "phone": "+17039984913",
//         "id": "kOpxxRsCE-DanmFKNc4HRw",
//         "is_closed": false,
//         "location": {
//             "city": "Alexandria",
//             "display_address": [
//                 "1707 Osage St",
//                 "Ste 203",
//                 "Alexandria, VA 22302"
//             ],
//             "country": "US",
//             "address2": "Ste 203",
//             "address3": "",
//             "state": "VA",
//             "address1": "1707 Osage St",
//             "zip_code": "22302"
//         }
//     },
//     {
//         "rating": 4,
//         "review_count": 22,
//         "name": "Michael C Trahos, DO",
//         "transactions": [],
//         "url": "https://www.yelp.com/biz/michael-c-trahos-do-alexandria?adjust_creative=vR93UmeLI0ui5-2WEIHR5g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=vR93UmeLI0ui5-2WEIHR5g",
//         "distance": 3740.841604824435,
//         "coordinates": {
//             "latitude": 38.8284454345703,
//             "longitude": -77.0854034423828
//         },
//         "alias": "michael-c-trahos-do-alexandria",
//         "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/FdOJiLGop6wK4qRrKa7sTA/o.jpg",
//         "categories": [
//             {
//                 "alias": "familydr",
//                 "title": "Family Practice"
//             },
//             {
//                 "alias": "osteopathicphysicians",
//                 "title": "Osteopathic Physicians"
//             },
//             {
//                 "alias": "gerontologist",
//                 "title": "Gerontologists"
//             }
//         ],
//         "display_phone": "(703) 998-4913",
//         "phone": "+17039984913",
//         "id": "kOpxxRsCE-DanmFKNc4HRw",
//         "is_closed": false,
//         "location": {
//             "city": "Alexandria",
//             "display_address": [
//                 "1707 Osage St",
//                 "Ste 203",
//                 "Alexandria, VA 22302"
//             ],
//             "country": "US",
//             "address2": "Ste 203",
//             "address3": "",
//             "state": "VA",
//             "address1": "1707 Osage St",
//             "zip_code": "22302"
//         }
//     },
// ]