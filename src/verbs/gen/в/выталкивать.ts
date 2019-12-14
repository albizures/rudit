import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выталкивать: PerfectVerb = {
  name: Word('выталкивать', 3),
  singular1stPerson: Word('выталкиваю', 3),
  singular2ndPerson: Word('выталкиваешь', 3),
  singular3rdPerson: Word('выталкивает', 3),
  plural1stPerson: Word('выталкиваем', 3),
  plural2ndPerson: Word('выталкиваете', 3),
  plural3rdPerson: Word('выталкивают', 3),
  masculinePast: Word('выталкивал', 3),
  femininePast: Word('выталкивала', 3),
  neuterPast: Word('выталкивало', 3),
  pluralPast: Word('выталкивали', 3),
  imperativeInformal: Word('выталкивай', 3),
  imperativeFormal: Word('выталкивайте', 3),
  imperfect: [],
};

perfectVerbs.set(выталкивать.name.text, выталкивать);

export { выталкивать };