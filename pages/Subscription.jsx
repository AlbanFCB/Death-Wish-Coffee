import { AppBar, Container, Box, Typography, Button } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react'
import Navbar from "../components/Navbar"
import Link from "next/link";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { fontWeight, textAlign } from '@mui/system';

const Subscription = () => {
    return (
        <>
            <Navbar />
            <div style={{
                width: '100%',
                height: '880px',
                backgroundImage: `url(${"subscribe.png"})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
            </div>
            <Container
                style={{
                    backgroundColor: "black",
                    maxHeight: '800px',
                    maxWidth: '100%',
                }}
                className='benefits'
            >
                <Typography
                    variant='h1'
                    align='center'
                    style={{
                        color: 'white',
                        fontSize: 69,
                        fontWeight: '1000',
                        marginTop: 100,
                        marginBottom: 100,
                        fontFamily: 'revansmedium'
                    }}
                >
                    SUBSCRIPTION BENEFITS
                </Typography>
                <Box style={{
                    maxWidth: '100%',
                    maxHeight: 320,
                    backgroundColor: 'black',
                    display: 'flex'


                }}
                >
                    <Card sx={{ maxWidth: 474 }} style={{ backgroundColor: 'black' }}>
                        <CardMedia
                            component="img"
                            alt="red truck"
                            height="165"
                            image='truck.png'
                        />
                        <CardContent>
                            <Typography
                                variant="h5"
                                style={{
                                    color: 'white',
                                    fontSize: '26px',
                                    fontFamily: 'revansmedium',
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}
                            >
                                NEVER RUN OUT
                            </Typography>
                            <Typography
                                variant="body1"
                                style={{
                                    color: 'white',
                                    fontSize: 24,
                                    fontWeight: 'lighter',
                                    textAlign: 'center',
                                    marginTop: 20
                                }}
                            >
                                Your coffee will always be there for you.
                            </Typography>
                        </CardContent>

                    </Card>
                    <Card sx={{ maxWidth: 474 }} style={{ backgroundColor: 'black' }}>
                        <CardMedia
                            component="img"
                            alt="savings"
                            height="165"
                            image='save.png'
                        />
                        <CardContent>
                            <Typography
                                variant="h5"
                                style={{
                                    color: 'white',
                                    fontSize: '26px',
                                    fontFamily: 'revansmedium',
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}
                                gutterBottom
                            >
                                SAVE EACH MONTH
                            </Typography>
                            <Typography
                                variant="body1"
                                style={{
                                    color: 'white',
                                    fontSize: 24,
                                    fontWeight: 'lighter',
                                    textAlign: 'center',
                                    marginTop: 20
                                }}
                            >
                                Save 10% and get free shipping.
                            </Typography>
                        </CardContent>

                    </Card>
                    <Card sx={{ maxWidth: 474 }} style={{ backgroundColor: 'black' }}>
                        <CardMedia
                            component="img"
                            alt="easy access"
                            height="165"
                            image='access.png'
                        />
                        <CardContent>
                            <Typography
                                variant="h5"
                                style={{
                                    color: 'white',
                                    fontSize: '26px',
                                    fontFamily: 'revansmedium',
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}
                            >
                                EXCLUSIVE ACCESS
                            </Typography>
                            <Typography
                                variant="body1"
                                style={{
                                    color: 'white',
                                    fontSize: 24,
                                    fontWeight: 'lighter',
                                    textAlign: 'center',
                                    marginTop: 20
                                }}
                            >
                                To limited-edition products and fresh, new releases.
                            </Typography>
                        </CardContent>

                    </Card>
                    <Card sx={{ maxWidth: 474 }} style={{ backgroundColor: 'black' }}>
                        <CardMedia
                            component="img"
                            alt="manage"
                            height="165"
                            image='manage.png'
                        />
                        <CardContent>
                            <Typography
                                variant="h5"
                                style={{
                                    color: 'white',
                                    fontSize: '26px',
                                    fontFamily: 'revansmedium',
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}
                            >
                                MANAGE WITH EASE
                            </Typography>
                            <Typography
                                variant="body1"
                                style={{
                                    color: 'white',
                                    fontSize: 24,
                                    fontWeight: 'lighter',
                                    textAlign: 'center',
                                    marginTop: 20
                                }}
                            >
                                Flexible options to pause, swap or cancel at anytime.
                            </Typography>
                        </CardContent>

                    </Card>

                </Box>

            </Container>
            <Container
                style={{
                    backgroundColor: "#201E1D",
                    maxWidth: '100%',
                    maxHeight: '445px',
                    paddingTop: 60,
                    paddingBottom: 100
                }}
            >

                <Typography
                    variant="h1"
                    align='center'
                    style={{
                        color: 'white',
                        fontSize: 69,
                        fontWeight: '1000',
                        fontFamily: 'revansmedium'
                    }}
                >
                    NEED HELP CHOOSING ?
                </Typography>
                <Typography
                    variant="body1"
                    style={{
                        color: 'white',
                        fontSize: 24,
                        fontWeight: 'lighter',
                        textAlign: 'center',
                        marginTop: 20
                    }}
                >
                    Take a short quiz to figure out which one of our everyday roasts is best for you.
                </Typography>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: "red",
                        color: "black",
                        width: "230px",
                        height: "65px",
                        fontWeight: "500",
                        marginTop: "50px",
                        cursor: 'pointer',
                        marginLeft: '45%'

                    }}
                >
                    FIND MY BREW
                </Button>

            </Container>
            <Container 
                style={{
                    backgroundColor: 'black',
                    maxHeight: '689px',
                    maxWidth: '100%',
                    marginBottom: '100px'
                }}
            >
                <Typography
                    variant='h1'
                    align='center'
                    style={{
                        color: 'white',
                        fontSize: 69,
                        fontWeight: '1000',
                        marginTop: 100,
                        marginBottom: 100,
                        fontFamily: 'revansmedium'
                    }}
                >
                    CUSTOMER REVIEWS
                </Typography>
                <Box style={{
                    maxWidth: '100%',
                    maxHeight: 280,
                    backgroundColor: 'black',
                    display: 'flex',
                    justifyContent: 'center'
                    }}
                >
                    <Card sx={{ maxWidth: 520 }} style={{ backgroundColor: 'black' }}>
                        <CardMedia
                            component="img"
                            alt="ratings"
                            height="50"
                            image='stars.png'
                        />
                        <CardContent>
                            <Typography
                                variant="h5"
                                style={{
                                    color: 'white',
                                    fontSize: '26px',
                                    fontFamily: 'revansmedium',
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}
                            >
                                Loved it so much
                            </Typography>
                            <Typography
                                variant="body1"
                                gutterBottom
                                style={{
                                    color: 'white',
                                    fontSize: 24,
                                    fontWeight: 'lighter',
                                    textAlign: 'center',
                                    marginTop: 20
                                }}
                            >
                               Very smooth and rich flavor. I loved it so much I got a subscription of the Medium Roast Death Cups
                            </Typography>
                            <Typography
                                variant="h5"
                                style={{
                                    color: 'white',
                                    fontSize: '20px',
                                    fontFamily: 'revansmedium',
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}
                            >
                                - Sue P.
                            </Typography>
                        </CardContent>
 
                    </Card>
                    <Card sx={{ maxWidth: 520 }} style={{ backgroundColor: 'black' }}>
                        <CardMedia
                            component="img"
                            alt="ratings"
                            height="50"
                            image='stars.png'
                        />
                        <CardContent>
                            <Typography
                                variant="h5"
                                style={{
                                    color: 'white',
                                    fontSize: '26px',
                                    fontFamily: 'revansmedium',
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}
                            >
                                Best. Coffee. EVER.
                            </Typography>
                            <Typography
                                variant="body1"
                                gutterBottom
                                style={{
                                    color: 'white',
                                    fontSize: 24,
                                    fontWeight: 'lighter',
                                    textAlign: 'center',
                                    marginTop: 20
                                }}
                            >
                               I'm on a subscription, and probably will be untill the day I drop dead!
                            </Typography>
                            <Typography
                                variant="h5"
                                style={{
                                    color: 'white',
                                    fontSize: '20px',
                                    fontFamily: 'revansmedium',
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}
                            >
                                - Jephta C.
                            </Typography>
                        </CardContent>
 
                    </Card>
                    <Card sx={{ maxWidth: 520 }} style={{ backgroundColor: 'black' }}>
                        <CardMedia
                            component="img"
                            alt="ratings"
                            height="50"
                            image='stars.png'
                        />
                        <CardContent>
                            <Typography
                                variant="h5"
                                style={{
                                    color: 'white',
                                    fontSize: '26px',
                                    fontFamily: 'revansmedium',
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}
                            >
                                The kick you need
                            </Typography>
                            <Typography
                                variant="body1"
                                gutterBottom
                                style={{
                                    color: 'white',
                                    fontSize: 24,
                                    fontWeight: 'lighter',
                                    textAlign: 'center',
                                    marginTop: 20
                                }}
                            >
                               We love the coffee so much that we have a monthly subscription to the dark and medium roast!
                            </Typography>
                            <Typography
                                variant="h5"
                                style={{
                                    color: 'white',
                                    fontSize: '20px',
                                    fontFamily: 'revansmedium',
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}
                            >
                                - Erica O.
                            </Typography>
                        </CardContent>
 
                    </Card>

                </Box>

            </Container>
            <AppBar position='static' sx={{ top: 'auto', bottom: 0 }}>
                <Container style={{ backgroundColor: 'black', maxHeight: 423, maxWidth: '100%' }} className="footerBlack">
                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                        <Link href={"/"}
                            style={{
                                marginRight: 50,
                                marginLeft: 'auto',
                                marginTop: 100
                            }}

                        >
                            <img
                                src={
                                    "https://cdn.shopify.com/s/files/1/0271/7209/files/dwc-logo.png?v=1624458280"
                                }
                                alt=""
                                style={{
                                    height: 230,
                                    widtth: 230,

                                }}
                            />

                        </Link>
                        <Box style={{
                            marginRight: 50,
                            marginLeft: 50,
                            maxWidth: 104,

                        }}
                        >

                            <Typography
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginTop: 130
                                }}

                            >
                                Company
                            </Typography>
                            <Typography
                                className="link"
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter'
                                }}
                                gutterBottom

                            >
                                Reviews
                            </Typography>
                            <Typography
                                className="link"
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter'
                                }}
                                gutterBottom

                            >
                                FAQ + Help
                            </Typography>
                            <Typography
                                className="link"
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter',
                                }}
                                gutterBottom

                            >
                                Refund Policy
                            </Typography>
                            <div style={{ width: 650, display: 'flex', }}>
                                <Typography
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 'lighter',
                                        marginTop: 60
                                    }}
                                    gutterBottom
                                >
                                    @ Death Wish Coffee Co 2023 All Rights Reserved.
                                </Typography>

                                <Link href="#" ><TwitterIcon style={{
                                    color: 'black',
                                    maxHeight: 35,
                                    width: 30,
                                    marginLeft: 90,
                                    marginTop: 60,
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    padding: 3,

                                }} />
                                </Link>
                                <Link href="#"><FacebookIcon style={{
                                    color: 'black',
                                    maxHeight: 35,
                                    width: 30,
                                    marginLeft: 12,
                                    marginTop: 60,
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    padding: 3,


                                }} />
                                </Link>
                                <Link href="#"><InstagramIcon style={{
                                    color: 'black',
                                    maxHeight: 35,
                                    width: 30,
                                    marginLeft: 12,
                                    marginTop: 60,
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    padding: 3,

                                }} />
                                </Link>
                                <Link href="#"><YouTubeIcon style={{
                                    color: 'black',
                                    maxHeight: 35,
                                    width: 30,
                                    marginLeft: 12,
                                    marginTop: 60,
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    padding: 3,

                                }} />
                                </Link>

                            </div>


                        </Box>

                        <Box style={{ marginRight: 50, marginLeft: 50 }} >
                            <Typography
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginTop: 130

                                }}
                            >
                                Accounts + Orders
                            </Typography>
                            <Typography
                                className="link"
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter',

                                }}
                                gutterBottom

                            >
                                Your Account
                            </Typography>
                            <Typography
                                className="link"
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter',

                                }}
                                gutterBottom

                            >
                                Shopping Details
                            </Typography>
                            <Typography
                                className="link"
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter',

                                }}
                                gutterBottom

                            >
                                Subscription
                            </Typography>
                            <Typography
                                className="link"
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter',

                                }}
                                gutterBottom

                            >
                                Wholesale
                            </Typography>
                        </Box>
                        <Box

                            style={{
                                marginRight: 'auto',
                                marginLeft: 50
                            }}>
                            <Typography
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginTop: 130

                                }}

                            >
                                Legal
                            </Typography>
                            <Typography
                                className="link"
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter',

                                }}
                                gutterBottom

                            >
                                Terms + Conditions
                            </Typography>
                            <Typography
                                className="link"
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter',

                                }}
                                gutterBottom

                            >
                                Privacy Policy
                            </Typography>
                            <Typography
                                className="link"
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter',

                                }}

                            >
                                PROP 65
                            </Typography>
                            <Typography
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter',
                                    marginTop: 25
                                }}
                            >
                                Get Wired with us
                            </Typography>

                        </Box>

                    </div>

                </Container>
                <Container className="footerResp">
                    <div className="footerMenu">
                        <h2>END OF THE ROAD, JACK.</h2>
                        <Typography
                            style={{
                                width: 140,
                                fontSize: '16px',
                                fontWeight: 'lighter',
                                marginTop: 20,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                color: 'white'
                            }}

                        >
                            Get Wired with us
                        </Typography>
                        <div style={{
                            width: 149,
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}
                        >
                            <Link href="#"><TwitterIcon style={{
                                color: 'black',
                                maxHeight: 33,
                                width: 28,
                                marginTop: 0,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                padding: 3,

                            }} />
                            </Link>
                            <Link href="#"><FacebookIcon style={{
                                color: 'black',
                                maxHeight: 33,
                                width: 28,
                                marginLeft: 12,
                                marginTop: 0,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                padding: 3,


                            }} />
                            </Link>
                            <Link href="#"><InstagramIcon style={{
                                color: 'black',
                                maxHeight: 33,
                                width: 28,
                                marginLeft: 12,
                                marginTop: 0,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                padding: 3,

                            }} />
                            </Link>
                            <Link href="#"><YouTubeIcon style={{
                                color: 'black',
                                maxHeight: 33,
                                width: 28,
                                marginLeft: 12,
                                marginTop: 0,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                padding: 3,

                            }} />
                            </Link>
                        </div>
                        <Typography
                            style={{
                                fontSize: 9,
                                fontWeight: 'lighter',
                                marginTop: 5,
                                width: '765px',
                                marginLeft: 'auto',

                            }}
                            gutterBottom
                        >
                            @ Death Wish Coffee Co 2023 All Rights Reserved.
                        </Typography>
                    </div>


                </Container>
            </AppBar>
        </>
    )
}

export default Subscription
