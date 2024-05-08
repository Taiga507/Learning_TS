// interface ICompany {
// 	name: string;
// 	debts: number;
// }

// type CompanyDebtsType = ICompany['debts'] // number


// interface ICompany {
// 	name: string;
// 	debts: number;
// 	management: {
// 		owner: string;
// 	};
// }

// type CompanyOwnerType = ICompany['management']['owner'] // string


// interface ICompany {
// 	name: string;
// 	debts: number;
// 	departments: Department [];
// }

// type CompanyDepartmentsType = ICompany['departments'][number] // Department


interface ICompany {
	name: string;
	debts: number;
}

const debts = 'debts'
type CompanyDebtsType2 = ICompany[typeof debts] // number


// let debts: 'debts' = 'debts';
// // or
// let debts = 'debts' as 'debts';