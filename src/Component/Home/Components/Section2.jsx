import React, { useEffect, useState } from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Blood from "../../../assets/blood.png"
import C1 from "../../../assets/c1.png"
import Edit from "../../../assets/EditSvg"

import { getAboutData, editAboutData } from "../../../api/backEndAPI"

import "./Section2.scss"

const Section2 = () => {

    const [aboutData, setAboutData] = useState(null)
    const [reload, setReload] = useState(false)
    const [newData, setNewData] = useState({
        path: null,
        name: "",
        content: ""
    })

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = (path, name) => {
        setNewData({
            path: path,
            name: name,
            content: ""
        })
        setOpen(true);

    };
    const enteringNewData = (event) => {
        console.log(event.target.value)
        setNewData((preValue) => {
            return {
                ...preValue,
                content: event.target.value
            }
        })
    }
    const handleClose = () => {
        setOpen(false);
    };

    const update = async () => {
        let res = await editAboutData(newData.path, newData.content)
        if (res.error != null) {
            alert("ERROR While EDITING")
        } else {
            handleClose()
            setReload((preValue) => {
                return (preValue ? false : true)
            })
        }
    }


    useEffect(async () => {
        let res = await getAboutData()
        if (res.error != null) {

        } else {
            console.log("RESPONSE ================== ", res.data.data)
            setAboutData(res.data.data)
        }
    }, [reload])




    return (
        <>
            <section id="about" className="about_container">
                <div className="box">
                    <div className="title">
                        <div className="heading positionrelative">
                            {
                                <>
                                    <span className="aboutedit" onClick={() => handleClickOpen("heading", "Heading")} > <Edit width="30px" color="green" /> </span>
                                </>
                            }
                            {
                                !aboutData || aboutData.heading == null || aboutData.heading.length < 1 ?
                                    <>
                                        The 8 Bushido Codes

                                    </>
                                    :
                                    aboutData.heading
                            }
                        </div>
                        <div className="detail">
                            <p className="positionrelative">
                                {
                                    <>
                                        <span className="aboutedit" onClick={() => handleClickOpen("headingData1", "Detail (Paragraph No.1)")}> <Edit width="30px" color="green" /> </span>
                                    </>
                                }
                                {
                                    !aboutData || aboutData.headingData1 == null || aboutData.headingData1.length < 1 ?
                                        <>
                                            Bushidō (武士道, "The way of the warrior") is a moral code relating to 侍 (Samurai) attitudes, behaviour and lifestyle, where all Samurais live and die by.
                                        </>
                                        :
                                        aboutData.headingData1
                                }
                            </p>
                            <br />
                            <p className="positionrelative">
                                {
                                    <>
                                        <span className="aboutedit" onClick={() => handleClickOpen("headingData2", "Detail (Paragraph No.2)")}> <Edit width="30px" color="green" /> </span>
                                    </>
                                }
                                {
                                    !aboutData || aboutData.headingData2 == null || aboutData.headingData2.length < 1 ?
                                        <>
                                            These 8 virtues of the Bushido code are each embodied by the 8 legendary Shoguns (将軍, shōgun):
                                        </>
                                        :
                                        aboutData.headingData2
                                }
                            </p>
                        </div>
                    </div>
                    <div className="data">
                        <div className="cards">
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card1.heading", "Heading")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card1.heading == null || aboutData.card1.heading < 1 ?
                                            <>
                                                Gi
                                            </>
                                            :
                                            aboutData.card1.heading
                                    }
                                </div>
                                <div className="s positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card1.signature", "Signature")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card1.signature == null || aboutData.card1.signature < 1 ?
                                            <>
                                                "Shogun of Justice"
                                            </>
                                            :
                                            aboutData.card1.signature
                                    }
                                </div>
                                <div className="d positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card1.detail", "Detail")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card1.detail == null || aboutData.card1.detail < 1 ?
                                            <>
                                                Samurais make a full commitment to their decisions.
                                            </>
                                            :
                                            aboutData.card1.detail
                                    }
                                </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card2.heading", "Heading")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card2.heading == null || aboutData.card2.heading < 1 ?
                                            <>
                                                Gi
                                            </>
                                            :
                                            aboutData.card2.heading
                                    }
                                </div>
                                <div className="s positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card2.signature", "Signature")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card2.signature == null || aboutData.card2.signature < 1 ?
                                            <>
                                                "Shogun of Justice"
                                            </>
                                            :
                                            aboutData.card2.signature
                                    }
                                </div>
                                <div className="d positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card2.detail", "Detail")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card2.detail == null || aboutData.card2.detail < 1 ?
                                            <>
                                                Samurais make a full commitment to their decisions.
                                            </>
                                            :
                                            aboutData.card2.detail
                                    }
                                </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card3.heading", "Heading")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card3.heading == null || aboutData.card3.heading < 1 ?
                                            <>
                                                Gi
                                            </>
                                            :
                                            aboutData.card3.heading
                                    }
                                </div>
                                <div className="s positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card3.signature", "Signature")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card3.signature == null || aboutData.card3.signature < 1 ?
                                            <>
                                                "Shogun of Justice"
                                            </>
                                            :
                                            aboutData.card3.signature
                                    }
                                </div>
                                <div className="d positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card3.detail", "Detail")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card3.detail == null || aboutData.card3.detail < 1 ?
                                            <>
                                                Samurais make a full commitment to their decisions.
                                            </>
                                            :
                                            aboutData.card3.detail
                                    }
                                </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card4.heading", "Heading")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card4.heading == null || aboutData.card4.heading < 1 ?
                                            <>
                                                Gi
                                            </>
                                            :
                                            aboutData.card4.heading
                                    }
                                </div>
                                <div className="s positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card4.signature", "Signature")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card4.signature == null || aboutData.card4.signature < 1 ?
                                            <>
                                                "Shogun of Justice"
                                            </>
                                            :
                                            aboutData.card4.signature
                                    }
                                </div>
                                <div className="d positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card4.detail", "Detail")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card4.detail == null || aboutData.card4.detail < 1 ?
                                            <>
                                                Samurais make a full commitment to their decisions.
                                            </>
                                            :
                                            aboutData.card4.detail
                                    }
                                </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card5.heading", "Heading")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card5.heading == null || aboutData.card5.heading < 1 ?
                                            <>
                                                Gi
                                            </>
                                            :
                                            aboutData.card5.heading
                                    }
                                </div>
                                <div className="s positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card5.signature", "Signature")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card5.signature == null || aboutData.card5.signature < 1 ?
                                            <>
                                                "Shogun of Justice"
                                            </>
                                            :
                                            aboutData.card5.signature
                                    }
                                </div>
                                <div className="d positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card5.detail", "Detail")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card5.detail == null || aboutData.card5.detail < 1 ?
                                            <>
                                                Samurais make a full commitment to their decisions.
                                            </>
                                            :
                                            aboutData.card5.detail
                                    }
                                </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card6.heading", "Heading")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card6.heading == null || aboutData.card6.heading < 1 ?
                                            <>
                                                Gi
                                            </>
                                            :
                                            aboutData.card6.heading
                                    }
                                </div>
                                <div className="s positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card6.signature", "Signature")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card6.signature == null || aboutData.card6.signature < 1 ?
                                            <>
                                                "Shogun of Justice"
                                            </>
                                            :
                                            aboutData.card6.signature
                                    }
                                </div>
                                <div className="d positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card6.detail", "Detail")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card6.detail == null || aboutData.card6.detail < 1 ?
                                            <>
                                                Samurais make a full commitment to their decisions.
                                            </>
                                            :
                                            aboutData.card6.detail
                                    }
                                </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card7.heading", "Heading")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card7.heading == null || aboutData.card7.heading < 1 ?
                                            <>
                                                Gi
                                            </>
                                            :
                                            aboutData.card7.heading
                                    }
                                </div>
                                <div className="s positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card7.signature", "Signature")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card7.signature == null || aboutData.card7.signature < 1 ?
                                            <>
                                                "Shogun of Justice"
                                            </>
                                            :
                                            aboutData.card7.signature
                                    }
                                </div>
                                <div className="d positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card7.detail", "Detail")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card7.detail == null || aboutData.card7.detail < 1 ?
                                            <>
                                                Samurais make a full commitment to their decisions.
                                            </>
                                            :
                                            aboutData.card7.detail
                                    }
                                </div>
                            </div>
                            <div className="card">
                                <img src={C1} alt="ERROR" />
                                <div className="h positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card8.heading", "Heading")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card8.heading == null || aboutData.card8.heading < 1 ?
                                            <>
                                                Gi
                                            </>
                                            :
                                            aboutData.card8.heading
                                    }
                                </div>
                                <div className="s positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card8.signature", "Signature")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card8.signature == null || aboutData.card8.signature < 1 ?
                                            <>
                                                "Shogun of Justice"
                                            </>
                                            :
                                            aboutData.card8.signature
                                    }
                                </div>
                                <div className="d positionrelative">
                                    {
                                        <>
                                            <span className="aboutedit" onClick={() => handleClickOpen("card8.detail", "Detail")} > <Edit width="30px" color="green" /> </span>
                                        </>
                                    }
                                    {
                                        !aboutData || aboutData.card8.detail == null || aboutData.card8.detail < 1 ?
                                            <>
                                                Samurais make a full commitment to their decisions.
                                            </>
                                            :
                                            aboutData.card8.detail
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <img className="blood" src={Blood} alt="ERROR" />
            </section>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{newData.name}</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText> */}
                    <textarea className="content_textarea" cols="20" rows="10" value={newData.content} onChange={enteringNewData}>  </textarea>
                </DialogContent>
                <DialogActions>
                    <Button className="greenbtn" onClick={handleClose}>Cancel</Button>
                    <Button className="greenbtn" onClick={update}>Update</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Section2
