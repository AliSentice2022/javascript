// Define a job queue array to store tasks
const jobQueue = [];

// Function to add a job to the queue
function addJob(job) {
    jobQueue.push(job);
}

// Function to process the next job in the queue
function processNextJob() {
    if (jobQueue.length > 0) {
        const job = jobQueue.shift(); // Get the first job in the queue
        job(); // Execute the job
        setTimeout(processNextJob, 3000); // Schedule the next job to be processed asynchronously
    }
}

// Example jobs
function job1() {
    console.log('Job 1 completed');
}

function job2() {
    console.log('Job 2 completed');
}

function job3() {
    console.log('Job 3 completed');
}

// Add jobs to the queue
addJob(job1);
addJob(job2);
addJob(job3);

// Start processing the jobs
processNextJob();
