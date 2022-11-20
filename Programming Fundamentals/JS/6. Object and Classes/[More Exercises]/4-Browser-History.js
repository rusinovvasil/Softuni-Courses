function browserHistory(object, arrCommands) {
    let browserLog = object;
    for (let command of arrCommands) {
 
        let action = command.split(' ').shift();
        let site = command.split(' ').slice(1).join(' ');
        //IF Close
        if (action === 'Close') {
            for (let opened of browserLog["Open Tabs"]) {
                if (opened === site) {
                    let index = browserLog["Open Tabs"].indexOf(opened);
                    browserLog["Open Tabs"].splice(index, 1);
                    browserLog["Recently Closed"].push(opened)
                    browserLog["Browser Logs"].push(command);
                    break;
                }
            }
        } // IF Open
        else if (action === 'Open') {
            browserLog["Open Tabs"].push(site);
            browserLog["Browser Logs"].push(command);
        }
        // IF Clear cash
        else if (action === 'Clear') {
            browserLog["Open Tabs"] = [];
            browserLog["Recently Closed"] = [];
            browserLog["Browser Logs"] = [];
 
        }
    }
    console.log(browserLog["Browser Name"]);
    console.log(`Open Tabs: ${browserLog["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${browserLog["Recently Closed"].join(', ')}`);
    console.log(`Browser Logs: ${browserLog["Browser Logs"].join(', ')}`);
}

// Don't copy the calling of the function in judge, just the code above

browserHistory({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
);

browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);