export default function ContactPage() {

    async function handleSubmit(event) {
        event.preventDefault();
        // logic to verify content ?
        let response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: document.getElementById('sub-email').value,
                subject: 'Contact',
                msg: document.getElementById('sub-problem').value
            })
        })

        if (response.ok) {
            console.log('email sent (front end)');
        }
    }
    return (

        <div>
            <h1>Contact</h1>
            <p>Not configured with an smtp server atm</p>
            
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="text" id="sub-email" name="sub-email" /><br />

                <label>Problem:</label>
                <input type="text" id="sub-problem" name="sub-problem" /><br /><br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
}