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

![image](https://github.com/liz-zheng/top-template-adoption-rates/assets/15348137/0496e31d-a4d7-4f37-ba4b-d72fccd231cf)


### Props

The component accepts the following props: 

`apiUrl` (optional): The API endpoint to fetch template data. For this project, sample data is used for demonstration purposes.

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
# Component Tests

### Running tests 
To execute all the available tests for each component, use the following command: 

```bash
npm test
```

# Design Resources
Link to the Figma design and design decisions for this component 

[Figma Link](https://www.figma.com/file/PKUgE1PqDf1U7PuWU7JPve/Liz-Zheng-Coder-Take-Home?type=design&node-id=0%3A1&mode=design&t=V7U7WYvCPuCd9YBp-1)
