import axios from 'axios'

export default function API( url, cb ){
    axios.get( url )
    .then( res => {
        cb( res );
    } )
    .catch( err => {
        console.log( err );
    } )
}