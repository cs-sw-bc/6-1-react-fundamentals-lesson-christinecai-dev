# 6.1-React-Fundamentals-Lesson
## 🔁 Recap Discussion Questions (Servers & APIs)

### Client–Server Model

1. What is the role of the client in a web application?
2. What is the role of the server?
3. What happens when you type a URL in the browser and press Enter?
4. What is an HTTP request?
5. What is an HTTP response?
6. What does an API actually do?
7. Is an API the same as a server? Why or why not?

### Data Handling in Current Projects

1. In your previous projects, where was your data stored?
2. What kind of data structures were you using? (arrays, objects, variables)
3. What happens to that data when the server restarts?
4. What happens to that data if the application crashes?
5. Is that type of storage permanent or temporary?

### Real-World Thinking

1. Could a social media app function if data disappeared every time the server restarted?
2. Could an e-commerce app work without remembering past orders?
3. Could a banking system rely only on in-memory variables?

### Transition to Databases

1. If memory is temporary, what do real applications use?
2. What does "persistent storage" mean? data that stays saved even after a program stops running or a device is turned offintro-to-react
3. Why do we need something beyond arrays and objects?
4. Where do you think the data physically lives in real-world systems?
5. If we add a third component to Client → Server, what might it be?

---

## Full-Stack Development – Feature-by-Feature Approach

Full-stack development can feel overwhelming because you are responsible for both the front end and the back end.

When working alone (or without strict design constraints), you have complete freedom in how you structure the project. That freedom can be exciting — but also intimidating.

One practical approach is to build **one feature at a time**:

```
Feature 1
→ Front-end
→ Back-end

Feature 2
→ Front-end
→ Back-end

Feature 3
→ Front-end
→ Back-end
```

Before building features, you first make sure your project setup works (frontend and backend running properly).

Then:

1. Build a single feature on the front end.
2. After that works visually and functionally, build the corresponding API endpoint and server logic.
3. Repeat for the next feature.

Starting with the front end encourages thinking from the user's perspective:

- What does the user see?
- What do they click?
- What experience are they having?

Once that is clear, the back end can be structured to support it.

This is **not the only way** to build full-stack applications. Some teams prefer to design the entire backend architecture first. Others may prototype everything visually first. The approach can change depending on:

- Team size
- Project complexity
- Timeline
- Company standards

The key idea is to reduce overwhelm by breaking the system into small, complete pieces and connecting them step by step.

---

## What is React?

React is a JavaScript library for building user interfaces.

It helps us build the front end of web applications — the part users see and interact with.

One of the most powerful beginner-friendly ways to understand React is this:

> React lets you create your own custom HTML tags.

---

## What Does That Mean?

In regular HTML, you only have built-in tags such as:

- `<div>`
- `<p>`
- `<button>`
- `<form>`

You cannot invent meaningful tags like:

- `<Navbar>`
- `<TodoItem>`
- `<UserCard>`

HTML does not understand them.

With React, you can create these as reusable components.

Once defined, you can use them anywhere in your application.

This keeps code organized and readable.

---

## Why Is This Powerful?

Instead of repeating the same HTML structure many times, you define it once as a component and reuse it.

This leads to:

- Cleaner code
- Better organization
- Easier maintenance
- Better scalability for large applications

---

## Why Not Just Use Plain JavaScript?

You can build websites using HTML, CSS, and JavaScript alone.

However, modern applications are:

- Dynamic
- Data-driven
- Frequently updating

Without a structured system, managing UI updates becomes complex and messy.

React simplifies this by:

- Organizing code into components
- Updating the UI automatically when data changes
- Encouraging reusable patterns

---

## Does React Provide Ready-Made Components?

React itself does not provide pre-designed buttons, modals, or layouts.

React provides the system for building components.

If you want pre-built UI components, you can use libraries built on top of React such as:

- Material UI
- Chakra UI
- Ant Design

React is the engine.
UI libraries are design systems built using that engine.

---

## Big Picture

React helps developers:

- Create reusable UI components
- Structure large front-end applications
- Build dynamic interfaces more cleanly
- Follow modern industry development practices

---

## What is Vite?

Vite is a modern front-end build tool.

It helps us create, run, and prepare React applications so they work properly in the browser.

### Why Do We Need Vite?

React applications use:

- JSX
- Modern JavaScript (import/export, arrow functions, etc.)
- Multiple interconnected files

Browsers do not understand JSX directly.

Vite processes and transforms our React code into standard JavaScript that the browser can execute.

### What Does Vite Do?

Vite:

- Transforms JSX into regular JavaScript
- Handles file imports and modules
- Starts a development server
- Reloads the browser automatically when you save changes
- Builds an optimized version of your app for production

### Simple Way to Think About It

React helps us write modern UI code.
Vite prepares that code so the browser can run it.

React builds the interface.
Vite makes the project work.

---

## Section 3: Creating a Simple React Project (Vite + React)

In this section, we will create and run our first React application using Vite.

---

### Step 1: Create a Vite + React App

Run the following command in your terminal:

```bash
npm create vite@latest
```

You will be prompted to choose:

- Project name (example: my-react-app)
- Framework → React
- Variant → JavaScript

---

### Step 2: Move Into the Project Folder

```bash
cd my-react-app
```

---

### Step 3: Install Dependencies

```bash
npm install
```

This installs all required project packages.

---

### Step 4: Start the Development Server

```bash
npm run dev
```

You will see a local development URL (for example):

[http://localhost:5173/](http://localhost:5173/)

Open this URL in your browser.

Your React application is now running.

---

### Step 5: Clean Up the Template

1. Open the project folder in your code editor.
2. Navigate to the `src` folder.
3. Open `App.jsx`.
4. Remove the default template content.
5. Replace it with a simple example:

```jsx
function App() {
  return <h1>Hello React</h1>;
}

export default App;
```

Save the file and observe the browser automatically refresh.

---

### What You Should Understand From This Section

- How to create a React project using Vite
- How to install project dependencies
- How to run a development server
- How automatic browser refresh works
- Where the main React component (`App.jsx`) is located

---

## JSX + Using and Nesting Components

### What is JSX?

JSX is a syntax that lets us write **HTML-like tags inside JavaScript**.

In React, the part inside a `return ( ... )` that looks like HTML is JSX.

Example:

```jsx
function App() {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}
```

- `function App()` is JavaScript
- Everything inside `return ( ... )` is JSX

---

### Why Use JSX?

JSX makes React code easier to read and write.

Instead of building UI using long JavaScript function calls, JSX lets us write UI using tags that look like HTML.

---

### Components = Custom Tags

A React component is usually a JavaScript function that returns JSX.

Example component:

```jsx
export default function UserProfile() {
  return <h2>Welcome to Your Profile</h2>;
}
```

Once a component exists, we can use it like a custom tag:

```jsx
<UserProfile />
```

Important rule:

- Component names must start with a **capital letter**.

---

### How to Use a Component (Invoke It)

To use a component in another file:

#### 1) Import it

```jsx
import UserProfile from "./UserProfile";
```

#### 2) Use it as a tag

```jsx
function App() {
  return (
    <div>
      <UserProfile />
    </div>
  );
}
```

---

### Passing Data into Components (Props)

You can pass information into a component using attributes.

```jsx
<UserProfileCard name="John Doe" role="Student" avatar="https://example.com/avatar.jpg" />
```

Inside the component, React receives these values as a single object called `props`.

Two common ways to access props:

#### Option A: Use `props`

```jsx
export default function UserProfileCard(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.role}</p>
    </div>
  );
}
```

#### Option B: Destructure props (common)

```jsx
export default function UserProfileCard({ name, role, avatar }) {
  return (
    <div>
      <p>{name}</p>
      <p>{role}</p>
    </div>
  );
}
```

---

### Nesting Components

Nesting means placing one component inside another.

Example structure:

```jsx
function ClassPage() {
  return (
    <div>
      <UserProfile />
      <ClassList />
    </div>
  );
}
```

This creates a component tree:

```
ClassPage
  → UserProfile
  → ClassList
```

---

### Nesting the Same Component Multiple Times

A common React pattern is to reuse a component by rendering it multiple times.

```jsx
export default function ClassList() {
  return (
    <div>
      <h3>Class Members</h3>
      <UserProfileCard name="Alice" role="Student" avatar="alice.jpg" />
      <UserProfileCard name="Bob" role="Teacher" avatar="bob.jpg" />
      <UserProfileCard name="Charlie" role="Student" avatar="charlie.jpg" />
    </div>
  );
}
```

---

### Complete UserProfileCard Component

Here's a complete example of the UserProfileCard component with styling:

```jsx
export default function UserProfileCard({ name, role, avatar }) {
  return (
    <div style={{ border: "1px solid gray", padding: "12px", margin: "8px", borderRadius: "6px", width: "200px" }}>
      <img
        src={avatar}
        alt={name}
        style={{ width: "100%", borderRadius: "50%", marginBottom: "8px" }}
      />
      <h3 style={{ margin: "4px 0" }}>{name}</h3>
      <p style={{ margin: 0, color: "gray" }}>{role}</p>
    </div>
  );
}
```

---

## JSX Rules to Remember

- JSX must return **one parent element**
- Use `{}` to insert JavaScript values inside JSX
- `style` in JSX uses an object: `style={{ color: "red" }}`
- Use `className` instead of `class`

---

## Quick Mental Model

- JSX = HTML-like syntax inside JavaScript
- Component = a function that returns JSX
- Using a component = writing it like a custom tag
- Nesting components = placing tags inside other tags
