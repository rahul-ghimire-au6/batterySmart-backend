const { Router } = require("express");
const cronRouter = Router();
const CronJob = require('cron').CronJob;
const cronController = require('../controller/cronController.js')

const job = new CronJob('41 00 * * *', cronController.post.cronJob, null, true, 'Asia/Kolkata');

job.start();

cronRouter.post('/testCron',cronController.post.cronJob);











module.exports = cronRouter