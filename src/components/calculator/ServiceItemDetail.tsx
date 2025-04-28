import ServiceCounter from "./ServiceCounter";
import Modal from "../ui/Modal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

interface ServiceItemDetailProps {
  pages: number;
  languages: number;
  onPagesChange: (value: number) => void;
  onLanguagesChange: (value: number) => void;
}
const ServiceItemDetail: React.FC<ServiceItemDetailProps> = ({
  pages,
  languages,
  onPagesChange,
  onLanguagesChange,
}) => {
  const [isPagesModalOpen, setIsPagesModalOpen] = useState(false);
  const [isLanguagesModalOpen, setIsLanguagesModalOpen] = useState(false);

  return (
    <div className="mt-4 space-y-8">
      <div className="relative">
        <ServiceCounter
          id="pages"
          label="Number of pages:"
          value={pages}
          onChange={onPagesChange}
          infoButton={
            <button
              onClick={() => setIsPagesModalOpen(true)}
              className="btn-info "
              type="button"
            >
              <FontAwesomeIcon icon={faCircleInfo} />
            </button>
          }
        />
      </div>

      <div>
        <ServiceCounter
          id="languages"
          label="Number of languages:"
          value={languages}
          onChange={onLanguagesChange}
          infoButton={
            <button
              onClick={() => setIsLanguagesModalOpen(true)}
              className="btn-info"
              type="button"
            >
              <FontAwesomeIcon icon={faCircleInfo} />
            </button>
          }
        />
      </div>

      <Modal isOpen={isPagesModalOpen} onClose={() => setIsPagesModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4 ">Number of pages</h2>
        <p className="mb-4">Define how many pages your website will have.</p>
      </Modal>

      <Modal isOpen={isLanguagesModalOpen} onClose={() => setIsLanguagesModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Number of languages</h2>
        <p className="mb-4">Define how many languages your website will have.</p>
      </Modal>
    </div>
  );
};

export default ServiceItemDetail;
