import { ChangeEvent } from "react";

type InputPropsType = {
	currentText: string
	setCurrentText: (test: string) => void
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setCurrentText(event.currentTarget.value);
	};

	return (
		<input id={'hw04-input'} type="text" value={props.currentText} onChange={(e) =>  onChangeHandler(e) } />
	);
};
