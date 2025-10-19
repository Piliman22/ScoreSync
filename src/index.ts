import { Sonolus } from "@sonolus/express";
import express from "express";
import { getLocalIpv4, getfile } from "./utils.js";
import { install } from "./sonolus.js";
import { packPath } from "@sonolus/free-pack";
import { initializeCharts } from "./charts.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const app = express();
export const sonolus = new Sonolus()

const argv = yargs(hideBin(process.argv))
    .option("port", {
        type: "number",
        description: "サーバーの起動ポート",
        default: 3939,
    })
    .help()
    .parseSync() as { port: number; [key: string]: unknown; };

const ipAddresses = getLocalIpv4();
const port = argv.port;
const chartDirectory = './levels'; 
app.use(sonolus.router)

async function startServer() {
    install()
    getfile()
    
    await initializeCharts(chartDirectory);
    
    sonolus.load(packPath)
    
    app.listen(port, () => {
        console.log('Success')
        // 紛らわしいという報告を受けたため、コメントアウト
        // console.log(`Server is running on http://localhost:${port}`)
        ipAddresses.forEach(ip =>
            console.log(`go to server https://open.sonolus.com/${ip}:${port}/`)
        );
    })
}

startServer().catch(error => {
    console.error('error :', error);
});