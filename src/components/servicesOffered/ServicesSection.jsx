
import React from "react";
import "../servicesOffered/_servicessection.scss";
//icons
import ComputerIcon from '@material-ui/icons/Computer';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import StorageIcon from '@material-ui/icons/Storage';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import InsertChartIcon from '@material-ui/icons/InsertChart';

const ServicesSection = () => {


    return (

        <div className="services-section" id="services">

            <h2 className="servicesTitle">Services we <span>Offer</span></h2>

            <div className="servicesContainer">

                <div className="servicesBlock">

                    <div className="offerTitle">
                        <ArtTrackIcon/>
                        <h3>Design Assessment</h3>
                    </div>

                  <p className="offerDescription">Get a previous Design Assessment for your Business or Digital platform from our Team of Designers.</p>

                </div>

                <div className="servicesBlock">

                    <div className="offerTitle">
                        <ComputerIcon/>
                        <h3>Web Development</h3>
                    </div>

                    <p className="offerDescription"> We provide our Clients with Up to Date Web Development Services with fast and clean Code Structures.
                    </p>

                </div>

                <div className="servicesBlock">

                    <div className="offerTitle">
                         <MobileFriendlyIcon/>
                        <h3>Mobile Integration</h3>
                    </div>

                    <p className="offerDescription">We also make sure that that your Website looks Neat on Mobile Devices.
                    </p>

                </div>

                <div className="servicesBlock">

                    <div className="offerTitle">
                        <StorageIcon/>
                        <h3>User & Data Management</h3>
                    </div>

                    <p className="offerDescription"> Users and Data Management are safely handled By our Team of Expert Backend Developers
                    </p>

                </div>

                <div className="servicesBlock">

                    <div className="offerTitle">
                        <PeopleAltIcon/>
                        <h3>Client Consulting</h3>
                    </div>

                    <p className="offerDescription"> Never feel left out. Track the Progress of your Product and Get up to Speed Feedback from our Team
                    </p>

                </div>

                <div className="servicesBlock">

                    <div className="offerTitle">
                        <InsertChartIcon/>
                        <h3>Maintenance</h3>
                    </div>

                    <p className="offerDescription"> Get full access to product optimization and maintenance, Keeping your Website Always Market Ready
                    </p>

                </div>

            </div>

        </div>
    )
}

export default ServicesSection;