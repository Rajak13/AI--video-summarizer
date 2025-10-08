## Setting Up Frontend

- The following steps are required to set up the frontend

**1.Create a new directory**
```bash
mkdir summarize
```
**2.Navigate inside the project and create the next app**
```bash
cd summarize
npx create-next-app@latest
```

**3.Run the app**
```bash
npm run dev/yarn dev
```

## Setting up Shadcn UI for styling
- Shadcn UI is excellent because it allows you to install your UI components directly into your codebase and modify/extend them accordingly.

**1.Run the shadcn ui init command**
```bash
  npx shadcn@latest init
```

**2.Set up the first component:button.**
```bash
npx shadcn@latest add button
```

**3.Import the button component in the page.tsx file.**
```bash
import {Button} from "@/components/ui/button";

export default function Home(){
    return(
        <main className="container mx-auto py-6">
        <Button> A Button </Button>
        </main>
    )
}
```
