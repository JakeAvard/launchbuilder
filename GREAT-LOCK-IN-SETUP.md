# Great Lock-In booking funnel setup

The /great-lock-in page is built around this customer path:

1. Visitor completes the 60-second Tally assessment.
2. Tally redirects to the Stripe Payment Link for the one-time $149 session.
3. Stripe redirects successful payments to the Calendly booking URL.
4. Calendly checks the connected Google Calendar and schedules the 60-minute session.
5. Jake reviews the assessment, conducts the session, and emails the personalized report from Gmail.

## Required integrations

### 1. Tally
- Create a form named "The Great Lock-In | 60-Second Assessment".
- Add the eight prompts shown on the page.
- Collect first name, last name (optional), and email.
- Connect the form to Google Sheets using Tally's native integration.
- Set the form's post-submission redirect to the Stripe Payment Link.
- Copy the public Tally form ID from the form URL.

Site configuration:
- Set NEXT_PUBLIC_TALLY_FORM_ID to the public form ID.
- Rebuild the site after adding the variable. The page will embed the live form in place of the preview panel.

### 2. Stripe
- Create a one-time product: "The Great Lock-In — 60-Minute Personal Strategy Session".
- Price: $149 USD.
- Make customer email required and enable Stripe receipts.
- Create a Payment Link.
- Set the Payment Link's after-payment redirect to the Calendly event URL.
- Test a payment in Stripe test mode before switching the Payment Link to live mode.

Do not put Stripe secret keys in the website or Git repository. The Payment Link is a public checkout URL and belongs in Tally's redirect settings.

### 3. Calendly
- Create one 60-minute one-on-one event type.
- Connect jake.avard@gmail.com and the Google Calendar you use for availability.
- Add 15-minute buffers and a minimum 24-hour booking notice.
- Set Google Meet as the location if available on the chosen free-plan setup.
- Copy the booking URL and use it as Stripe's successful-payment redirect.

Calendly's free plan is sufficient for one event type and one calendar connection. Since payment is collected by Stripe before Calendly, Calendly does not need its paid Stripe checkout integration.

## Response and report workflow
- Tally stores questionnaire responses in the connected Google Sheet.
- Use the sheet as the client pipeline; add payment status, appointment date, report sent, and referral requested columns.
- Create a reusable Google Docs report template in Drive.
- After the session, complete the report, export it as PDF, and send it from jake.avard@gmail.com.

## Important limitations in this first version
- The site does not process or store assessment answers itself.
- The Tally embed is a preview until NEXT_PUBLIC_TALLY_FORM_ID is configured.
- Payment and booking are external hosted flows; no Stripe secret key, customer database, or custom scheduling backend is included.
- Confirm each booking against Stripe payments during the initial launch.
- The website has not been published by this change.
