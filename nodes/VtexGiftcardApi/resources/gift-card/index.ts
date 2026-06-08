import type { INodeProperties } from 'n8n-workflow';

export const giftCardDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					]
				}
			},
			"options": [
				{
					"name": "Create Gift Card",
					"value": "Create Gift Card",
					"action": "Create GiftCard",
					"description": "Creates a GiftCard for a specific user",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/giftcards"
						}
					}
				},
				{
					"name": "Get Gift Cardusing JSON",
					"value": "Get Gift Cardusing JSON",
					"action": "Get GiftCard using JSON",
					"description": "Returns the giftcards based on the cart data.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/giftcards/_search"
						}
					}
				},
				{
					"name": "Get Gift Cardby ID",
					"value": "Get Gift Cardby ID",
					"action": "Get GiftCard by ID",
					"description": "Returns associated data for a specified giftcardId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/giftcards/{{$parameter[\"giftCardID\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /giftcards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"Create Gift Card"
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
						"Gift Card"
					],
					"operation": [
						"Create Gift Card"
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
						"Gift Card"
					],
					"operation": [
						"Create Gift Card"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key",
			"name": "X-VTEX-API-AppKey",
			"required": true,
			"description": "The AppKey configured by the merchant",
			"default": "{{X-VTEX-API-AppKey}}",
			"type": "string",
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
						"Gift Card"
					],
					"operation": [
						"Create Gift Card"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token",
			"name": "X-VTEX-API-AppToken",
			"required": true,
			"description": "The AppToken configured by the merchant",
			"default": "{{X-VTEX-API-AppToken}}",
			"type": "string",
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
						"Gift Card"
					],
					"operation": [
						"Create Gift Card"
					]
				}
			}
		},
		{
			"displayName": "POST /giftcards<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"Create Gift Card"
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
						"Gift Card"
					],
					"operation": [
						"Create Gift Card"
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
						"Gift Card"
					],
					"operation": [
						"Create Gift Card"
					]
				}
			}
		},
		{
			"displayName": "POST /giftcards/_search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"Get Gift Cardusing JSON"
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
						"Gift Card"
					],
					"operation": [
						"Get Gift Cardusing JSON"
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
						"Gift Card"
					],
					"operation": [
						"Get Gift Cardusing JSON"
					]
				}
			}
		},
		{
			"displayName": "REST Range",
			"name": "REST-Range",
			"description": "PaginationB control.B ThisB queryB variableB mustB followB theB formatB _resources={from}-{to}_.",
			"default": "giftcard=0-49",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"REST-Range": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"Get Gift Cardusing JSON"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Cart",
			"name": "cart",
			"type": "json",
			"default": "{\n  \"discounts\": 0,\n  \"grandTotal\": 123.1,\n  \"items\": [\n    {\n      \"id\": \"1\",\n      \"name\": \"Product Name\",\n      \"price\": 100,\n      \"productId\": \"1\",\n      \"quantity\": 1,\n      \"refId\": \"12\"\n    }\n  ],\n  \"itemsTotal\": 100,\n  \"redemptionCode\": null,\n  \"relationName\": null,\n  \"shipping\": 0,\n  \"taxes\": 12\n}",
			"routing": {
				"send": {
					"property": "cart",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"Get Gift Cardusing JSON"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client",
			"name": "client",
			"type": "json",
			"default": "{\n  \"document\": \"21301923110\",\n  \"email\": \"email@damoain.com\",\n  \"id\": \"019a0cc1-409a-4c16-859b-eefdb81f825e\"\n}",
			"routing": {
				"send": {
					"property": "client",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"Get Gift Cardusing JSON"
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
						"Gift Card"
					],
					"operation": [
						"Get Gift Cardusing JSON"
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
						"Gift Card"
					],
					"operation": [
						"Get Gift Cardusing JSON"
					]
				}
			}
		},
		{
			"displayName": "GET /giftcards/{giftCardID}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gift Card"
					],
					"operation": [
						"Get Gift Cardby ID"
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
						"Gift Card"
					],
					"operation": [
						"Get Gift Cardby ID"
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
						"Gift Card"
					],
					"operation": [
						"Get Gift Cardby ID"
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
						"Gift Card"
					],
					"operation": [
						"Get Gift Cardby ID"
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
						"Gift Card"
					],
					"operation": [
						"Get Gift Cardby ID"
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
						"Gift Card"
					],
					"operation": [
						"Get Gift Cardby ID"
					]
				}
			}
		},
];
