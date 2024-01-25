![](https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png)


# Netflix-GPT

Netflix-GPT is a movie search application that leverages React.js, Redux Toolkit, Firebase, and OpenAI API for an immersive movie search experience. The project is styled using Tailwind CSS to ensure a clean and responsive user interface.

## API Reference

#### Get all items

```http
  GET /api/items/?api_key=12345678901234567890123456789012
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

## Responses

Many API endpoints return the JSON representation of the resources created or edited. However, if an invalid request is submitted, or some other error occurs, api returns a JSON response in the following format:

{
  "message" : string,
  "success" : bool,
  "data"    : string
}




## Installation

Install with npm

```bash
  npm install 
  
```
    
## Deployment

To deploy this project run

```bash
  npm run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`OPENAI_KEY`

`TMDBAPI_KEY`


## Features

- Movie Search: Utilizes the power of OpenAI API and TMDB API for intelligent and context-aware movie searches.
- User Authentication: Firebase authentication ensures secure user authentication.
- User Validation: Implements user validation to ensure a secure and authorized user experience.
- Language Selection: Allows users to change the language of the application for a personalized experience.
- Redux State Management: Employs Redux Toolkit for efficient state management in the application.
- Responsive Design: The application is designed to be responsive using Tailwind CSS, providing a seamless experience across devices.


## Feedback

If you have any feedback, please reach out to me at 
harshv184@gmail.com

## License

[MIT](https://choosealicense.com/licenses/mit/)

