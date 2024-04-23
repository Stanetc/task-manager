import noProjectImage from "../assets/no-projects.png";
import Buttons from "./Buttons.jsx";

export default function NewProject({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="Empty task"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my4">
        No Project selected
      </h2>
      <p className="text-stone-400 mb-4">Select project & Start new one</p>
      <p className="mt-8">
        <Buttons onClick={onStartAddProject}>Create a new project</Buttons>
      </p>
    </div>
  );
}
