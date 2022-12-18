import {
    Box,
    Divider,
    Collapse,
    Text,
    Heading,
}  from "@chakra-ui/react"

import React from 'react';


const Question = () => {

    const [show1, setShow1] = React.useState(false);
    const [show2, setShow2] = React.useState(false);
    const [show3, setShow3] = React.useState(false);
    const [show4, setShow4] = React.useState(false);
    const [show5, setShow5] = React.useState(false);

    const handleToggle1 = () => setShow1(!show1);
    const handleToggle2 = () => setShow2(!show2);
    const handleToggle3 = () => setShow3(!show3);
    const handleToggle4 = () => setShow4(!show4);
    const handleToggle5 = () => setShow5(!show5);    

    return (
        <Box>
          
                    <Box textAlign='left' margin={'auto'} w={'50%'}>
                        <Heading
                            mt={"15px"}
                            fontSize={{'2xl':'25px', xl:'25px', lg:'25px',xl:'25px',sm:'16px',base:'12px' }}
                            fontWeight={'600'}
                            // margin={{ base :'10%', sm:'4%', md:'4%', lg:'10%', xl:'10%' }}
                            cursor={'pointer'}
                            onClick={handleToggle1}>
                            How does Airtable's pricing work
                        </Heading>
                            <Divider height={5} />
                        <Collapse startingHeight={5} in={show1} >
                            <Text cursor={'pointer'}> Airtable plans are charged per seat. If you are on Airtable’s Free plan, you can add viewers and 
                            commenters to your workspace for free. If you are on a paid Airtable plan, you will be charged for all collabo
                            rators who have edit or comment permissions to at least one base in the workspace. No
                             charges will apply for read-only collaborators or people submitting forms. Charges 
                             are prorated collaborators with edit permissions added partway through the month will
                              only be charged for the days they were collaborators</Text>
                            <Divider height={5} /> 
                        </Collapse >
                    </Box>
                    <Box textAlign='left' margin={'auto'} w={'50%'}>
                        <Heading
                            mt={"15px"}
                            fontSize={{'2xl':'25px', xl:'25px', lg:'25px',xl:'25px',sm:'16px',base:'12px' }}
                            fontWeight={'600'}
                            //  margin={{ base: '10%', sm :'4%', md :'4%', lg :'10%', xl: '10%' }}
                            cursor={'pointer'}
                            onClick={handleToggle2} >
                            How much does Airtable cost
                            </Heading>
                            <Divider height={5}  />
                        <Collapse startingHeight={5} in={show2} >
                            <Text cursor={'pointer'} > Our Free plan is available at no cost for teams just getting started. For teams who like the features of our Free plan but need more storage, our Plus plan is available for $10user. Our Pro plan costs $20user and includes the customization and team management features that fast moving teams and organizations need. Our Enterprise plan pricing is custom, based on the organization’s needs and scale with Airtable. To learn more about our Enterprise pricing, contact sales.</Text>
                            <Divider height={5}  />
                        </Collapse >
                    </Box>
                    <Box textAlign='left' margin={'auto'} w={'50%'}>
                        <Heading
                            mt={"15px"}
                            fontSize={{'2xl':'25px', xl:"25px", lg:'25px',xl:'25px',sm:'20px',base:'12px' }}
                            fontWeight={'600'}
                            //  margin={{ base :'10%', sm :'4%', md:'4%', lg :'10%', xl:'10%' }}
                            cursor={'pointer'}
                            onClick={handleToggle3} >
                            What are my payment options
                        </Heading>
                            <Divider height={5}  />
                        <Collapse startingHeight={5} in={show3}>
                            Text cursor=pointer All payments are made via credit card for Plus and Pro workspaces. For Enterprise accounts, we can issue an annual invoice with payment via PO andor ACH, wire, or check. Please contact sales for more information.Text
                            Divider height={5} 
                        </Collapse >
                    </Box>
                    <Box textAlign='left' margin={'auto'} w={'50%'}>
                        <Heading
                            mt={"15px"}
                            fontSize={{'2xl':'25px', xl:"25px", lg:'25px',xl:'25px',sm:'20px',base:'12px' }}    
                            fontWeight={'600'}
                            // margin={{ base :'10%', sm :'4%', md:'4%', lg :'10%', xl:'10%' }}
                            cursor={'pointer'}
                            onClick={handleToggle4}>
                            What happens when I hit my usage limits
                        </Heading>
                            <Divider height={5}  />
                        <Collapse startingHeight={5} in={show4}>
                            <Text cursor={'pointer'}> If you reach our record or attachment limits, you’ll still be able to use your bases. We’ll let you know about the overage, and give you a grace period to find a plan that fits your needs! </Text>
                            <Divider height={5}  />
                            </Collapse>
                    </Box>
                    <Box textAlign='left' margin={'auto'} w={'50%'}>
                        <Heading
                        mt={"15px"}
                        fontSize={{'2xl':'25px', xl:"25px", lg:'25px',xl:'25px',sm:'20px',base:'12px' }}    
                            fontWeight={'600'}
                            // margin={{ base :'10%', sm :'4%', md:'4%', lg :'10%', xl:'10%' }}
                            cursor={'pointer'}
                            onClick={handleToggle5}>
                            What's an Airtable base
                            </Heading>
                            <Divider height={5}  />
                        <Collapse startingHeight={5} in={show5}>
                            <Text cursor={'pointer'}> A base is a collection of related tables, often reflecting a single project, process, or workflow that you collaborate on with your team. For example, you could make a base to organize your sales process, with tables for sales leads, companies, and deal opportunities. Each table contains records (similar to rows in a spreadsheet), which represent the individual objects, ideas, or people that you’re tracking. You’re free to create as many bases as you’d like on any of our plans. </Text>
                            <Divider height={5}  />
                            </Collapse>
                    </Box>
            </Box>
    );
};

export default Question;
