import { Component } from '@angular/core';

@Component({
	selector: 'app-divisas',
	templateUrl: './divisas.component.html',
	styleUrls: ['./divisas.component.css']
})
export class DivisasComponent {
	amount: number = 0;
	currency: string = "usd";
	currencySymbol: string = this.getSymbolForCurrency(this.currency);
	result: string = "0";

	updateResult(): void {
		this.currencySymbol = this.getSymbolForCurrency(this.currency);
		let factor: number = this.getConversionFactorForCurrency(this.currency);
		if (factor == -1) {
			this.result = "???";
			return;
		}
		
		this.result = (this.amount * factor).toString();
	}

	getConversionFactorForCurrency(currency: string): number {
		switch(currency) {
			case "usd":
				return 0.91;
			case "gbp":
				return 1.14;
			case "cad":
				return 0.68;
			case "jpy":
				return 0.0068;
			default:
				return -1;
		}
	}

	getSymbolForCurrency(currency: string): string {
		switch(currency) {
			case "usd":
				return "$";
			case "gbp":
				return "\u00A3";
			case "cad":
				return "C$";
			case "jpy":
				return "\u00A5";
			default:
				return currency.toUpperCase();
		}
	}
}
