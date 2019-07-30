var age = parseInt(prompt("Digite a idade do nadador"));

if (age >= 5 && age <= 7) {
	document.body.append("Categoria: Infantil A")
}else if (age >= 8 && age <= 10) {
	document.body.append("Categoria: Infantil B")
}else if (age >= 11 && age <= 13) {
	document.body.append("Categoria: Juvenil A")
}else if (age >= 14 && age <= 17) {
	document.body.append("Categoria: Juvenil B")
}else if (age >= 18) {
	document.body.append("Categoria: Adulto")
}else {
	document.body.append("Sem categoria!")
}