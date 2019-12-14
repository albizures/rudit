import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропивать: PerfectVerb = {
  name: Word('пропивать', 6),
  singular1stPerson: Word('пропиваю', 6),
  singular2ndPerson: Word('пропиваешь', 6),
  singular3rdPerson: Word('пропивает', 6),
  plural1stPerson: Word('пропиваем', 6),
  plural2ndPerson: Word('пропиваете', 6),
  plural3rdPerson: Word('пропивают', 6),
  masculinePast: Word('пропивал', 6),
  femininePast: Word('пропивала', 6),
  neuterPast: Word('пропивало', 6),
  pluralPast: Word('пропивали', 6),
  imperativeInformal: Word('пропивай', 6),
  imperativeFormal: Word('пропивайте', 6),
  imperfect: [],
};

perfectVerbs.set(пропивать.name.text, пропивать);

export { пропивать };