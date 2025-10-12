## Connection between frontend and backend

As we are using **Strapi** for our backend and **Nextjs** for the frontend, integrating them is quite simple. First we need to run the backend folder and follow the following steps:
- 1.Create a collection type as Home Page.
    - Go to the Strapi interface and click on the Content-Type Builder and choose **SINGLE TYPES**.
    - Enter home page as the single type and then add short text as Home Page and long text as description.
    - Save the Single Type and navigate to content manager.
    - In content manager add the necessary title and description for both texts.

- 2. Fetching the data using Strapi API
    - First provide permission to the Strapi to serve those endpoints by navigating to **Settings** -> USERS & PERMISSION PLUGIN -> Roles -> Public.
    - Select Home Page and check the find checkbox.
    - The data can now be accessed at http://localhost:1337/api/home-page . Use Postman to test it.

- 3. Making a Fetch Request.
    - We can make a fetch request by refactoring out app/page.tsx file as:
    ```tsx
    async function getStrapiData(url: string) {
    const baseUrl = "http://localhost:1337";
    try {
        const response = await fetch(baseUrl + url);
        const data = await response.json();
        return data;
    } catch (error) {
    console.error(error);
    }
    }

    export default async function Home() {
    const strapiData = await getStrapiData("/api/home-page");

    const { title, description } = strapiData.data;

    return (
        <main className="container mx-auto py-6">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-xl mt-4">{description}</p>
        </main>
    );
    }
    ```