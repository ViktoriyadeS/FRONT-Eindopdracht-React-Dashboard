import studentData from "./studentData";

const studentNames = studentData.map((student) => student.name);
let uniqueStudentNames = [];
studentNames.forEach((element) => {
  if (!uniqueStudentNames.includes(element)) {
    uniqueStudentNames.push(element);
  }
});

const getAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
const groupBy = (key) => (array) =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

const groupByAssignment = groupBy("assignment");
const groupByName = groupBy("name");
const assignmentGroups = Object.values(groupByAssignment(studentData));
const studentGroups = Object.values(groupByName(studentData));

const showDifficulty = assignmentGroups.map((group) => {
  let array = [];
  group.map((item) => {
    return array.push(item.difficulty);
  });
  return array;
});

const showFun = assignmentGroups.map((group) => {
  let array = [];
  group.map((item) => {
    return array.push(item.fun);
  });
  return array;
});
const avgDifficulty = showDifficulty.map((item) => getAverage(item).toFixed(0));
const avgFun = showFun.map((item) => getAverage(item).toFixed(0));
const avgAssignments = (data) => {
  const filterAssignments = data.reduce((acc, current) => {
    const duplicate = acc.find(
      (item) => item.assignment === current.assignment
    );
    if (!duplicate) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  let avgSetAssignments = [];
  filterAssignments.forEach(
    (item) =>
      (avgSetAssignments = [
        ...avgSetAssignments,
        {
          assignment: item.assignment,
        },
      ])
  );
  return avgSetAssignments;
};

const overviewAssignments = avgAssignments(studentData);

const projects = overviewAssignments.filter(
  (item) =>
    item.assignment.includes("Project") || item.assignment.includes("SCRUM")
);





let newDataSet = (arr1, arr2, arr3) => {
  for (let i = 0; i < arr1.length; i++) {
    arr1[i].difficulty = arr2[i];
    arr1[i].fun = arr3[i];
  }
  return arr1;
};

const assignmentRatingAverage = newDataSet(
  overviewAssignments,
  avgDifficulty,
  avgFun
);

const assignmentsRatingAverageWithLabels = assignmentRatingAverage.map(
  (avg) => ({
    assignment: avg.assignment,
    difficulty: avg.difficulty,
    fun: avg.fun,
    label: `Assignment: ${avg.assignment}, difficulty: ${avg.difficulty}, fun: ${avg.fun}`,
  })
);



export {
  assignmentRatingAverage,
  assignmentsRatingAverageWithLabels,
  overviewAssignments,
  studentGroups,
  uniqueStudentNames,
  projects,
  avgAssignments
};
