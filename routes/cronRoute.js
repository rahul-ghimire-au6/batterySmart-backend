const { Router } = require("express");
const cronRouter = Router();
const CronJob = require('cron').CronJob;
const cronController = require('../controller/cronController.js')

const job = new CronJob('42 23 * * * *', cronController.post.cronJob, null, true, 'India Standard Time');

job.start();

cronRouter.post('/testCron',cronController.post.cronJob);











module.exports = cronRouter