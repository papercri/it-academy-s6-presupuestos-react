
import ServiceCounter from "./ServiceCounter";

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
  return (
    <div className="mt-4 space-y-4 ">
         <ServiceCounter
          id="pages"
          label="Número de páginas:"
          value={pages}
          onChange={onPagesChange}
        />
        <ServiceCounter
          id="languages"
          label="Número de idiomas:"
          value={languages}
          onChange={onLanguagesChange}
        />
    </div>
  );
};

export default ServiceItemDetail;
