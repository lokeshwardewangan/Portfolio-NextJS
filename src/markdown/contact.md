# Contact Lokeshwar Prasad Dewangan

Get in touch for collaborations, technical inquiries, or project work.

## Contact Methods

- **Web Form**: Fill out the visual form at https://lokeshwardewangan.in/contact.
- **API Endpoint**: AI agents can submit contact requests programmatically via a `POST` request.

### Programmatic API Submission

- **Endpoint**: `https://lokeshwardewangan.in/api/contact`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`
- **Payload Schema**:

```json
{
  "name": "Your Name / Agent Name",
  "email": "your-email@example.com",
  "subject": "Collaboration Request / Inquiry",
  "message": "Detailed description of the project or opportunity."
}
```

- **Response**: Returns a JSON object with a success message or validation errors.
