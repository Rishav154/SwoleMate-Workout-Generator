/* eslint-disable react/prop-types */
export default function Button(props) {
    const { text, func } = props;
    return (
        <button
            onClick={func}
            className="px-8 mx-auto py-4 rounded-md border-[2px] bg-emerald-950 border-emerald-400 border-solid blueShadow duration-200"
        >
            <p>{text}</p>
        </button>
    );
}
