import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { giftCardDescription } from './resources/gift-card';
import { transactionDescription } from './resources/transaction';

export class VtexGiftcardApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'vtex-giftcard-api',
		name: 'N8nDevVtexGiftcardApi',
		icon: { light: 'file:./vtex-giftcard-api.svg', dark: 'file:./vtex-giftcard-api.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: '>ℹ️ Onboarding guide',
		defaults: { name: 'vtex-giftcard-api' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevVtexGiftcardApiApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Gift Card",
					"value": "Gift Card",
					"description": ""
				},
				{
					"name": "Transaction",
					"value": "Transaction",
					"description": ""
				}
			],
			"default": ""
		},
		...giftCardDescription,
		...transactionDescription
		],
	};
}
