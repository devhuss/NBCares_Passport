import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Print from "expo-print";
import * as MailComposer from "expo-mail-composer";
import { PageContext } from "../context";
import { set } from "react-native-reanimated";

export default Reports = () => {
  const TaskData = (item) => {
    let completed = item.tasks
      .filter((task) => task.type == "system")
      .filter((task) => task.complete).length;
    let length = lists[0].tasks.filter((task) => task.type == "system").length;
    return [completed, length];
  };

  const { fire, lists, vitals, pointss } = React.useContext(PageContext);

  const [vitalsigns, setVitalsigns] = vitals;
  const [points, setPoints] = pointss;

  const currentDate = new Date().toDateString()

  const userEmail = fire.auth.currentUser.email

  console.log(userEmail)

  const vLength = vitalsigns.length;
  const intV = vitalsigns[0];
  const currV = vitalsigns[vLength > 1 ? vLength - 1 : 0];

  // Saved tasks data from vital signs assessment
  const [eduTasks, setEduTasks] = useState([]);
  const [employTasks, setEmployTasks] = useState([]);
  const [finTasks, setFinTasks] = useState([]);
  const [healthTasks, setHealthTasks] = useState([]);
  const [housingTasks, setHousingTasks] = useState([]);

  const [intIncome, setIntIncome] = useState(0);
  const [intEmergency, setIntEmergency] = useState(0);
  const [intCredit, setIntCredit] = useState(0);

  const [intScore, setIntScore] = useState(0);
  const [intPoints, setIntPoints] = useState(0);

  // Current tasks data
  const [education, setEducation] = useState([]);
  const [employment, setEmployment] = useState([]);
  const [financial, setFinancial] = useState([]);
  const [healthcare, setHealthcare] = useState([]);
  const [housing, setHousing] = useState([]);

  useEffect(() => {
    setEduTasks(vLength > 0 ? intV.eduTasks : TaskData(lists[0]));
    setEmployTasks(vLength > 0 ? intV.employTasks : TaskData(lists[1]));
    setFinTasks(vLength > 0 ? intV.finTasks : TaskData(lists[2]));
    setHealthTasks(vLength > 0 ? intV.healthTasks : TaskData(lists[3]));
    setHousingTasks(vLength > 0 ? intV.housingTasks : TaskData(lists[4]));

    setIntIncome(vLength > 0 ? intV.income : 0);
    setIntEmergency(vLength > 0 ? intV.emergency : 0);
    setIntCredit(vLength > 0 ? intV.creditScore : 0);
    setIntScore(vLength > 0 ? intV.total : 0);
    setIntPoints(vLength > 0 ? intV.points : points);
  }, [vitals]);

  const currIncome = vLength > 1 ? currV.income : intIncome;
  const currEmergency = vLength > 1 ? currV.emergency : intEmergency;
  const currCredit = vLength > 1 ? currV.creditScore : intCredit;
  const currScore = vLength > 1 ? currV.total : intScore;
  const currPoints = vLength > 1 ? currV.points : points;

  // Delta
  const deltaIncome = currIncome - intIncome;
  const deltaEmergency = currEmergency - intEmergency;
  const deltaCredit = currCredit - intCredit;
  // Likert Score
  const deltaScore = currScore - intScore;

  // SS Points
  const deltaPoints = currPoints - intPoints;
  console.log(deltaIncome);

  useEffect(() => {
    setEducation(TaskData(lists[0]));
    setEmployment(TaskData(lists[1]));
    setFinancial(TaskData(lists[2]));
    setHealthcare(TaskData(lists[3]));
    setHousing(TaskData(lists[4]));
  }, [lists]);

  //console.log(education);

  async function execute() {
    const html = `

    <!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />

    <title>A Basic HTML5 Template</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css"
    />

    <style>
      body {
        display: inline;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        font-family: Arial;
      }

      .header {
        padding: 0px;
        position: absolute;
        width: 100%;
        color: black;
        font-size: 30px;
      }

      .content {
        margin: 145px auto 0 auto;
      }

      #col-chart {
        display: grid;
        flex-direction: row-reverse;
        align-items: center;
        gap: 20px;
        width: 375px;
        margin: 0 auto 0 auto;
      }
      #col-chart .column {
        height: 200px;
        max-width: 700px;
      }
      #col-chart .legend {
        justify-content: center;
        align-items: center;
      }

      td .data {
        font-size: 10px;
      }

      .label {
        padding-top: 30px !important;
        font-size: 12px;
      }

      caption {
        font-weight: bold;
        font-size: 20px;
      }

      .tg {
        border-collapse: collapse;
        border-spacing: 0;
        margin: 0 auto;
      }
      .tg td {
        border-color: black;
        border-style: solid;
        border-width: 1px;
        font-family: Arial, sans-serif;
        font-size: 14px;
        overflow: hidden;
        padding: 10px 5px;
        word-break: normal;
      }
      .tg th {
        border-color: black;
        border-style: solid;
        border-width: 1px;
        font-family: Arial, sans-serif;
        font-size: 14px;
        font-weight: normal;
        overflow: hidden;
        padding: 10px 5px;
        word-break: normal;
      }
      .tg .tg-lqy6 {
        text-align: right;
        vertical-align: top;
      }
      .tg .tg-amwm {
        font-weight: bold;
        text-align: center;
        vertical-align: top;
      }
      .tg .tg-l2oz {
        font-weight: bold;
        text-align: right;
        vertical-align: top;
      }
      .tg .tg-6ic8 {
        border-color: inherit;
        font-weight: bold;
        text-align: right;
        vertical-align: top;
      }
      .comments {
        margin: 5px 0 0 0;
        border: 1px solid grey;
        height: 300px;
      }
    </style>
  </head>

  <body>
    <div class="header">
      <h3 style="margin-bottom: 2px">
        User Report: <span style="font-weight: lighter">${userEmail}</span>
      </h3>
      <hr style="border-color: black; margin: 0" />
      <p style="margin: 0; font-size: 15px">Date: ${currentDate}</p>
    </div>

    <div class="content">
      <div style="display: flex">
        <div id="col-chart">
          <table
            class="charts-css column multiple show-heading show-labels data-spacing-5 datasets-spacing-1 show-primary-axis show-6-secondary-axes show-data-axes"
            style="
              --color-1: rgba(249, 180, 45, 0.8);
              --color-2: rgba(230, 30, 30, 0.8);
            "
          >
            <caption>
              Tasks Completion
            </caption>
            <tbody>
              <tr>
                <th scope="row" class="label">Education</th>
                <td style="--size: calc(${eduTasks[0]} / ${eduTasks[1]})">
                  <span class="data"> ${eduTasks[0]} </span>
                </td>
                <td style="--size: calc(${education[0]} / ${education[1]})">
                  <span class="data"> ${education[0]} </span>
                </td>
              </tr>
              <tr>
                <th scope="row" class="label">Employment</th>
                <td style="--size: calc(${employTasks[0]} / ${employTasks[1]})">
                  <span class="data"> ${employTasks[0]} </span>
                </td>
                <td style="--size: calc(${employment[0]} / ${employment[1]})">
                  <span class="data"> ${employment[0]} </span>
                </td>
              </tr>
              <tr>
                <th scope="row" class="label">Financial Lit</th>
                <td style="--size: calc(${finTasks[0]} / ${finTasks[1]})">
                  <span class="data"> ${finTasks[0]} </span>
                </td>
                <td style="--size: calc(${financial[0]} / ${financial[1]})">
                  <span class="data"> ${financial[0]} </span>
                </td>
              </tr>
              <tr>
                <th scope="row" class="label">Healthcare</th>
                <td style="--size: calc(${healthTasks[0]} / ${healthTasks[1]})">
                  <span class="data"> ${healthTasks[0]} </span>
                </td>
                <td style="--size: calc(${healthcare[0]} / ${healthcare[1]})">
                  <span class="data"> ${healthcare[0]} </span>
                </td>
              </tr>
              <tr>
                <th scope="row" class="label">Housing</th>
                <td style="--size: calc(${housingTasks[0]} / ${housingTasks[1]})">
                  <span class="data"> ${housingTasks[0]} </span>
                </td>
                <td style="--size: calc(${housing[0]} / ${housing[1]})">
                  <span class="data"> ${housing[0]} </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="col-chart" style="margin-left: 10px">
          <table
            class="charts-css column multiple show-heading show-labels data-spacing-5 datasets-spacing-1 show-primary-axis show-6-secondary-axes show-data-axes"
            style="
              --color-1: rgba(249, 180, 45, 0.8);
              --color-2: rgba(230, 30, 30, 0.8);
            "
          >
            <caption>
              Vital Signs
            </caption>
            <tbody>
              <tr>
                <th scope="row" class="label">Monthly Income</th>
                <td style="--size: calc(${intIncome} / 20000)">
                  <span class="data"> ${intIncome} </span>
                </td>
                <td style="--size: calc(${currIncome} / 20000)">
                  <span class="data"> ${currIncome} </span>
                </td>
              </tr>
              <tr>
                <th scope="row" class="label">Emergency Fund</th>
                <td style="--size: calc(${intEmergency} / 5000)">
                  <span class="data"> ${intEmergency} </span>
                </td>
                <td style="--size: calc(${currEmergency} / 5000)">
                  <span class="data"> ${currEmergency} </span>
                </td>
              </tr>
              <tr>
                <th scope="row" class="label">Credit Score</th>
                <td style="--size: calc(${intCredit} / 850)">
                  <span class="data"> ${intCredit} </span>
                </td>
                <td style="--size: calc(${currCredit} / 850)">
                  <span class="data"> ${currCredit} </span>
                </td>
              </tr>

              <tr>
                <th scope="row" class="label">Self Assessment</th>
                <td style="--size: calc(${intScore} / 45)">
                  <span class="data"> ${intScore} </span>
                </td>
                <td style="--size: calc(${currScore} / 45)">
                  <span class="data"> ${currScore} </span>
                </td>
              </tr>
              <tr>
                <th scope="row" class="label">SS Score</th>
                <td style="--size: calc(${intPoints} / 6000)">
                  <span class="data"> ${intPoints} </span>
                </td>
                <td style="--size: calc(${currPoints} / 6000)">
                  <span class="data"> ${currPoints} </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ul
        class="charts-css legend legend-inline legend-square"
        style="
          justify-content: center;
          padding: 0;
          margin-top: 25px;
          font-size: 13px;
        "
      >
        <li style="--color-1: rgba(249, 180, 45, 0.8)">Initial</li>
        <li style="--color-2: rgba(230, 30, 30, 0.8)">Current</li>
      </ul>

      <div style="display: flex; justify-content: center; margin-top: 20px">
        <table class="tg" style="undefined; table-layout: fixed; width: 300px;">
          <colgroup>
            <col style="width: 160px" />
            <col style="width: 65px" />
            <col style="width: 65px" />
          </colgroup>
          <thead>
            <tr>
              <th class="tg-amwm">Tasks</th>
              <th class="tg-l2oz">Initial</th>
              <th class="tg-l2oz">Current</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-amwm">Education</td>
              <td class="tg-lqy6">${eduTasks[0]} / ${eduTasks[1]}</td>
              <td class="tg-lqy6">${education[0]}/${education[1]}</td>
            </tr>
            <tr>
              <td class="tg-amwm">Employment</td>
              <td class="tg-lqy6">${employTasks[0]} / ${employTasks[1]}</td>
              <td class="tg-lqy6">${employment[0]}/${employment[1]}</td>
            </tr>
            <tr>
              <td class="tg-amwm">Financial Literacy</td>
              <td class="tg-lqy6">${finTasks[0]} / ${finTasks[1]}</td>
              <td class="tg-lqy6">${financial[0]}/${financial[1]}</td>
            </tr>
            <tr>
              <td class="tg-amwm">Healthcare</td>
              <td class="tg-lqy6">${healthTasks[0]} / ${healthTasks[1]}</td>
              <td class="tg-lqy6">${healthcare[0]}/${healthcare[1]}</td>
            </tr>
            <tr>
              <td class="tg-amwm">Housing</td>
              <td class="tg-lqy6">${housingTasks[0]} / ${housingTasks[1]}</td>
              <td class="tg-lqy6">${housing[0]}/${housing[1]}</td>
            </tr>
          </tbody>
        </table>
        <table
          class="tg"
          style="undefined; table-layout: fixed; width: 375px; margin-left: 10px"
        >
          <colgroup>
            <col style="width: 160px" />
            <col style="width: 65px" />
            <col style="width: 65px" />
            <col style="width: 75px" />
          </colgroup>
          <thead>
            <tr>
              <th class="tg-amwm">Vital Signs</th>
              <th class="tg-l2oz">Initial</th>
              <th class="tg-l2oz">Current</th>
              <th class="tg-6ic8">Delta (+/-)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-amwm">Monthly Income</td>
              <td class="tg-lqy6">$${intIncome}</td>
              <td class="tg-lqy6">$${currIncome}</td>
              <td class="tg-lqy6">$${deltaIncome}</td>
            </tr>
            <tr>
              <td class="tg-amwm">Emergency Fund</td>
              <td class="tg-lqy6">$${intEmergency}</td>
              <td class="tg-lqy6">$${currEmergency}</td>
              <td class="tg-lqy6">$${deltaEmergency}</td>
            </tr>
            <tr>
              <td class="tg-amwm">Credit Score</td>
              <td class="tg-lqy6">${intCredit}</td>
              <td class="tg-lqy6">${currCredit}</td>
              <td class="tg-lqy6">${deltaCredit}</td>
            </tr>
            <tr>
              <td class="tg-amwm">Self-Assessment</td>
              <td class="tg-lqy6">${intScore}</td>
              <td class="tg-lqy6">${currScore}</td>
              <td class="tg-lqy6">${deltaScore}</td>
            </tr>
            <tr>
              <td class="tg-amwm">Self-Sufficiency Score</td>
              <td class="tg-lqy6">${intPoints}</td>
              <td class="tg-lqy6">${currPoints}</td>
              <td class="tg-lqy6">${deltaPoints}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p style="margin: 15px 0 0 0">Comments:</p>
        <div class="comments"></div>
      </div>
    </div>
  </body>
</html>




    
`;
    const { uri } = await Print.printToFileAsync({ html });

    MailComposer.composeAsync({
      subject: "User Report",
      recipients: ["khouse@nbhact.org"],
      body: "Some text to go with the report email",
      attachments: [uri],
    });
  }
  return (
    <View style="{styles.container}">
      <Button title="Print and Share" onPress={() => execute()} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
