import { Component } from '@angular/core';

@Component({
	selector: 'app-compra',
	templateUrl: './compra.component.html',
	styleUrls: ['./compra.component.css']
})
export class CompraComponent {
	mail: string = "";
	direction: string = "";
	phone: string = "";
	community: string = "madrid";
	payMethod: string = "";
	allowSendInfo: boolean = false;
	prettifyOutput: boolean = false;

	output = {
		"mail": "",
		"direction": "",
		"phone": "",
		"community": "",
		"payMethod": "",
		"allowSendInfo": false
	};

	submitValues(): void {
		this.output.mail = this.mail;
		this.output.direction = this.direction;
		this.output.phone = this.phone;
		this.output.community = this.community;
		this.output.payMethod = this.payMethod;
		this.output.allowSendInfo = this.allowSendInfo;
	}

	private generatePrettyJSONString(data: Object): string {
		let str: string = "{\n";
		Object.entries(data).forEach(el => {
			if (typeof el[1] == 'object')
				str += `\t"${el[0]}": ${this.generatePrettyJSONString(el[1]).split("\n").map(s => "\t"+s).join("\n").substring(1)},\n`;
			else
				str += `\t"${el[0]}": ${typeof el[1] == 'string' ? '"' + el[1].replaceAll("\n", "\\n") + '"' : el[1]},\n`
		});
		str = str.substring(0, str.length-2)+"\n";
		str += "}";
		return str;
	}

	getCommunityName(community: string): string {
		switch(community) {
			case "madrid":
				return "Madrid";
			case "galicia":
				return "Galicia";
			case "cyl":
				return "Castilla y León";
			default:
				return "Comunidad Desconocida";
		}
	}

	getPayMethodName(paymethod: string): string {
		switch(paymethod) {
			case "efectivo":
				return "Efectivo";
			case "tarjeta":
				return "Tarjeta";
			case "contrareembolso":
				return "Contra-reembolso";
			default:
				return "Método de pago desconocido";
		}
	}

	getUserFriendlyOutput(): string {
		return `Mail: ${this.output.mail.length > 0 ? this.output.mail : "N/A"}\nDirección: ${this.output.direction.length > 0 ? '"'+this.output.direction+'"' : "N/A"}\nTeléfono: ${this.output.phone.length > 0 ? this.output.phone : "N/A"}\nComunidad: ${this.getCommunityName(this.output.community)}\nMétodo de Pago: ${this.getPayMethodName(this.output.payMethod)}\nEnvío de Información: ${this.output.allowSendInfo ? "Permitido" : "No permitido"}`
	}

	getOutputAsText(): string {
		if (this.prettifyOutput)
			return this.generatePrettyJSONString(this.output);
		else
			return JSON.stringify(this.output);
	}
}
