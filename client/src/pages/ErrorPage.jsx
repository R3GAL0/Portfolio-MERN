// import sendEmail from "../utils/emailer";

export default function ErrorPage() {
    return (

        <div>
            <h1>Error 404</h1>
            <p>If you are trying to access a known page please email the admin using the form below</p>

            {/* Add a form here to make an email */}
            <form>
                <label for="sub-email">Email (optional):</label>
                <input type="text" id="sub-email" name="sub-email" /><br />

                <label for="sub-problem">Problem:</label>
                <input type="text" id="sub-problem" name="sub-problem" /><br /><br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
}

// move this to server side
function makeEmail() {
    let email = 'maxfwalent+portfolio@gmail.com'
    // format the email msg
    let msg = '';
    // send the email
    sendEmail(email, 'Error', msg)

}
