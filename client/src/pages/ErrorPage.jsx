// import sendEmail from "../utils/emailer";

export default function ErrorPage() {

    async function handleSubmit(event) {
        event.preventDefault();
        // logic to verify content ?
        console.log('send data')
        let response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: document.getElementById('sub-email').value,
                subject: 'Error',
                msg: document.getElementById('sub-problem').value
            })
        })

        if (response.ok) {
            console.log('email sent (front end)');
        }
    }

    return (

        <div>
            <h1>Error 404</h1>
            <p>If you are trying to access a known page please email the admin using the form below</p>
            <p>This doesn't work atm as I search for an smtp server</p>
            {/* Add a form here to make an email */}
            <form onSubmit={handleSubmit}>
                <label>Email (optional):</label>
                <input type="text" id="sub-email" name="sub-email" /><br />

                <label>Problem:</label>
                <input type="text" id="sub-problem" name="sub-problem" /><br /><br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
}