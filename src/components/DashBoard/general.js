// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################

var free = [
  "t3a.medium",
  "AMD EPYC 7000 Series",
  "2 / 2.5 GHz / 4.0",
  "1",
  "False",
  "Python, Tensorflow, R, Scala",
  "n/a",
  "n/a",
];
var plus = [
  "t3a.medium",
  "AMD EPYC 7000 Series",
  "2 / 2.5 GHz / 4.0",
  "1",
  "False",
  "Python, Tensorflow, R, Scala",
  "n/a",
  "n/a",
];
var pro = [
  "t3a.medium",
  "AMD EPYC 7000 Series",
  "2 / 2.5 GHz / 4.0",
  "1",
  "False",
  "Python, Tensorflow, Tensorflow GPU, R, Scala",
  "n/a",
  "n/a",
];
var categories = [
  "Notebook Server AWS EC2 Equivalent",
  "Notebook Server CPU Class",
  "Notebook Server vCPUs / Clock Speed (GHz) / Total RAM(GB)",
  "Maximum concurrent workloads/kernels allowed",
  "Ability to save Jupyter Notebook",
  "Kernel types able to be launched",
  "Notebook Server GPU Class",
  "Notebook Server GPUs (Quantity) / RAM per GPU",
];

module.exports = {
  // these 3 are used to create the tasks lists in TasksCard - Dashboard view
  plus,
  pro,
  free,
  categories,
};
