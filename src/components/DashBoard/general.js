// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################

var free = [
  "t3a.medium",
  "AMD EPYC 7000 Series",
  "2 / 2.5 GHz / 4.0",
  "1",
  "False",
  "Python, Tensorflow, Tensorflow GPU, R, Scala",
  "Python, Tensorflow, Tensorflow GPU, R, Scala",
];
var categories = [
  "Notebook Server AWS EC2 Equivalent",
  "Notebook Server CPU Class",
  "Notebook Server vCPUs / Clock Speed (GHz) / Total RAM(GB)",
  "Maximum concurrent workloads/kernels allowed",
  "Ability to save Jupyter Notebook",
  "Kernel types able to be launched",
  "Notebook Server GPUs / Clock Speed (GHz) / Total RAM(GB)",
  "Total Notebook Alloted RAM",
  "Total Notebook vCPUs",
  "Ability to Launch Multiple Kernels",
  "Ability to Launch GsPU Kernels",
];
var website = [
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  'Sign contract for "What are conference organizers afraid of?"',
];
var server = [
  "Lines From Great Russian Literature? Or E-mails From My Boss?",
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  'Sign contract for "What are conference organizers afraid of?"',
];

module.exports = {
  // these 3 are used to create the tasks lists in TasksCard - Dashboard view
  website,
  server,
  free,
  categories,
};
