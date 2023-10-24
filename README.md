# Cypress-Hub
# Cypress CSV Invoice Testing README

This README provides an explanation of the Cypress test suite designed to test the functionality of a web application that allows users to upload and parse CSV invoices. The test suite includes a series of test cases covering various aspects of the application's behavior. 

## Test Cases

### 1. URL Link should be Accessible
- This test verifies that the application's URL is accessible by visiting it.

### 2. Valid file format
- This test verifies the successful upload of a valid CSV file ('bill.csv') by attaching it to the file input field with the ID 'statement-file'.

### 3. Invalid file format
- This test attempts to upload an invalid file format (a PDF file, 'IncomeShareAgreement.pdf') to the 'statement-file' input. The intention is to simulate attaching an unsupported file format and verify how the application handles it.

### 4. CSV Invoice Parser visibility
- This test checks whether the heading with the text 'CSV Invoice Parser' is visible on the page.

### 5. Verify the display screen shows a file upload Button
- This test verifies the visibility of the file input field with the ID 'statement-file'.

### 6. Parser Invoice file visibility
- It checks if a button with the text 'Parse Invoice File' is visible on the page.

### 7. Click Here visibility
- This test ensures that a link with the text 'Click Here' is visible on the page.

### 8. Verify the display screen shows a specify file description
- This test verifies the visibility of a label with the text 'Specify File'.

### 9. Verify the display screen shows a Choose File
- This test checks if the 'statement-file' input is visible. Note that this test appears to be redundant as it repeats the check from test case 5.

### 10. Verify that the Parse Invoice File Button is functional
- This test attaches a CSV file and clicks the 'Parse Invoice File' button to verify its functionality.

### 11. Verify that a summary result shows after parsing a file
- It attaches a CSV file and clicks the 'Parse Invoice File' button, then checks if an element with the attribute `ng-view` and containing the text 'summary' is visible.

### 12. Response time to parse a file should be less than 300ms
- This test measures the response time for parsing a file by recording the start and end times before and after clicking the 'Parse Invoice File' button.

### 13. Response time to upload a File should be less than 300ms
- Similar to the previous test, this one measures the response time for uploading a file.

### 14. Validate that Invalid file format cannot be parsed
- This test attempts to parse an invalid PDF file and checks for the expected behavior when an invalid file format is uploaded.

### 15. Verify that an Alert shows when an Invalid File format is Parsed
- This test checks if an alert element is displayed when an invalid file format is parsed.

### 16. Verify that a processing message Alert shows after clicking on the Parse File Button
- This test checks if a `span` element is displayed after clicking the 'Parse Invoice File' button.

### 17. Verify that a message shows "Could not parse input" when an invalid file format is uploaded
- This test checks if an alert element with the message 'Could not parse input' is displayed when an invalid file format is uploaded.

### 18. Verify that the Alert message for processing parsed input file is visible
- This test checks if a `span` element with the message 'Please wait while we parse the uploaded file' is displayed after clicking the 'Parse Invoice File' button.

These test cases cover various scenarios related to uploading and parsing CSV files, including handling invalid files and measuring response times. 

## Getting Started

1. Make sure you have Cypress and `cypress-file-upload` installed. You can install it using npm:

   ```
   npm install cypress cypress-file-upload
   ```

2. Clone this repository to your local machine.

3. Navigate to the project directory.

4. Run the Cypress tests by executing the following command:

   ```
   npx cypress open
   ```

5. Cypress will open, and you can select the test suite (`csv-invoice-spec.js`) to run the tests.

## Customization

You can customize these tests to fit your specific web application and use cases. You can modify the URLs, file paths, and expected element selectors to match your application.

For more details on running Cypress tests and interpreting test results, please refer to the Cypress documentation and resources.

---

Feel free to adapt and expand upon these test cases to suit your application's requirements and business logic. Cypress provides a powerful testing framework for end-to-end testing, and these tests can serve as a starting point for your testing efforts.
