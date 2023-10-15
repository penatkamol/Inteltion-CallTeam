import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import createNewMeetingAsync from '../Shared/graph';

let teamsMeetingLink;
let userId
const userEmail = 'harn@inteltion.com' // define agent's email here
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest){
    context.log("Request received");

    // const userId = process.env.USER_ID;
   
   
    
    teamsMeetingLink = await createNewMeetingAsync(userEmail);
   
    const body = JSON.stringify(teamsMeetingLink);
    const meeting = JSON.parse(body);
    context.log("meeting:", meeting);
    context.log("meeting:", teamsMeetingLink);
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: meeting.onlineMeeting.joinUrl
    }    
};

export default httpTrigger;