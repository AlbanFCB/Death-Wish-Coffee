import React from "react";
import AppBar from "@mui/material/AppBar";
import { TextField, Typography, Button, Box, Container } from "@mui/material";
import Link from "next/link";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';



const Footer = () => {
    return (

        <Box >
            <AppBar position='static' sx={{ top: 'auto', bottom: 0 }} >
                <Container style={{ backgroundColor: '#e12727', maxHeight: 206, maxWidth: '100%' }} fluid>
                    <Typography
                        variant='h5'
                        color='black'
                        align='center'
                        component="h2"
                        style={{ fontSize: 18.5, fontWeight: '700', marginTop: 50 }}
                    >
                        LET'S DRINK COFFEE AND THROW THINGS AT HAPPY PEOPLE
                    </Typography>
                    <form style={{ padding: 20, display: 'flex' }}>
                        <TextField
                            style={{ 
                                backgroundColor: 'white', 
                                width: 343, 
                                height: 48, 
                                margin: 'auto', 
                                marginRight: 0 }}
                            placeholder="Enter your Email Address"
                        />
                        <Button
                            type='submit'
                            style={{
                                 width: 216, 
                                 height: 48, 
                                 backgroundColor: 'black', 
                                 color: "white", 
                                 marginLeft: 0, 
                                 marginRight: 'auto', 
                                 cursor: 'pointer' }}

                        >
                            SIGN ME UP
                        </Button>
                    </form>

                </Container>
                <Container style={{ backgroundColor: 'black', maxHeight: 423, maxWidth: '100%' }} fluid >
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Link href={"/"} style={{ 
                            marginRight: 50, 
                            marginLeft: 'auto', 
                            marginTop: 100 }}>
                            <img
                                src={
                                    "https://cdn.shopify.com/s/files/1/0271/7209/files/dwc-logo.png?v=1624458280"
                                }
                                alt=""
                                style={{
                                    height: 250,
                                    widtth: 250,

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
                                style={{ 
                                    fontSize: 16, 
                                    fontWeight: 'lighter' 
                                }}
                                gutterBottom

                            >
                                Reviews
                            </Typography>
                            <Typography
                                style={{ 
                                    fontSize: 16, 
                                     fontWeight: 'lighter' 
                                }}
                                gutterBottom

                            >
                                FAQ + Help
                            </Typography>
                            <Typography
                                style={{ 
                                    fontSize: 16, 
                                     fontWeight: 'lighter', 
                                }}
                                gutterBottom

                            >
                                Refund Policy
                            </Typography>
                            <div style={{ width: 650, display: 'flex',  }}>
                                <Typography
                                    style={{ 
                                        fontSize: 16, 
                                        fontWeight: 'lighter', 
                                        marginTop: 60 }}
                                    gutterBottom
                                >
                                    @ Death Wish Coffee Co 2023 All Rights Reserved.
                                </Typography>
                                <Link href="#"><TwitterIcon style={{ 
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
                                    marginTop:60,
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
                                     marginTop:60,
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
                                     marginTop:60,
                                     borderRadius: '50%',
                                     backgroundColor: 'white',
                                     padding: 3,
                                     
                                    }} />
                                 </Link>

                            </div>


                        </Box>
                        <Box style={{ marginRight: 50, marginLeft: 50 }}>
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
                                style={{ 
                                    fontSize: 16, 
                                    fontWeight: 'lighter', 
                                    
                                }}
                                gutterBottom

                            >
                                Your Account
                            </Typography>
                            <Typography
                                style={{ 
                                    fontSize: 16, 
                                    fontWeight: 'lighter', 
                                    
                                }}
                                gutterBottom

                            >
                                Shopping Details
                            </Typography>
                            <Typography
                                style={{ 
                                    fontSize: 16, 
                                    fontWeight: 'lighter', 
                                   
                                }}
                                gutterBottom

                            >
                                Subscription
                            </Typography>
                            <Typography
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
                                marginLeft: 50 }}>
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
                                style={{ 
                                    fontSize: 16, 
                                    fontWeight: 'lighter', 
                                    
                                }}
                                gutterBottom

                            >
                                Terms + Conditions
                            </Typography>
                            <Typography
                                style={{ 
                                    fontSize: 16, 
                                    fontWeight: 'lighter', 
                                    
                                }}
                                gutterBottom

                            >
                                Privacy Policy
                            </Typography>
                            <Typography
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
            </AppBar>
        </Box>
    )
}

export default Footer;