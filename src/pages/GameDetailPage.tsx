import { useParams } from "react-router";

const gameDetail = () => {
  const id = useParams();
  return <p>gameDetailPage</p>;
};

export default gameDetail;
