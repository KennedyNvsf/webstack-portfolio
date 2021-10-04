
import React from "react";
import "../servicesOffered/_servicessection.scss";
//icons
import ComputerIcon from '@material-ui/icons/Computer';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import StorageIcon from '@material-ui/icons/Storage';


const ServicesSection = () => {


    return (

        <div className="services-section" id="services">

            <h2 className="servicesTitle">Services we <span>Offer</span></h2>

            <div className="servicesContainer">

                <div className="servicesBlock">

                    <div className="offerTitle">
                        <ComputerIcon/>
                        <h3>Design Assessment</h3>
                    </div>

                  <p className="offerDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem eius adipisci neque incidunt possimus ex quod doloremque tempore accusantium quis?</p>

                </div>

                <div className="servicesBlock">

                    <div className="offerTitle">
                        <MobileFriendlyIcon/>
                        <h3>Web Development</h3>
                    </div>

                    <p className="offerDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem eius adipisci neque incidunt possimus ex quod doloremque tempore accusantium quis?
                    </p>

                </div>

                <div className="servicesBlock">

                    <div className="offerTitle">
                        <StorageIcon/>
                        <h3>Mobile Integration</h3>
                    </div>

                    <p className="offerDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem eius adipisci neque incidunt possimus ex quod doloremque tempore accusantium quis?
                    </p>

                </div>

                <div className="servicesBlock">

                    <div className="offerTitle">
                        <StorageIcon/>
                        <h3>User & Data Management</h3>
                    </div>

                    <p className="offerDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem eius adipisci neque incidunt possimus ex quod doloremque tempore accusantium quis?
                    </p>

                </div>

                <div className="servicesBlock">

                    <div className="offerTitle">
                        <StorageIcon/>
                        <h3>Client Consulting</h3>
                    </div>

                    <p className="offerDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem eius adipisci neque incidunt possimus ex quod doloremque tempore accusantium quis?
                    </p>

                </div>

                <div className="servicesBlock">

                    <div className="offerTitle">
                        <StorageIcon/>
                        <h3>Maintenance</h3>
                    </div>

                    <p className="offerDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem eius adipisci neque incidunt possimus ex quod doloremque tempore accusantium quis?
                    </p>

                </div>

            </div>

        </div>
    )
}

export default ServicesSection;