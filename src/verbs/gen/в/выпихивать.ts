import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпихивать: PerfectVerb = {
  name: Word('выпихивать', 3),
  singular1stPerson: Word('выпихиваю', 3),
  singular2ndPerson: Word('выпихиваешь', 3),
  singular3rdPerson: Word('выпихивает', 3),
  plural1stPerson: Word('выпихиваем', 3),
  plural2ndPerson: Word('выпихиваете', 3),
  plural3rdPerson: Word('выпихивают', 3),
  masculinePast: Word('выпихивал', 3),
  femininePast: Word('выпихивала', 3),
  neuterPast: Word('выпихивало', 3),
  pluralPast: Word('выпихивали', 3),
  imperativeInformal: Word('выпихивай', 3),
  imperativeFormal: Word('выпихивайте', 3),
  imperfect: [],
};

perfectVerbs.set(выпихивать.name.text, выпихивать);

export { выпихивать };