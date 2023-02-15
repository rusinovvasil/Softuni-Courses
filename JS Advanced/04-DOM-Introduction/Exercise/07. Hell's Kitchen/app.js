function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  const input = document.querySelector("#inputs>textArea");
  const bestResturantsP = document.querySelector("#bestRestaurant>p");
  const workersP = document.querySelector("#outputs #workers p");

  function onClick() {
    let arr = JSON.parse(input.value);
    let restaurants = {};

    arr.forEach((line) => {
      const tokens = line.split(" - ");
      const name = tokens[0];
      const workersArray = tokens[1].split(", ");
      let workers = [];

      for (const worker of workersArray) {
        let workerTokes = worker.split(" ");
        const salary = Number(workerTokes[1]);
        workers.push({ name: workerTokes[0], salary });
      }

      if (restaurants[name]) {
        workers = workers.concat(restaurants[name].workers);
      }

      workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
      let bestSalary = workers[0].salary;
      let averageSalry =
        workers.reduce((sum, worker) => sum + worker.salary, 0) /
        workers.length;

      restaurants[name] = {
        workers,
        averageSalry,
        bestSalary,
      };
    });

    let bestResuarantSalary = 0;
    let best = undefined;
    for (const name in restaurants) {
      if (restaurants[name].averageSalry > bestResuarantSalary) {
        bestResuarantSalary = restaurants[name].averageSalry;
        best = { name, ...restaurants[name] };
      }
    }

    bestResturantsP.textContent = `Name: ${
      best.name
    } Average Salary: ${best.averageSalry.toFixed(
      2
    )} Best Salary: ${best.bestSalary.toFixed(2)}`;

    let workersResult = [];
    best.workers.forEach((worker) => {
      workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
    });

    workersP.innerText = workersResult.join(" ");
  }
}
