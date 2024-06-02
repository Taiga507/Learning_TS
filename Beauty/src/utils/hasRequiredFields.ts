// Проверка на все критические свойства, которые обязательно нужны и если их не будет, то показывать пользователю, что что-то пошло не так.
// Этот момент иногда игнорируют, полагаясь на правильный ответ от сервера.

export default function hasRequiredFields(
	obj: Record<string, any>,
	requiredFields: string[]
): boolean {
	return requiredFields.every((field) => {
		return Object.hasOwn(obj, field);
	});
}