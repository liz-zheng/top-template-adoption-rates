# Getting Started

### Installation

Git clone the repo and navigate into it

```bash
git clone git@github.com:liz-zheng/top-template-adoption-rates.git
```

```bash
cd top-template-adoption-rates
```

Install relevant packages and libraries

```bash
npm install top-template-adoption-rates
```
### Running the Component

Start the component on local environment
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Component Documentation

### Overview
The TopAdoptionRates component fetches template data through an API call and displays the top adoption rates of different templates, with the highest rate shown as a percentage using a circular progress indicator. It also shows additional template data in a tabular format. This component lets users quickly get insight into which templates are highly adopted after creation. 

### Props

The component accepts the following props: 

`apiUrl` (optional): The API endpoint to fetch template data. If not provided, the component will use sample data for demonstration purposes.

### Usage
Import the component in your project and use it like this:

```jsx
import React from 'react';
import TopAdoptionRates from './TopAdoptionRates';

const App: React.FC = () => {
  const apiUrl = 'https://api.example.com/template-data';

  return (
    <div>
      <h1>My App</h1>
      <TopAdoptionRates apiUrl={apiUrl} />
    </div>
  );
};

export default App;
```



