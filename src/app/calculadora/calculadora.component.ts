import { Component } from '@angular/core';

@Component({
	selector: 'app-calculadora',
	templateUrl: './calculadora.component.html',
	styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
	number1: number = 0;
	number2: number = 0;
	result: number = 0;

	onClickOperacion(op: string) {
		switch(op) {
			case "+":
				this.result = this.number1 + this.number2;
				break;
			case "-":
				this.result = this.number1 - this.number2;
				break;
			case "*":
				this.result = this.number1 * this.number2;
				break;
			case "/":
				this.result = this.number1 / this.number2;
				break;
		}
		this.number1 = this.result;
	}
}
