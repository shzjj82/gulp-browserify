let List = new Map();
List.set('Added_Tax', {
	name: '增值税',
	dataset: 'Add',
	sign: "Added_Tax",
	next: ['Add1', 'Add2'],

}).set('Income_taxes', {
	name: '企业所得税',
	next: '',
}).set('Building-taxes', {
	name: '房产税',
	next: '',
}).set('Add1', {
	name: '小规模企业',
	sign: "Add1",
	next: ['Add3', 'Add4'],
	function: '1'
}).set('Add2', {
	name: '大规模企业',
	sign: "Add1",
	next: ['Add5', 'Add6'],
}).set('Add3', {
	name: '小规模',
	sign: "Add3",
	function: '1',
}).set('Add4', {
	name: '大规模',
	sign: "Add4",
	function: '1',
}).set('Add5', {
	name: '规模想',
	sign: "Add5",
	function: '1',
}).set('Add6', {
	name: '规模下',
	sign: "Add6",
	function: '1',
}).set('', {
	name: '',
	next: '',
})

export default List;