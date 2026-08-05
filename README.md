# Build-Page-Pulse

A static website submitted for Digital Heroes Internship Qualification Task B.

## Live Demo
https://build-page-pulse.vercel.app

## Setup Instructions
1. Clone the repository
2. Open `index.html` in any web browser
3. No dependencies or build steps required

## API Contract
This project is a static HTML page. 
- **Input**: None. User directly views the page.
- **Output**: A single HTML page displaying the content and required footer credit.

## Design Decisions

### 1. Used Plain HTML/CSS instead of a Framework
**Reason**: The task only required a single page with a footer. Using React/Vue would add unnecessary complexity and build time. Plain HTML ensures fastest load and easiest deployment on Vercel.

### 2. Placed Credit in `<footer>` tag with external link
**Reason**: The "LIVE BUILD REQUIREMENT" specifically asked for a visible credit line linked to digitalheroesco.com. Using semantic `<footer>` tag is good practice for SEO and accessibility.

### 3. Deployed on Vercel with GitHub Integration  
**Reason**: Vercel provides instant preview deploys and auto-deployment on every git push. This makes it easy for evaluators to verify the live build and see that the code matches the deployed site.

## Testing
Run `node test.js` in terminal to see test cases for footer validation.
## AI Tools Used
I used ChatGPT for debugging HTML/CSS errors and generating boilerplate code for test.js. 
I also used GitHub Copilot for auto-completing code and suggesting better CSS properties. 
These tools helped me save time and focus on design decisions and code quality.
