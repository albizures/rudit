import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробивать: PerfectVerb = {
  name: Word('пробивать', 6),
  singular1stPerson: Word('пробиваю', 6),
  singular2ndPerson: Word('пробиваешь', 6),
  singular3rdPerson: Word('пробивает', 6),
  plural1stPerson: Word('пробиваем', 6),
  plural2ndPerson: Word('пробиваете', 6),
  plural3rdPerson: Word('пробивают', 6),
  masculinePast: Word('пробивал', 6),
  femininePast: Word('пробивала', 6),
  neuterPast: Word('пробивало', 6),
  pluralPast: Word('пробивали', 6),
  imperativeInformal: Word('пробивай', 6),
  imperativeFormal: Word('пробивайте', 6),
  imperfect: [],
};

perfectVerbs.set(пробивать.name.text, пробивать);

export { пробивать };