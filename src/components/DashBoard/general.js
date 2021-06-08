// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################

var free = [
  "t3a.medium",
  "AMD EPYC 7000 Series",
  "2 / 2.5 GHz / 4",
  "1",
  "False",
  "Python, Tensorflow, R, Scala",
  "N/A",
  "N/A",
];
var plus = [
  "t3a.xlarge",
  "AMD EPYC 7000 Series",
  "4 / 2.5 GHz / 16",
  "3",
  "True",
  "Python, Tensorflow, R, Scala",
  "N/A",
  "N/A",
];
var pro = [
  "ml.g4dn.xlarge",
  "Intel Cascade Lake",
  "4 / 2.5 GHz / 16",
  "4",
  "True",
  "Python, Tensorflow, Tensorflow GPU, R, Scala",
  "Nvidia T4",
  "1 GPU CORE / 16 GB GPU RAM",
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
