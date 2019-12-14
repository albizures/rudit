import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вшивать: PerfectVerb = {
  name: Word('вшивать', 4),
  singular1stPerson: Word('вшиваю', 4),
  singular2ndPerson: Word('вшиваешь', 4),
  singular3rdPerson: Word('вшивает', 4),
  plural1stPerson: Word('вшиваем', 4),
  plural2ndPerson: Word('вшиваете', 4),
  plural3rdPerson: Word('вшивают', 4),
  masculinePast: Word('вшивал', 4),
  femininePast: Word('вшивала', 4),
  neuterPast: Word('вшивало', 4),
  pluralPast: Word('вшивали', 4),
  imperativeInformal: Word('вшивай', 4),
  imperativeFormal: Word('вшивайте', 4),
  imperfect: [],
};

perfectVerbs.set(вшивать.name.text, вшивать);

export { вшивать };