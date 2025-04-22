import { WebConfigProps } from "../types/WebConfigProps";

const WebConfig: React.FC<WebConfigProps> = ({
  pages,
  languages,
  onPagesChange,
  onLanguagesChange,
}) => {
  return (
    <div className="mt-4 space-y-4 ">
        <div className="flex justify-between items-center">
          <label htmlFor="pages" className="form-label">Número de páginas:</label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onPagesChange(Math.max(pages - 1, 0))}
              className="btn-more-less"
            >
              -
            </button>
            <input
              id="pages"
              type="number"
              value={pages}
              onChange={(e) => onPagesChange(Number(e.target.value))}
              className="form-input w-[65px] text-center no-spinner border-0 shadow-none text-2xl text-selected font-extrabold"
            />
            <button
              type="button"
              onClick={() => onPagesChange(pages + 1)}
              className="btn-more-less"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="languages" className="form-label">Número de idiomas:</label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onLanguagesChange(Math.max(languages - 1, 0))}
              className="btn-more-less"
            >
              -
            </button>
            <input
              id="languages"
              type="number"
              value={languages}
              onChange={(e) => onLanguagesChange(Number(e.target.value))}
              className="form-input w-[65px] text-center no-spinner border-0 shadow-none text-2xl text-selected font-extrabold"
            />
            <button
              type="button"
              onClick={() => onLanguagesChange(languages + 1)}
              className="btn-more-less"
            >
              +
            </button>
          </div>
        </div>
    </div>
  );
};

export default WebConfig;
