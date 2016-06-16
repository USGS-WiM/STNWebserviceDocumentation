var configuration = {}
configuration.baseurls =
{
    'services': 'https://stn.wim.usgs.gov/STNServices',
    'application': 'https://stn.wim.usgs.gov/STNWeb'    
}

configuration.resources =
    [
        //#region agency
        {            
            "name": "Agency",
            "description": "The agency resource represents an agency that a member or source is an employee for.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/agencies{0}",
                        "description": "This service returns a list of agencies.",
                        "id": "All Agencies",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"                        
                    },
                    {
                        "uri": "/agencies/{1}{0}",
                        "description": "This service returns an agency.",
                        "id": "An Agency",
                        "parameters": [
                           { "name": "agencyId", "type": "number", "description": "Id of agency requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                         "uri": "/members/{1}/agencies{0}",
                         "description": "This service returns a member's agency.",
                         "id": "Member Agency",
                         "parameters": [
                            { "name": "memberId", "type": "number", "description": "Id of member requested", "value": "" }
                         ],
                         "availableMedia": [".xml", ".json"],
                         "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sources/{1}/agencies{0}",
                        "description": "This service returns a source's agency.",
                        "id": "Source Agency",
                        "parameters": [
                           { "name": "sourceId", "type": "number", "description": "Id of member requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }
            ]
        },
        //#endregion
        //#region approval
        {
            "name": "Approval",
            "description": "The approval resource represents an approval that is applied to a hwm or data file once reviewed and deemed complete.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/approvals{0}",
                        "description": "This service returns a list of approvals.",
                        "id": "All Approvals",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/approvals/{1}{0}",
                        "description": "This service returns an approval by it's ID.",
                        "id": "An Approval",
                        "parameters": [
                           { "name": "approvalId", "type": "number", "description": "Id of approval requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/hwms/{1}/approval{0}",
                        "description": "This service returns a hwm approval by a hwm ID.",
                        "id": "HWM Approval",
                        "parameters": [
                           { "name": "hwmId", "type": "number", "description": "Id of hwm", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/datafiles/{1}/approval{0}",
                        "description": "This service returns a data file approval by a data file ID.",
                        "id": "Data File Approval",
                        "parameters": [
                           { "name": "datafileId", "type": "number", "description": "Id of data file", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region contact
        {
            "name": "Contact",
            "description": "The contact resource represents an contact that can be added to a report.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/contacts{0}",
                        "description": "This service returns a list of contacts. Authentication is required.",
                        "id": "All Contacts",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/contacts/{1}{0}",
                        "description": "This service returns a contact by it's ID. Authentication is required.",
                        "id": "A Contact",
                        "parameters": [
                           { "name": "contactId", "type": "number", "description": "Id of contact requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/contacts{0}?reportmetric={1}&contacttype{2}",
                        "description": "This service returns a contact for a report and by a contact type. Authentication is required.",
                        "id": "Report Contact By Contact Type",
                        "parameters": [
                           { "name": "reportId", "type": "number", "description": "Id of the report", "value": "" },
                           { "name": "contactTypeId", "type": "number", "description": "Id of the contact type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/contacts{0}?reportmetric={1}",
                        "description": "This service returns a list of contacts for a report. Authentication is required.",
                        "id": "Report Contacts",
                        "parameters": [
                           { "name": "reportId", "type": "number", "description": "Id of report", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
               ]
           }]
        },
        //#endregion
        //#region contact type
        {
            "name": "Contact Type",
            "description": "The contact type resource represents a contact type that can be added to a contact.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/contacttypes{0}",
                        "description": "This service returns a list of contact types.",
                        "id": "All Contacts",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/contacttypes/{1}{0}",
                        "description": "This service returns a contact type by it's ID.",
                        "id": "A Contact Type",
                        "parameters": [
                           { "name": "contactTypeId", "type": "number", "description": "Id of contact type requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/contacts/{1}/contacttypes{0}",
                        "description": "This service returns a contact type for a contact.",
                        "id": "Contact's Contact Type",
                        "parameters": [
                           { "name": "contactId", "type": "number", "description": "Id of the contact", "value": "" }                           
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region county
        {
            "name": "Counties",
            "description": "The counties resource represents U.S. counties.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/counties{0}",
                        "description": "This service returns a list of counties.",
                        "id": "All Counties",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/counties/{1}{0}",
                        "description": "This service returns a county by it's ID.",
                        "id": "A County",
                        "parameters": [
                           { "name": "countyId", "type": "number", "description": "Id of county requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/states/{1}/counties{0}",
                        "description": "This service returns a list of counties for a state by state ID.",
                        "id": "State Counties by Id",
                        "parameters": [
                           { "name": "stateId", "type": "number", "description": "Id of the state", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/states/counties{0}?StateAbbrev={1}",
                        "description": "This service returns a list of counties for a state by state abbreviation.",
                        "id": "State Counties by Abbrev",
                        "parameters": [
                           { "name": "stateAbbrev", "type": "string", "description": "Abbreviation of the state", "value": "FL" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/countiesbystate{0}?StateAbbrev={1}",
                        "description": "This service returns a list of counties in a state where sites exists.",
                        "id": "Site Counties",
                        "parameters": [
                           { "name": "stateAbbrev", "type": "string", "description": "Abbreviation of the state", "value": "FL" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region data file
        {
            "name": "Data Files",
            "description": "The data file resource represents data files associated with sensors.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/datafiles{0}",
                        "description": "This service returns a list of data files. Without authentication, only approved data files are returned.",
                        "id": "All Data Files",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/datafiles/{1}{0}",
                        "description": "This service returns a data file by it's ID. Without authentication, only approved data files are returned.",
                        "id": "A Data File",
                        "parameters": [
                           { "name": "datafileId", "type": "number", "description": "Id of data file requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/files/{1}/datafile{0}",
                        "description": "This service returns a data file of a file that is of type data. Without authentication, only approved data files are returned.",
                        "id": "File Data File",
                        "parameters": [
                           { "name": "fileId", "type": "number", "description": "Id of the file", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/approvals/{1}/datafiles{0}",
                        "description": "This service returns a list of data files for an approval. Without authentication, only approved data files are returned.",
                        "id": "Approval Data Files",
                        "parameters": [
                           { "name": "approvalId", "type": "number", "description": "Id of the approval", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/datafiles{0}?IsApproved={1}&event={2}&processor={3}&state={4}",
                        "description": "This service returns a list of data files that meet the passed-in parameters. Without authentication, only approved data files are returned.",
                        "id": "Filtered Data Files",
                        "parameters": [
                           { "name": "appoved", "type": "boolean", "description": "True for data files that are approved, false for those that are not.", "value": "" },
                           { "name": "eventId", "type": "number", "description": "Id for an event.", "optional": true, "value": "" },
                           { "name": "processorId", "type": "number", "description": "Id for a member that processed the data file.", "optional": true, "value": "" },
                           { "name": "stateAbbrev", "type": "string", "description": "State abbreviation.", "optional": true, "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/instruments/{1}/datafiles{0}",
                        "description": "This service returns a list of data files for a sensor. Without authentication, only approved data files are returned.",
                        "id": "Sensor Data Files",
                        "parameters": [
                           { "name": "instrumentId", "type": "number", "description": "Id of the sensor", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/peaksummaries/{1}/datafiles{0}",
                        "description": "This service returns a list of data files for a peak summary. Without authentication, only approved data files are returned.",
                        "id": "Peak Summary Data files",
                        "parameters": [
                           { "name": "peakSummaryId", "type": "number", "description": "Id of the peak summary", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"                        
                    }
                ]
            }]
        },
        //#endregion
        //#region deployment priority
        {
            "name": "Deployment Priority",
            "description": "The deployment priority resource represents deployment priorities that sites can have.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/deploymentpriorities{0}",
                        "description": "This service returns a list of deployment priorities.",
                        "id": "All Deployment Priorities",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/deploymentpriorities/{1}{0}",
                        "description": "This service returns a deployment priority by it's ID.",
                        "id": "A Deployment Priority",
                        "parameters": [
                           { "name": "deploymentPriorityId", "type": "number", "description": "Id of deployment priority requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/deploymentpriorities{0}",
                        "description": "This service returns a deployment priority of a site.",
                        "id": "Site Deployment Priority",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region deployment type
        {
            "name": "Deployment Type",
            "description": "The deployment type resource represents deployment types that sensors can have.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/deploymenttypes{0}",
                        "description": "This service returns a list of deployment types.",
                        "id": "All Deployment Types",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/deploymenttypes/{1}{0}",
                        "description": "This service returns a deployment type by it's ID.",
                        "id": "A Deployment Type",
                        "parameters": [
                           { "name": "deploymentTypeId", "type": "number", "description": "Id of deployment type requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/instruments/{1}/deploymenttype{0}",
                        "description": "This service returns a deployment type of a sensor.",
                        "id": "Sensor Deployment Type",
                        "parameters": [
                           { "name": "instrumentId", "type": "number", "description": "Id of the sensor", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sensortypes/{1}/deploymenttypes{0}",
                        "description": "This service returns a list of deployment types of a sensor type.",
                        "id": "Sensor Type Deployment Types",
                        "parameters": [
                           { "name": "sensorTypeId", "type": "number", "description": "Id of the sensor type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region event
        {
            "name": "Event",
            "description": "The event resource represents the event that sensor and hwms are created during.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/events{0}",
                        "description": "This service returns a list of events.",
                        "id": "All Events",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/events/{1}{0}",
                        "description": "This service returns an event by it's ID.",
                        "id": "An Event",
                        "parameters": [
                           { "name": "eventId", "type": "number", "description": "Id of event requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/events{0}?Site={1}",
                        "description": "This service returns a list of events that a site has sensor and/or hwms created at.",
                        "id": "Site Events",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/eventtypes/{1}/events{0}",
                        "description": "This service returns a list of events that have this event type.",
                        "id": "Event Type Events",
                        "parameters": [
                           { "name": "eventTypeId", "type": "number", "description": "Id of the event type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/eventstatus/{1}/events{0}",
                        "description": "This service returns a list of events that have this event status.",
                        "id": "Event Status Events",
                        "parameters": [
                           { "name": "eventStatusId", "type": "number", "description": "Id of the event status", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/hwms/{1}/event{0}",
                        "description": "This service returns the event that this hwm was created at.",
                        "id": "HWM Event",
                        "parameters": [
                           { "name": "hwmId", "type": "number", "description": "Id of the hwm", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/instruments/{1}/event{0}",
                        "description": "This service returns the event that this sensor was deployed at.",
                        "id": "Sensor Event",
                        "parameters": [
                           { "name": "sensorId", "type": "number", "description": "Id of the sensor", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/events/FilteredEvents{0}?Date={1}&Type={2}&State={3}",
                        "description": "This service returns a list of events that meet the passed-in parameters.",
                        "id": "Filtered Events",
                        "parameters": [
                           { "name": "date", "type": "date", "description": "Date to start query, events that started on or after this date", "optional": true, "value": "08/01/2012" },
                           { "name": "eventTypeId", "type": "number", "description": "Id of event type", "optional": true, "value": "" },
                           { "name": "stateAbbrev", "type": "string", "description": "State abbreviation", "optional": true, "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region event status
        {
            "name": "Event Status",
            "description": "The event status resource represents event statuses that events can have.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/eventstatus{0}",
                        "description": "This service returns a list of event statuses.",
                        "id": "All Event Statuses",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/eventstatus/{1}{0}",
                        "description": "This service returns an event status by it's ID.",
                        "id": "An Event Status",
                        "parameters": [
                           { "name": "eventStatusId", "type": "number", "description": "Id of event status requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/events/{1}/status{0}",
                        "description": "This service returns an event status of an event.",
                        "id": "Event Event Status",
                        "parameters": [
                           { "name": "eventId", "type": "number", "description": "Id of the event", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region event type
        {
            "name": "Event Type",
            "description": "The event type resource represents event types that events can have.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/eventtypes{0}",
                        "description": "This service returns a list of event types.",
                        "id": "All Event Types",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/eventtypes/{1}{0}",
                        "description": "This service returns an event type by it's ID.",
                        "id": "An Event Type",
                        "parameters": [
                           { "name": "eventTypeId", "type": "number", "description": "Id of event type requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/events/{1}/Type{0}",
                        "description": "This service returns an event type of an event.",
                        "id": "Event Event Type",
                        "parameters": [
                           { "name": "eventId", "type": "number", "description": "Id of the event", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region file
        {
            "name": "File",
            "description": "The file resource represents files that can be uploaded at sites, objective points, hwms, and sensors.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/files{0}",
                        "description": "This service returns a list of files.",
                        "id": "All Files",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/files/{1}{0}",
                        "description": "This service returns a file by it's ID.",
                        "id": "A File",
                        "parameters": [
                           { "name": "fileId", "type": "number", "description": "Id of file requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/files/{1}/item",
                        "description": "This service returns a file item.",
                        "id": "File Item",
                        "parameters": [
                           { "name": "fileId", "type": "number", "description": "Id of the file", "value": "" }
                        ],
                        "availableMedia": [],
                        "selectedMedia": ""
                    },
                    {
                        "uri": "/files{0}?FromDate={1}&ToDate={2}",
                        "description": "This service returns a list of files that were uploaded within the given date range.",
                        "id": "Files By Date Range",
                        "parameters": [
                           { "name": "fromDate", "type": "date", "description": "date to start with", "value": "02/28/2016" },
                           { "name": "toDate", "type": "date", "description": "date to end with", "value": "03/01/2016" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/hwms/{1}/files{0}",
                        "description": "This service returns a list of files for a hwm.",
                        "id": "HWM Files",
                        "parameters": [
                           { "name": "hwmId", "type": "number", "description": "Id of the hwm", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/objectivepoints/{1}/files{0}",
                        "description": "This service returns a list of file for an objective point.",
                        "id": "Objective Point Files",
                        "parameters": [
                           { "name": "objectivePointId", "type": "number", "description": "Id of the objective point", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/filetypes/{1}/files{0}",
                        "description": "This service returns a list of file that are of a given file type.",
                        "id": "File Type Files",
                        "parameters": [
                           { "name": "fileTypeId", "type": "number", "description": "Id of the file type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/files{0}",
                        "description": "This service returns a list of files for a site.",
                        "id": "Site Files",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sources/{1}/files{0}",
                        "description": "This service returns a list of files that were uploaded by a given source.",
                        "id": "Source Files",
                        "parameters": [
                           { "name": "sourceId", "type": "number", "description": "Id of the source", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/datafiles/{1}/files{0}",
                        "description": "This service returns a list of files for a data file.",
                        "id": "Data File Files",
                        "parameters": [
                           { "name": "dataFileId", "type": "number", "description": "Id of the data file", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/instruments/{1}/files{0}",
                        "description": "This service returns a list of files for a sensor.",
                        "id": "Sensor Files",
                        "parameters": [
                           { "name": "instrumentId", "type": "number", "description": "Id of the sensor", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/events/{1}/files{0}",
                        "description": "This service returns a list of files for an event.",
                        "id": "Event Files",
                        "parameters": [
                           { "name": "eventId", "type": "number", "description": "Id of the event", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/events/{1}/eventfileitems",
                        "description": "This service returns a zip file of all files uploaded during an event.",
                        "id": "Event File Items",
                        "parameters": [
                           { "name": "eventId", "type": "number", "description": "Id of the event", "value": "" }
                        ],
                        "availableMedia": [],
                        "selectedMedia": ""
                    },
                    {
                        "uri": "/files{0}?Site={1}&Event={2}",
                        "description": "This service returns a list of files for a site during a given event.",
                        "id": "Site Event Files",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" },
                           { "name": "eventId", "type": "number", "description": "Id of the event", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }//,
                    //{ //do we really need this one.. anyone using it?? -- doesn't work
                    //    "uri": "/files{0}?State={1}",
                    //    "description": "This service returns a list of files for a state.",
                    //    "id": "Files By State",
                    //    "parameters": [
                    //       { "name": "stateAbbrev", "type": "string", "description": "State abbreviation", "value": "" }
                    //    ],
                    //    "availableMedia": [".xml", ".json"],
                    //    "selectedMedia": ".json"
                    //}
                ]
            }]
        },
        //#endregion
        //#region file type
        {
            "name": "File Type",
            "description": "The file type resource represents file types that files can have.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/filetypes{0}",
                        "description": "This service returns a list of file types.",
                        "id": "All File Types",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/filetypes/{1}{0}",
                        "description": "This service returns a file type by it's ID.",
                        "id": "A File Type",
                        "parameters": [
                           { "name": "fileTypeId", "type": "number", "description": "Id of file type requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/files/{1}/type{0}",
                        "description": "This service returns a file type of a file.",
                        "id": "File File Type",
                        "parameters": [
                           { "name": "fileId", "type": "number", "description": "Id of the file", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region horizontal collect methods
        {
            "name": "Horizontal Collect Method",
            "description": "The horizontal collect method resource represents horizontal collect method that sites, objective points, and hwms can have.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/horizontalmethods{0}",
                        "description": "This service returns a list of horizontal collect methods.",
                        "id": "All Horizontal Collect Methods",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/horizontalmethods/{1}{0}",
                        "description": "This service returns an horizontal collect method by it's ID.",
                        "id": "An Horizontal Collect Method",
                        "parameters": [
                           { "name": "hcollectId", "type": "number", "description": "Id of horizontal collect method requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/hwms/{1}/horizontalmethod{0}",
                        "description": "This service returns an horizontal collect method of an hwm.",
                        "id": "HWM Horizontal Collect Method",
                        "parameters": [
                           { "name": "hwmId", "type": "number", "description": "Id of the hwm", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region horizontal datum
        {
            "name": "Horizontal Datum",
            "description": "The horizontal datum resource represents horizontal datum that sites, objective points, and hwms can have.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/horizontaldatums{0}",
                        "description": "This service returns a list of horizontal datum.",
                        "id": "All Horizontal Datums",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/horizontaldatums/{1}{0}",
                        "description": "This service returns an horizontal datum by it's ID.",
                        "id": "An Horizontal Datum",
                        "parameters": [
                           { "name": "hdatumId", "type": "number", "description": "Id of horizontal datum requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/hdatum{0}",
                        "description": "This service returns an horizontal datum of a site.",
                        "id": "Site Horizontal Datum",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region housing type
        {
            "name": "Housing Type",
            "description": "The housing type resource represents housing type that sensors can have.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/housingtypes{0}",
                        "description": "This service returns a list of horizontal datum.",
                        "id": "All Housing Types",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/housingtypes/{1}{0}",
                        "description": "This service returns an housing type by it's ID.",
                        "id": "An Housing Type",
                        "parameters": [
                           { "name": "housingTypeId", "type": "number", "description": "Id of housing type requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/instruments/{1}/instrumenthousingtype{0}",
                        "description": "This service returns an housing type of a sensor.",
                        "id": "Sensor Housing Type",
                        "parameters": [
                           { "name": "sensorId", "type": "number", "description": "Id of the sensor", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region hwm
        {
            "name": "HWM",
            "description": "The hwm resource represents hwms that are found at site locations.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/hwms{0}",
                        "description": "This service returns a list of hwms. If unauthorized, only approved hwms will be returned.",
                        "id": "All HWMs",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/hwms/{1}{0}",
                        "description": "This service returns an hwm by it's ID.",
                        "id": "An HWM",
                        "parameters": [
                           { "name": "hwmId", "type": "number", "description": "Id of hwm requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/events/{1}/hwms{0}",
                        "description": "This service returns a list of hwms found at an event. If unauthorized, only approved hwms will be returned.",
                        "id": "Event HWMs",
                        "parameters": [
                           { "name": "eventId", "type": "number", "description": "Id of the event", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/sites/{1}/EventHWMs{0}?Event={2}",
                        "description": "This service returns a list of hwms found at a site for an event. If unauthorized, only approved hwms will be returned.",
                        "id": "Site Event HWMs",
                        "parameters": [
                            { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" },
                            { "name": "eventId", "type": "number", "description": "Id of the event", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/hwms{0}?IsApproved={1}&Event={2}&Member={3}&State={4}",
                        "description": "This service returns a list of hwms that meet the passed-in parameters. If unauthorized, only approved hwms will be returned.",
                        "id": "Approval HWMs",
                        "parameters": [
                           { "name": "appoved", "type": "boolean", "description": "True for hwms that are approved, false for those that are not", "value": "" },
                           { "name": "eventId", "type": "number", "description": "Id of the event", "optional":true, "value": "" },
                           { "name": "memberId", "type": "number", "description": "Id of the member that either flagged or surveyed", "optional": true, "value": "" },
                           { "name": "stateAbbrev", "type": "string", "description": "State abbreviation", "optional": true, "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/approvals/{1}/hwms{0}",
                        "description": "This service returns a list of hwms for this approval.",
                        "id": "Approved HWMs",
                        "parameters": [
                           { "name": "approvalId", "type": "number", "description": "Id of the approval", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/members/{1}/hwms{0}",
                        "description": "This service returns a list of hwms that were flagged or surveyed by the given member. If unauthorized, only approved hwms will be returned.",
                        "id": "Member HWMs",
                        "parameters": [
                           { "name": "memberId", "type": "number", "description": "Id of the member", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/hwmqualities/{1}/hwms{0}",
                        "description": "This service returns a list of hwms with a given hwm quality. If unauthorized, only approved hwms will be returned.",
                        "id": "HWM Quality HWMs",
                        "parameters": [
                           { "name": "hwmQualId", "type": "number", "description": "Id of the hwm quality", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/hwmtypes/{1}/hwms{0}",
                        "description": "This service returns a list of hwms with a given hwm type. If unauthorized, only approved hwms will be returned.",
                        "id": "HWM Type HWMs",
                        "parameters": [
                           { "name": "hwmTypeId", "type": "number", "description": "Id of the hwm type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/horizontalmethods/{1}/hwms{0}",
                        "description": "This service returns a list of hwms found with a given horizontal method. If unauthorized, only approved hwms will be returned.",
                        "id": "Horizontal Method HWMs",
                        "parameters": [
                           { "name": "horizontalMethodId", "type": "number", "description": "Id of the horizontal method", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/verticalmethods/{1}/hwms{0}",
                        "description": "This service returns a list of hwms with a given vertical method. If unauthorized, only approved hwms will be returned.",
                        "id": "Vertical Method HWMs",
                        "parameters": [
                           { "name": "verticalMethodId", "type": "number", "description": "Id of the vertical method", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/sites/{1}/hwms{0}",
                        "description": "This service returns a list of hwms found at a given site. If unauthorized, only approved hwms will be returned.",
                        "id": "Site HWMs",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/VerticalDatums/{1}/hwms{0}",
                        "description": "This service returns a list of hwms with a given vertical datum. If unauthorized, only approved hwms will be returned.",
                        "id": "Vertical Datum HWMs",
                        "parameters": [
                           { "name": "verticalDatumId", "type": "number", "description": "Id of the vertical datum", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/markers/{1}/hwms{0}",
                        "description": "This service returns a list of hwms with a given marker. If unauthorized, only approved hwms will be returned.",
                        "id": "Marker HWMs",
                        "parameters": [
                           { "name": "markerId", "type": "number", "description": "Id of the marker", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/peaksummaries/{1}/hwms{0}",
                        "description": "This service returns a list of hwms with a given peak summary. If unauthorized, only approved hwms will be returned.",
                        "id": "Peak Summary HWMs",
                        "parameters": [
                           { "name": "peakSummaryId", "type": "number", "description": "Id of the peak summary", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/files/{1}/hwm{0}",
                        "description": "This service returns a hwm that a given file was uploaded for. If unauthorized, only approved hwms will be returned.",
                        "id": "File HWM",
                        "parameters": [
                           { "name": "fileId", "type": "number", "description": "Id of the file", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/HWMs/FilteredHWMs{0}?Event={1}&EventType={2}&EventStatus={3}"+
                            "&States={4}&County={5}&HWMType={6}&HWMQuality={7}"+
                            "&HWMEnvironment={8}&SurveyComplete={9}&StillWater={10}",
                        "description": "This service returns a list of hwms that meet the passed-in parameters. If unauthorized, only approved hwms will be returned.",
                        "id": "Filtered HWMs",
                        "parameters": [
                           { "name": "eventId", "type": "comma separated string", "description": "Comma separated list of event IDs", "optional":true, "value": "" },
                           { "name": "eventTypeIDs", "type": "comma separated string", "description": "Comma separated list of event type IDs", "optional": true, "value": "" },
                           { "name": "eventStatusID", "type": "number", "description": "Id of the event status", "optional": true, "value": "" },
                           { "name": "states", "type": "comma separated string", "description": "Comma separated list of state abbreviations", "optional": true, "value": "" },
                           { "name": "counties", "type": "comma separated string", "description": "Comma separated list of county names", "optional": true, "value": "" },
                           { "name": "hwmTypeIDs", "type": "comma separated string", "description": "Comma separated list of hwm type IDs", "optional": true, "value": "" },
                           { "name": "hwmQualIDs", "type": "comma separated string", "description": "Comma separated list of hwm qualiyt IDs", "optional": true, "value": "" },
                           { "name": "hwmEnvironment", "type": "string", "description": "Either 'Coastal' or 'Riverine'", "optional": true, "value": "" },
                           { "name": "surveyComplete", "type": "boolean", "description": "True or false: surveyed or not", "optional": true, "value": "" },
                           { "name": "stillWater", "type": "boolean", "description": "True or false: stillwater or not", "optional": true, "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json",
                        "showMap": true
                    }
                ]
            }]
        },
        //#endregion
    ]
configuration.basemaps =
{
    national: {
        name: "National Geographic",
        type: "agsBase",
        layer: "NationalGeographic",
        visible: true
    },
    streets: {
        name: "Streets",
        type: "agsBase",
        layer: "Streets",
        visible: false
    }
}// end baselayer
configuration.overlayedLayers = {
  
}//end overlayedLayers
configuration.regions = [
    { "RegionID": "AL", "Name": "Alabama", "Bounds": [[30.189622, -88.47203], [35.00888, -84.893486]] },
    { "RegionID": "AK", "Name": "Alaska", "Bounds": [[51, -179], [72, -140]] },
    { "RegionID": "AS", "Name": "American Samoa", "Bounds": [[-14.375555, -170.82611], [-14.166389, -169.438323]] },
    { "RegionID": "AZ", "Name": "Arizona", "Bounds": [[31.329174, -114.815414], [37.004585, -109.044883]] },
    { "RegionID": "AR", "Name": "Arkansas", "Bounds": [[33.004528, -94.618156], [36.499656, -89.644409]] },
    { "RegionID": "CA", "Name": "California", "Bounds": [[32.530426, -124.411186], [42.009826, -114.129486]] },
    { "RegionID": "CO", "Name": "Colorado", "Bounds": [[36.992225, -109.060806], [41.005611, -102.041984]] },
    { "RegionID": "CT", "Name": "Connecticut", "Bounds": [[40.982486, -73.729721], [42.049732, -71.788238]] },
    { "RegionID": "DE", "Name": "Delaware", "Bounds": [[38.449325, -75.788055], [39.840576, -75.042396]] },
    { "RegionID": "DC", "Name": "District of Columbia", "Bounds": [[38.801475, -77.120506], [38.995063, -76.909698]] },
    { "RegionID": "FL", "Name": "Florida", "Bounds": [[24.518321, -87.637229], [31.002105, -80.029022]] },
    { "RegionID": "GA", "Name": "Georgia", "Bounds": [[30.35713, -85.605514], [35.002037, -80.841957]] },
    { "RegionID": "GU", "Name": "Guam", "Bounds": [[13.234996, 144.634155], [13.65361, 144.953308]] },
    { "RegionID": "HA", "Name": "Hawaii", "Bounds": [[18.915493, -160.236068], [22.234394, -154.798583]] },
    { "RegionID": "ID", "Name": "Idaho", "Bounds": [[41.989837, -117.240196], [49.001522, -111.043617]] },
    { "RegionID": "IL", "Name": "Illinois", "Bounds": [[36.971115, -91.512626], [42.509479, -87.018081]] },
    { "RegionID": "IN", "Name": "Indiana", "Bounds": [[37.773048, -88.089744], [41.762321, -84.787673]] },
    { "RegionID": "IA", "Name": "Iowa", "Bounds": [[40.374542, -96.635665], [43.504646, -90.139312]] },
    { "RegionID": "KS", "Name": "Kansas", "Bounds": [[36.992221, -102.048553], [40.004512, -94.592735]] },
    { "RegionID": "KY", "Name": "Kentucky", "Bounds": [[36.496719, -89.573677], [39.147232, -81.964202]] },
    { "RegionID": "LA", "Name": "Louisiana", "Bounds": [[28.918104, -94.045776], [33.020599, -88.814056]] },
    { "RegionID": "ME", "Name": "Maine", "Bounds": [[43.064773, -71.082], [47.461883, -66.954002]] },
    { "RegionID": "MD", "Name": "Maryland", "Bounds": [[37.911422, -79.487152], [39.724014, -75.045898]] },
    { "RegionID": "MA", "Name": "Massachusetts", "Bounds": [[41.237003, -73.508407], [42.886661, -69.925399]] },
    { "RegionID": "MI", "Name": "Michigan", "Bounds": [[41.6958, -90.418708], [48.304248, -82.122901]] },
    { "RegionID": "MN", "Name": "Minnesota", "Bounds": [[43.502101, -97.238975], [49.38562, -89.487754]] },
    { "RegionID": "MS", "Name": "Mississippi", "Bounds": [[30.174402, -91.654251], [34.998321, -88.097961]] },
    { "RegionID": "MO", "Name": "Missouri", "Bounds": [[35.99509, -95.774414], [40.614028, -89.100593]] },
    { "RegionID": "MT", "Name": "Montana", "Bounds": [[44.357688, -116.050735], [49.001808, -104.03971]] },
    { "RegionID": "NE", "Name": "Nebraska", "Bounds": [[39.999885, -104.052841], [43.002796, -95.307998]] },
    { "RegionID": "NV", "Name": "Nevada", "Bounds": [[35.002079, -120.005348], [42.000312, -114.039344]] },
    { "RegionID": "NH", "Name": "New Hampshire", "Bounds": [[42.697776, -72.556434], [45.308731, -70.7135]] },
    { "RegionID": "NJ", "Name": "New Jersey", "Bounds": [[38.92564, -75.567596], [41.357639, -73.89363]] },
    { "RegionID": "NM", "Name": "New Mexico", "Bounds": [[31.331899, -109.050102], [36.999423, -103.000656]] },
    { "RegionID": "NY", "Name": "New York", "Bounds": [[40.499076, -79.763328], [45.017364, -71.85588]] },
    { "RegionID": "NC", "Name": "North Carolina", "Bounds": [[33.844467, -84.320968], [36.589008, -75.459503]] },
    { "RegionID": "ND", "Name": "North Dakota", "Bounds": [[45.93505, -104.049591], [49.001316, -96.555152]] },
    { "RegionID": "MP", "Name": "Northern Mariana Islands", "Bounds": [[14.105276, 144.89859], [20.556385, 145.870788]] },
    { "RegionID": "OH", "Name": "Ohio", "Bounds": [[38.4025, -84.819931], [42.324424, -80.51387]] },
    { "RegionID": "OK", "Name": "Oklahoma", "Bounds": [[33.615253, -103.000869], [37.00093, -94.430702]] },
    { "RegionID": "OR", "Name": "Oregon", "Bounds": [[41.992462, -124.566024], [46.285762, -116.461639]] },
    { "RegionID": "PA", "Name": "Pennsylvania", "Bounds": [[39.719429, -80.519561], [42.510452, -74.690032]] },
    { "RegionID": "PR", "Name": "Puerto Rico", "Bounds": [[17.922222, -67.938339], [18.519443, -65.241958]] },
    { "RegionID": "RI", "Name": "Rhode Island", "Bounds": [[41.144325, -71.888366], [42.0191, -71.120613]] },
    { "RegionID": "SC", "Name": "South Carolina", "Bounds": [[32.049209, -83.354354], [35.21611, -78.55368]] },
    { "RegionID": "SD", "Name": "South Dakota", "Bounds": [[42.481113, -104.057128], [45.944362, -96.436576]] },
    { "RegionID": "TN", "Name": "Tennessee", "Bounds": [[34.983898, -90.310745], [36.679244, -81.647453]] },
    { "RegionID": "TX", "Name": "Texas", "Bounds": [[25.83802, -106.645782], [36.50344, -93.508743]] },
    { "RegionID": "UT", "Name": "Utah", "Bounds": [[36.99863, -114.054069], [42.004196, -109.040946]] },
    { "RegionID": "VT", "Name": "Vermont", "Bounds": [[42.727611, -73.443428], [45.016334, -71.467712]] },
    { "RegionID": "VA", "Name": "Virginia", "Bounds": [[36.539142, -83.674819], [39.466579, -75.240722]] },
    { "RegionID": "VI", "Name": "Virgin Islands", "Bounds": [[17.676666, -65.026947], [18.377777, -64.560287]] },
    { "RegionID": "WA", "Name": "Washington", "Bounds": [[45.553112, -124.75579], [49.00362, -116.912506]] },
    { "RegionID": "WV", "Name": "West Virginia", "Bounds": [[37.202762, -82.640777], [40.638553, -77.719734]] },
    { "RegionID": "WI", "Name": "Wisconsin", "Bounds": [[42.494701, -92.885391], [47.302532, -86.249565]] },
    { "RegionID": "WY", "Name": "Wyoming", "Bounds": [[40.996269, -111.055137], [45.004203, -104.051986]] },
    { "RegionID": "CRB", "Name": "Connecticut River Basin", "Bounds": [[43, -70.5], [44, -74.5]] },
    { "RegionID": "DRB", "Name": "Delaware River Basin", "Bounds": [[38.5, -73], [42.5, -77]] },
    { "RegionID": "RRB", "Name": "Rainy River Basin", "Bounds": [[47.3, -89.5], [50, -96]] }

]//end regions