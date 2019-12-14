import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спихивать: PerfectVerb = {
  name: Word('спихивать', 2),
  singular1stPerson: Word('спихиваю', 2),
  singular2ndPerson: Word('спихиваешь', 2),
  singular3rdPerson: Word('спихивает', 2),
  plural1stPerson: Word('спихиваем', 2),
  plural2ndPerson: Word('спихиваете', 2),
  plural3rdPerson: Word('спихивают', 2),
  masculinePast: Word('спихивал', 2),
  femininePast: Word('спихивала', 2),
  neuterPast: Word('спихивало', 2),
  pluralPast: Word('спихивали', 2),
  imperativeInformal: Word('спихивай', 2),
  imperativeFormal: Word('спихивайте', 2),
  imperfect: [],
};

perfectVerbs.set(спихивать.name.text, спихивать);

export { спихивать };