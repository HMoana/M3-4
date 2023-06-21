# Build a pipeline that deploys APIs to the cloud automatically

## Re-design of the motor vehicle insurance purchasing experience for Turners Car Auctions

---

### **Overview**

1. There are 3 RESTful APIs that are required as part of Turners insurance purchasing process. Each member in the team will pick one of the following 3 APIs to build.

2. Build the pipeline using Github Actions where it will automatically deploy any new code pushed to your Github repository to the Google Cloud Platform, where the API will be accessible in the cloud.

3. Try to automate the process of running unit tests as part of the pipeline.

---

### **About our projects**

#### _API 1 - Convert "Model" and "Year" of a car to a suggested "Car Value" By Heni Kimura_

- This API takes 2 parameters as input in JSON format that includes - the "model" (e.g. "Civic") and a numeric "year" of a car (e.g. 2014). And the output is a JSON format with the suggested value for the car, such as "$6,614". Here are the example specifications and business rules of conversion:

- _INPUT_

- { model: "Civic"; year: 2014 }

- _OUTPUT_

- { car_value: 6614 }

- _ERROR OUTPUT_

- { error: "there is an error"}

#### _API 1 BUSINESS RULES_

- Car_value is calculated by adding up the positions of alphabets of the letters in the name, times a hundred, and add the year value. Position of alphabet means the letter in the order of alphabets (e.g. A is the first letter, so it is 1. Z is the last letter, so it is 26). Space and any other signs are ignored. For example, a "Civic" in year 2014 will be worth (3 + 9 + 22 + 9 + 3) \* 100 + 2014 = $6,614. If input values are not valid, return an error.

- Refer to branch p1
- Workflow: feature-branch-p1.yml

#### _API 3 - Convert "Car Value" and "Risk Rating" to a "Quote" By Tergus de Leon Alvez_

- This API takes 2 parameters as input in JSON format that includes - the "car value" (e.g. $6,614) and "risk rating" of the driver between 1 to 5 (e.g. 5 meaning high risk). And the output is a JSON format with the suggested monthly and yearly premium for the insurance policy, such as "$50", "$614,". Here are the example specifications and business rules of conversion:

- _INPUT_

- { car_value: 6614; risk_rating: 5}

- _OUTPUT_

- { monthly_premium: 27.5; yearly_premium: 330}

- _ERROR OUTPUT_

- { error: "there is an error"}

#### _API 3 BUSINESS RULES_

- Yearly premium is calculated by car_value multiplied by driver rating divided by 100. For example, car value of $6,614 and driver rating of 5, the yearly premium will be $6,614 \* 5 / 100 = $330. The monthly premium is the yearly premium divided by 12. So the monthly premium in this example will be $300 /12 = $27.5. If input values are not valid, return an error.

- Refer to branch p3
- Workflow: feature-branch-p3.yml

### **Purpose**

The purpose of this project is to apply an Agile practice, building APIs designed with Test-Driven Development (TDD) principles. Leveraging a pipeline, with automated build, testing, and deployment processes. The API is deployed on the Google Cloud Platform.

### **Built with:**

- [Node.js](https://img.shields.io/badge/Node-20232A?style=for-the-badge&logo-note&logoColor=026e00 "Nodejs")
- [Nodejs-url](https://nodejs.org/en "Nodejsurl")
- [Typescript](https://img.shields.io/badge/Typescript-20232A?style=for-the-badge&logo-typescript&logoColor=3178c6 "Typescript")
- [Typescript-url](https://www.typescriptlang.org/ "Typescripturl")
- [Expressjs](https://img.shields.io/badge/Expressjs-20232A?style=for-the-badge&logo-exporessjs&logoColor=CF649A "Expressjs")
- [Expressjs-url](https://expressjs.com/ "Expressurl")
- [Jestjs](https://img.shields.io/badge/Jestjs-20232A?style=for-the-badge&logo-jestjs&logoColor=f2f2f2 "Jestjs")
- [Jestjs-url](https://jestjs.io/ "Jestjsurl")
- [Github](https://img.shields.io/badge/Github-20232A?style=for-the-badge&logo-github&logoColor=24292f "Github")
- [Github-url](https://github.com/features/actions "Githuburl")
- [GCP](https://img.shields.io/badge/GCP-20232A?style=for-the-badge&logo-gcp&logoColor=e8f0fe "GCP")
- [GCP-url](https://cloud.google.com/ "GCPurl")

---

### **Getting started:**

### _Prerequisites -_

#### _The software needed to install -_

- _Dependencies:_

- Express

  ```sh
  npm i express
  ```

- Dotenv

  ```sh
  npm i dotenv
  ```

- _Dev-Dependencies:_

- Typescript

  ```sh
  npm i -D typescript ts-node-dev @types/node @types/express
  ```

  ```sh
  npm i -D ts-jest @types/jest @types/supertest
  ```

  ```sh
  npx ts-jest config:init
  ```

- Typescript build compiler

  ```sh
  tsc --init
  ```

- Jest

  ```sh
  npm i -D jest
  ```

- Jest Supertest

  ```sh
  npm i --save-dev supertest
  ```

---

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/HMoana/M3-4.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

---

### **Features:**

- Two RESTful APIs TTD
- Pipeline CI/CD
- Google Cloud Deployment

---

### **Future improvements:**

- More testing
- Improve refactoring
- Add coverage
- Improve on code smells after peer reviews
- Incorporate strict code analysis

---

### **Contributors & our Contacts:**

- Tergus de Leon Alvez - <tergusdla@missionreadyhq.com>
- Heni Kimura - <henik@missionreadyhq.com>

### **Contributor Reviews:**

- Jonathan Padoa - <jonathanp@missionreadyhq.com>
- Wilhelmus Duncker - <wilhelmusd@missionreadyhq.com>

### **Project Link:**

[Github repository](https://github.com/HMoana/M3-4.git "Github repository")

### **License:**

Distributed under the MIT License. See LICENSE.txt for more information.

### **Acknowledgments:**

- [Fireship](https://youtu.be/Jv2uxzhPFl4 "Fireship")
- [Digitalonus](https://www.digitalonus.com/getting-started-with-api-test-automation-using-javascript/ "Digitalonus")
- [dcode](https://youtu.be/TcvOgwQPsSo "dcode")
- [codinghorror](https://blog.codinghorror.com/code-smells/ "codinghorror")
- [Github Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews "Github Docs")
- [AWS DevOps](https://aws.amazon.com/devops/what-is-devops/ "AWS DevOps")
- [Github Actions](https://youtu.be/Pwq7L9C9YyE "Github Actions")
- [Google Cloud Tech](https://youtu.be/DMCi7WWTtX0 "Google Cloud Tech")
- [GrammaTech Inc](https://youtu.be/Q2aL1cIQcdQ "GrammaTech Inc")
- [Snyk.io](https://youtu.be/9RHM4ybvyT8 "Snyk.io")
