import {schedule} from "node-cron"
import tasks from "./tasks/index.js"

tasks.forEach(task => schedule(...task))