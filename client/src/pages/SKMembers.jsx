import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal2 from "../components/Modal2";
import Spinner from "../components/Spinner";
import { getSkmembers, reset } from "../features/skMembers/skSlice";
import CardSk from "../components/CardSk";
import Title from "../components/Title";
const SKMembers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const { skmembers, isLoading, isError } = useSelector(
    (state) => state.skmembers
  );

  const positions = [{ name: "SK. Chairman" }, { name: "SK. Councilor" }];

  useEffect(() => {
    if (isError) {
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getSkmembers());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <Title title={"SANGGUNIANG KABATAAN"} />
      <Modal2 name={"SK Members"} positions={positions} />
      <div className="w-full">
        {skmembers.length > 0 ? (
          <div className="lg:justify-start flex gap-5 flex-wrap md:justify-center sm:justify-center">
            {skmembers.map((skmember) => (
              <CardSk
                key={skmember._id}
                skmembers={skmember}
                positions={positions}
              />
            ))}
          </div>
        ) : (
          <h3 className="text-center">
            <i>NO SK. MEMBERS YET</i>
          </h3>
        )}
      </div>
    </div>
  );
};

export default SKMembers;
