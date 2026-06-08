import type { INodeProperties } from 'n8n-workflow';

export const transactionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					]
				}
			},
			"options": [
				{
					"name": "Get Gift Card Transactions",
					"value": "Get Gift Card Transactions",
					"action": "Get GiftCard Transactions",
					"description": "Returns all transaction of a giftcard.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/giftcards/{{$parameter[\"giftCardID\"]}}/transactions"
						}
					}
				},
				{
					"name": "Create Gift Card Transaction",
					"value": "Create Gift Card Transaction",
					"action": "Create GiftCard Transaction",
					"description": "Register a new giftcard transaction and authorize the item reservation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/giftcards/{{$parameter[\"giftCardID\"]}}/transactions"
						}
					}
				},
				{
					"name": "Get Gift Card Transactionby ID",
					"value": "Get Gift Card Transactionby ID",
					"action": "Get GiftCard Transaction by ID",
					"description": "Get GiftCard Transaction by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/giftcards/{{$parameter[\"giftCardID\"]}}/transactions/{{$parameter[\"transactionID\"]}}"
						}
					}
				},
				{
					"name": "Get Transaction Authorizations",
					"value": "Get Transaction Authorizations",
					"action": "Get Transaction Authorizations",
					"description": "Returns the giftcard transaction authorizations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/giftcards/{{$parameter[\"giftCardID\"]}}/transactions/{{$parameter[\"transactionID\"]}}/authorization"
						}
					}
				},
				{
					"name": "Get Transaction Cancellations",
					"value": "Get Transaction Cancellations",
					"action": "Get Transaction Cancellations",
					"description": "Returns the giftcard transaction cancellations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/giftcards/{{$parameter[\"giftCardID\"]}}/transactions/{{$parameter[\"transactionID\"]}}/cancellations"
						}
					}
				},
				{
					"name": "Cancel Gift Card Transaction",
					"value": "Cancel Gift Card Transaction",
					"action": "Cancel GiftCard Transaction",
					"description": "Creates a cancellation in the transaction. Cancel a item reservation or create a refund.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/giftcards/{{$parameter[\"giftCardID\"]}}/transactions/{{$parameter[\"transactionID\"]}}/cancellations"
						}
					}
				},
				{
					"name": "Get Transaction Settlements",
					"value": "Get Transaction Settlements",
					"action": "Get Transaction Settlements",
					"description": "Returns the giftcard transaction settlements.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/giftcards/{{$parameter[\"giftCardID\"]}}/transactions/{{$parameter[\"transactionID\"]}}/settlements"
						}
					}
				},
				{
					"name": "Settle Gift Card Transaction",
					"value": "Settle Gift Card Transaction",
					"action": "Settle GiftCard Transaction",
					"description": "Creates a giftcard transaction settlement.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/giftcards/{{$parameter[\"giftCardID\"]}}/transactions/{{$parameter[\"transactionID\"]}}/settlements"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /giftcards/{giftCardID}/transactions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactions"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactions"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactions"
					]
				}
			}
		},
		{
			"displayName": "Gift Card ID",
			"name": "giftCardID",
			"required": true,
			"description": "",
			"default": "2",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactions"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactions"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactions"
					]
				}
			}
		},
		{
			"displayName": "POST /giftcards/{giftCardID}/transactions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "Gift Card ID",
			"name": "giftCardID",
			"required": true,
			"description": "",
			"default": "7",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "insert test here",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Operation",
			"name": "operation",
			"type": "string",
			"default": "Debit",
			"routing": {
				"send": {
					"property": "operation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "Order Info",
			"name": "orderInfo",
			"type": "json",
			"default": "{\n  \"cart\": {\n    \"discounts\": 2.5,\n    \"grandTotal\": 0,\n    \"items\": [\n      {\n        \"discount\": 2.5,\n        \"id\": \"2001023\",\n        \"name\": \"insert name here\",\n        \"price\": 14.99,\n        \"priceTags\": [\n          {\n            \"name\": \"insert name here\",\n            \"value\": 0\n          }\n        ],\n        \"productId\": \"2000492\",\n        \"quantity\": 1,\n        \"refId\": \"35994\",\n        \"shippingDiscount\": 0,\n        \"value\": 14.99\n      }\n    ],\n    \"itemsTotal\": 14.99,\n    \"shipping\": 7.27,\n    \"taxes\": 0\n  },\n  \"clientProfile\": {\n    \"birthDate\": \"0001-01-01T00:00:00\",\n    \"document\": \"02906792063\",\n    \"email\": \"email@email.com.br\",\n    \"firstName\": \"example\",\n    \"isCorporate\": false,\n    \"lastName\": \"example\",\n    \"phone\": \"+551111111111\"\n  },\n  \"orderId\": \"v500\",\n  \"sequence\": 5006128,\n  \"shipping\": {\n    \"city\": \"Rio de Janeiro\",\n    \"complement\": null,\n    \"country\": \"BRA\",\n    \"neighborhood\": \"example\",\n    \"number\": \"11\",\n    \"postalCode\": \"22250040\",\n    \"receiverName\": \"example\",\n    \"reference\": null,\n    \"state\": \"RJ\",\n    \"street\": \"Praia de Botafogo\"\n  }\n}",
			"routing": {
				"send": {
					"property": "orderInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Redemption Code",
			"name": "redemptionCode",
			"type": "string",
			"default": "example code",
			"routing": {
				"send": {
					"property": "redemptionCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Redemption Token",
			"name": "redemptionToken",
			"type": "string",
			"default": "example code",
			"routing": {
				"send": {
					"property": "redemptionToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request Id",
			"name": "requestId",
			"type": "string",
			"default": "B56CB",
			"routing": {
				"send": {
					"property": "requestId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Value",
			"name": "value",
			"type": "number",
			"default": 800,
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Create Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "GET /giftcards/{giftCardID}/transactions/{transactionID}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactionby ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactionby ID"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactionby ID"
					]
				}
			}
		},
		{
			"displayName": "Gift Card ID",
			"name": "giftCardID",
			"required": true,
			"description": "",
			"default": "6",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactionby ID"
					]
				}
			}
		},
		{
			"displayName": "Transaction ID",
			"name": "transactionID",
			"required": true,
			"description": "",
			"default": "b47690",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactionby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactionby ID"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Gift Card Transactionby ID"
					]
				}
			}
		},
		{
			"displayName": "GET /giftcards/{giftCardID}/transactions/{transactionID}/authorization",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Authorizations"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Authorizations"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Authorizations"
					]
				}
			}
		},
		{
			"displayName": "Gift Card ID",
			"name": "giftCardID",
			"required": true,
			"description": "",
			"default": "6",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Authorizations"
					]
				}
			}
		},
		{
			"displayName": "Transaction ID",
			"name": "transactionID",
			"required": true,
			"description": "",
			"default": "b47690",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Authorizations"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Authorizations"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Authorizations"
					]
				}
			}
		},
		{
			"displayName": "GET /giftcards/{giftCardID}/transactions/{transactionID}/cancellations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Cancellations"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Cancellations"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Cancellations"
					]
				}
			}
		},
		{
			"displayName": "Gift Card ID",
			"name": "giftCardID",
			"required": true,
			"description": "",
			"default": "6",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Cancellations"
					]
				}
			}
		},
		{
			"displayName": "Transaction ID",
			"name": "transactionID",
			"required": true,
			"description": "",
			"default": "b47690",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Cancellations"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Cancellations"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Cancellations"
					]
				}
			}
		},
		{
			"displayName": "POST /giftcards/{giftCardID}/transactions/{transactionID}/cancellations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Cancel Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Cancel Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Cancel Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "Gift Card ID",
			"name": "giftCardID",
			"required": true,
			"description": "",
			"default": "6",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Cancel Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "Transaction ID",
			"name": "transactionID",
			"required": true,
			"description": "",
			"default": "b476900c",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Cancel Gift Card Transaction"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request Id",
			"name": "requestId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "requestId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Cancel Gift Card Transaction"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Value",
			"name": "value",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Cancel Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Cancel Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Cancel Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "GET /giftcards/{giftCardID}/transactions/{transactionID}/settlements",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Settlements"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Settlements"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Settlements"
					]
				}
			}
		},
		{
			"displayName": "Gift Card ID",
			"name": "giftCardID",
			"required": true,
			"description": "",
			"default": "7",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Settlements"
					]
				}
			}
		},
		{
			"displayName": "Transaction ID",
			"name": "transactionID",
			"required": true,
			"description": "",
			"default": "b47690",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Settlements"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Settlements"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Get Transaction Settlements"
					]
				}
			}
		},
		{
			"displayName": "POST /giftcards/{giftCardID}/transactions/{transactionID}/settlements",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Settle Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Settle Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Settle Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "Gift Card ID",
			"name": "giftCardID",
			"required": true,
			"description": "",
			"default": "6",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Settle Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "Transaction ID",
			"name": "transactionID",
			"required": true,
			"description": "",
			"default": "b47690",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Settle Gift Card Transaction"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request Id",
			"name": "requestId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "requestId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Settle Gift Card Transaction"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Value",
			"name": "value",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Settle Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Settle Gift Card Transaction"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transaction"
					],
					"operation": [
						"Settle Gift Card Transaction"
					]
				}
			}
		},
];
