{
	"interfaceName": "OrderProcess",
	"stages": [
		{
			"name": "RcvPortResolveParty",
			"artifactType": "Pipeline",
			"searchProperties": [
				{
					"messageId": [
						{
							"isContext": true,
							"propertyName": "InterchangeID",
							"propertyNamespace": "http://schemas.microsoft.com/BizTalk/2003/system-properties",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": true,
							"propertyName": "InterchangeID",
							"propertyNamespace": "http://schemas.microsoft.com/BizTalk/2003/system-properties",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						}
					],
					"batchId": [
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						}
					],
					"senderId": [
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						}
					],
					"receiverId": [
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						}
					],
					"correlationId": [
						{
							"isContext": false,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": false,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						}
					]
				}
			],
			"customTrackData": [
				{
					"propertyList": [
						{
							"isContext": false,
							"displayName": "AskPrice",
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": false,
							"displayName": "OrderId",
							"propertyName": "OrderId",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='OrderId' and namespace-uri()='']"
						}
					]
				}
			],
			"correlationToken": [
				{
					"isContext": true,
					"propertyName": "ReceivePortName",
					"propertyNamespace": "http://schemas.microsoft.com/BizTalk/2003/system-properties",
					"xPath": "",
					"interfaceNames": ""
				},
				{
					"isContext": true,
					"propertyName": "InterchangeID",
					"propertyNamespace": "http://schemas.microsoft.com/BizTalk/2003/system-properties",
					"xPath": "",
					"interfaceNames": ""
				}
			]
		},
		{
			"name": "Orchestration1",
			"artifactType": "Pipeline",
			"searchProperties": [
				{
					"messageId": [
						{
							"isContext": false,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": true,
							"propertyName": "InterchangeID",
							"propertyNamespace": "http://schemas.microsoft.com/BizTalk/2003/system-properties"
						}
					],
					"batchId": [
						{
							"isContext": false,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": true,
							"propertyName": "InterchangeID",
							"propertyNamespace": "http://schemas.microsoft.com/BizTalk/2003/system-properties"
						}
					],
					"senderId": [
						{
							"isContext": false,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": true,
							"propertyName": "InterchangeID",
							"propertyNamespace": "http://schemas.microsoft.com/BizTalk/2003/system-properties"
						}
					],
					"receiverId": [
						{
							"isContext": false,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": true,
							"propertyName": "InterchangeID",
							"propertyNamespace": "http://schemas.microsoft.com/BizTalk/2003/system-properties"
						}
					],
					"correlationId": [
						{
							"isContext": false,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": true,
							"propertyName": "InterchangeID",
							"propertyNamespace": "http://schemas.microsoft.com/BizTalk/2003/system-properties"
						}
					]
				}
			],
			"customTrackData": [
				{
					"propertyList": [
						{
							"isContext": false,
							"displayName": "AskPrice",
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": false,
							"displayName": "OrderId",
							"propertyName": "OrderId",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='OrderId' and namespace-uri()='']"
						}
					]
				}
			],
			"correlationToken": [
				{
					"isContext": true,
					"propertyName": "ReceivePortName",
					"propertyNamespace": "http://schemas.microsoft.com/BizTalk/2003/system-properties",
					"xPath": "",
					"interfaceNames": ""
				},
				{
					"isContext": true,
					"propertyName": "InterchangeID",
					"propertyNamespace": "http://schemas.microsoft.com/BizTalk/2003/system-properties",
					"xPath": "",
					"interfaceNames": ""
				}
			]
		},
		{
			"name": "SendPortEncode1",
			"artifactType": "Pipeline",
			"searchProperties": [
				{
					"messageId": [
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						}
					],
					"batchId": [
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						}
					],
					"senderId": [
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						}
					],
					"receiverId": [
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						}
					],
					"correlationId": [
						{
							"isContext": false,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": false,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						}
					]
				}
			],
			"customTrackData": [
				{
					"propertyList": [
						{
							"isContext": false,
							"displayName": "AskPrice",
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": false,
							"displayName": "OrderId",
							"propertyName": "OrderId",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='OrderId' and namespace-uri()='']"
						}
					]
				}
			],
			"correlationToken": [
				{
					"isContext": true,
					"propertyName": "ReceivePortName",
					"propertyNamespace": "http://schemas.microsoft.com/BizTalk/2003/system-properties",
					"xPath": "",
					"interfaceNames": ""
				},
				{
					"isContext": true,
					"propertyName": "InterchangeID",
					"propertyNamespace": "http://schemas.microsoft.com/BizTalk/2003/system-properties",
					"xPath": "",
					"interfaceNames": ""
				}
			]
		},
		{
			"name": "SendPortEncode2",
			"artifactType": "Pipeline",
			"searchProperties": [
				{
					"messageId": [
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						}
					],
					"batchId": [
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						}
					],
					"senderId": [
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						}
					],
					"receiverId": [
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": true,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						}
					],
					"correlationId": [
						{
							"isContext": false,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": false,
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						}
					]
				}
			],
			"customTrackData": [
				{
					"propertyList": [
						{
							"isContext": false,
							"displayName": "AskPrice",
							"propertyName": "AskPrice",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='AskPrice' and namespace-uri()='']"
						},
						{
							"isContext": false,
							"displayName": "OrderId",
							"propertyName": "OrderId",
							"propertyNamespace": "",
							"xPath": "/*[local-name()='SalesOrder' and namespace-uri()='http://SampleBizTalkApplication']/*[local-name()='OrderId' and namespace-uri()='']"
						}
					]
				}
			],
			"correlationToken": [
				{
					"isContext": true,
					"propertyName": "ReceivePortName",
					"propertyNamespace": "http://schemas.microsoft.com/BizTalk/2003/system-properties",
					"xPath": "",
					"interfaceNames": ""
				},
				{
					"isContext": true,
					"propertyName": "InterchangeID",
					"propertyNamespace": "http://schemas.microsoft.com/BizTalk/2003/system-properties",
					"xPath": "",
					"interfaceNames": ""
				}
			]
		}
	]
}