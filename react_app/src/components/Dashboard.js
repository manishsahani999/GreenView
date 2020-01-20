import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { geolocated } from "react-geolocated";
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
} from 'react-google-maps';


import Demo from './Location'
import { userActions, plantImageActions } from '../actions';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loadingBarProgress: 0
        }
        this.fileInput = React.createRef();
    }

    componentWillMount() {
        this.props.me();
        this.props.getAllPlantImages();
    }

    componentDidMount() {
        if (this.props.message.val) console.log('clear')
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = (e) => {
        e.preventDefault();

        let data = new FormData();
        data.append('image', this.fileInput.current.files[0]);
        data.append('lat', this.props.coords.latitude);
        data.append('lng', this.props.coords.longitude);


        this.props.uploadPlantImage(data)
        // this.props.getAllPlantImages();
    }

    render() {

        if (!this.props.isGeolocationAvailable || !this.props.isGeolocationEnabled) return <GeolocationNotEnabled {...this.props} />

        let coords = { latitude: 28.629401599999998, longitude: 77.160448 }
        let { user, markers } = this.props
        if (this.props.coords) coords = this.props.coords

        return (
            <div>

                {this.props.message.val && (
                    this.props.message.title
                )}

                <div className="columns">
                    <div className="column is-one-quarter p-1">
                        <h1 className="title is-size-1">
                            <Link className="has-text-primary" to='/'>Farmer</Link>
                        </h1>
                        <h1 className="subtitle" style={{ textTransform: 'capitalize' }}>{user.name}</h1>

                        <div>
                            <button onClick={() => this.props.logout()} className="button is-link" >Logout</button>
                        </div>

                        <br />

                        <Demo />
                        <form onSubmit={this.handleSubmit}>
                            <div className="field">
                                <div className="file has-name is-boxed is-fullwidth" style={{ marginTop: '4rem' }}>
                                    <label className="file-label">
                                        <input ref={this.fileInput} className="file-input" type="file" name="plantimg" />
                                        <span className="file-cta">
                                            <span className="file-icon">
                                                <i className="fas fa-upload"></i>
                                            </span>
                                            <span className="file-label">
                                                Upload a Picture
                                    </span>
                                        </span>
                                        <span className="file-name">
                                            {/* {this.fileInput.current.files[0] && (this.fileInput.current.files[0].name)} */}
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="field">
                                <button onClick={this.showLoader} className="button is-primary is-fullwidth">Submit</button>
                            </div>
                        </form>

                    </div>
                    <div className="column">
                        <div className="" style={{ width: '100%', height: '100vh' }}>
                            <MapContainer
                                googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCFmHR_8osaHWKMr7_8NAySPUQSWLutFeE'
                                loadingElement={<div style={{ height: '100%' }} />}
                                containerElement={<div style={{ height: '100%' }} />}
                                mapElement={<div style={{ height: '100%' }} />}
                                coords={coords}
                                markers={markers}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const GeolocationNotEnabled = (props) => (
    <section className="hero is-fullheight">
        <div className="hero-body">
            <div className="container">
                <img style={{ width: '8em', marginBottom: '1rem' }} src="https://image.flaticon.com/icons/svg/356/356761.svg" alt="" />
                <h1 className="title is-size-2">
                    Geolocation is Not Enabled
                </h1>
                <h2 className="subtitle">
                    <Link to='/'>Go back to Home</Link>
                </h2>
                {props.auth.loggedIn && <div>
                    <button onClick={() => props.logout()} className="button is-link" >Logout</button>
                </div>}
            </div>
        </div>
    </section>
)


const mapStateToProps = (state) => ({
    auth: state.authentication,
    user: state.user,
    markers: state.plantImages.data,
    message: state.plantImages.message
});

const mapDispatchToProps = {
    logout: userActions.logout,
    me: userActions.getUser,
    uploadPlantImage: plantImageActions.uploadPlantImage,
    getAllPlantImages: plantImageActions.getAllPlantImages,
};

const connected = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

const withGeoLocation = geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
})(connected)

const MarkerList = ({ markers }) => {


    if (markers) return markers.map(item => <Marker
        label={item.disease_name}
        key={item.id + Math.floor((Math.random() * 100000) + 1)}
        position={{ lat: parseFloat(item.lat), lng: parseFloat(item.lng) }
        } />)
    else return <div />
}

const MapContainer = withScriptjs(withGoogleMap((props) => <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: props.coords.latitude, lng: props.coords.longitude }}
    defaultOptions={
        {
            styles: [
                { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
                {
                    featureType: 'all',
                    elementType: 'labels.text',
                    stylers: [{ "visibility": "off" }]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.icon',
                    stylers: [{ "visibility": "off" }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{ color: '#263c3f' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{ color: '#38414e' }]
                },
                {
                    featureType: 'transit',
                    stylers: [{ "visibility": "off" }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#17263c' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#515c6d' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{ color: '#17263c' }]
                }
            ]
        }
    }
>
    <MarkerList markers={props.markers} />
    <Marker label=""
        icon={{
            url: 'https://cdn.pixabay.com/photo/2014/04/03/10/03/google-309740_960_720.png',
            scaledSize: { width: 32, height: 62 }
        }} position={{ lat: props.coords.latitude, lng: props.coords.longitude }} />
</GoogleMap>));

export { withGeoLocation as Dashboard }