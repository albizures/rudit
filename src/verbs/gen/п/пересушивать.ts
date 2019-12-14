import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересушивать: PerfectVerb = {
  name: Word('пересушивать', 5),
  singular1stPerson: Word('пересушиваю', 5),
  singular2ndPerson: Word('пересушиваешь', 5),
  singular3rdPerson: Word('пересушивает', 5),
  plural1stPerson: Word('пересушиваем', 5),
  plural2ndPerson: Word('пересушиваете', 5),
  plural3rdPerson: Word('пересушивают', 5),
  masculinePast: Word('пересушивал', 5),
  femininePast: Word('пересушивала', 5),
  neuterPast: Word('пересушивало', 5),
  pluralPast: Word('пересушивали', 5),
  imperativeInformal: Word('пересушивай', 5),
  imperativeFormal: Word('пересушивайте', 5),
  imperfect: [],
};

perfectVerbs.set(пересушивать.name.text, пересушивать);

export { пересушивать };