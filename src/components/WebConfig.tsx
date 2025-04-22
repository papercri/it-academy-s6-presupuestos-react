import { WebConfigProps } from "../types/Interfaces";
import Counter from "./Counter";

const WebConfig: React.FC<WebConfigProps> = ({
  pages,
  languages,
  onPagesChange,
  onLanguagesChange,
}) => {
  return (
    <div className="mt-4 space-y-4 ">
         <Counter
        id="pages"
        label="Número de páginas:"
        value={pages}
        onChange={onPagesChange}
      />
      <Counter
        id="languages"
        label="Número de idiomas:"
        value={languages}
        onChange={onLanguagesChange}
      />
    </div>
  );
};

export default WebConfig;
