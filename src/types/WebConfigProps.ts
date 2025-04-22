export interface WebConfigProps {
  pages: number;
  languages: number;
  onPagesChange: (value: number) => void;
  onLanguagesChange: (value: number) => void;
}