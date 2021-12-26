import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import styled from "../css/Loading.module.css";

function Loading() {
  return (
    <div className={styled.loadingColumn}>
      <FontAwesomeIcon icon={faCompactDisc} className={styled.loadingIcon} />
    </div>
  );
}
export default Loading;
