import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const долечивать: PerfectVerb = {
  name: Word('долечивать', 3),
  singular1stPerson: Word('долечиваю', 3),
  singular2ndPerson: Word('долечиваешь', 3),
  singular3rdPerson: Word('долечивает', 3),
  plural1stPerson: Word('долечиваем', 3),
  plural2ndPerson: Word('долечиваете', 3),
  plural3rdPerson: Word('долечивают', 3),
  masculinePast: Word('долечивал', 3),
  femininePast: Word('долечивала', 3),
  neuterPast: Word('долечивало', 3),
  pluralPast: Word('долечивали', 3),
  imperativeInformal: Word('долечивай', 3),
  imperativeFormal: Word('долечивайте', 3),
  imperfect: [],
};

perfectVerbs.set(долечивать.name.text, долечивать);

export { долечивать };