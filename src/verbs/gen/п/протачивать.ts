import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протачивать: PerfectVerb = {
  name: Word('протачивать', 4),
  singular1stPerson: Word('протачиваю', 4),
  singular2ndPerson: Word('протачиваешь', 4),
  singular3rdPerson: Word('протачивает', 4),
  plural1stPerson: Word('протачиваем', 4),
  plural2ndPerson: Word('протачиваете', 4),
  plural3rdPerson: Word('протачивают', 4),
  masculinePast: Word('протачивал', 4),
  femininePast: Word('протачивала', 4),
  neuterPast: Word('протачивало', 4),
  pluralPast: Word('протачивали', 4),
  imperativeInformal: Word('протачивай', 4),
  imperativeFormal: Word('протачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(протачивать.name.text, протачивать);

export { протачивать };