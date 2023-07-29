import HeaderInfos from "../../components/HeaderInfos";
import SelectRoute from "../../components/SelectRoute";
import "./Home.css";

export default function Home() {
  return (
    <div className="wrapper">
      <HeaderInfos></HeaderInfos>
      <SelectRoute></SelectRoute>
    </div>
  );
}
