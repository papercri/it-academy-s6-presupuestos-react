import ServiceCounter from "./ServiceCounter";
import Modal from "./Modal";
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
          label="Número de páginas:"
          value={pages}
          onChange={onPagesChange}
          infoButton={
            <button
              onClick={() => setIsPagesModalOpen(true)}
              className="btn-info"
              type="button"
            >
              <FontAwesomeIcon icon={faCircleInfo} />
            </button>
          }
        />
 
      </div>

      <div className="relative">
        <ServiceCounter
          id="languages"
          label="Número de idiomas:"
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
        <h2 className="text-xl font-bold mb-4 ">Número de páginas</h2>
        <p className="mb-4">Define cuántas páginas tendrá tu sitio web.</p>
      </Modal>

      <Modal isOpen={isLanguagesModalOpen} onClose={() => setIsLanguagesModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Número de idiomas</h2>
        <p className="mb-4">Selecciona cuántos idiomas incluirás en el sitio web.</p>
      </Modal>
    </div>
  );
};

export default ServiceItemDetail;
