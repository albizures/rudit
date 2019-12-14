import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обменивать: PerfectVerb = {
  name: Word('обменивать', 3),
  singular1stPerson: Word('обмениваю', 3),
  singular2ndPerson: Word('обмениваешь', 3),
  singular3rdPerson: Word('обменивает', 3),
  plural1stPerson: Word('обмениваем', 3),
  plural2ndPerson: Word('обмениваете', 3),
  plural3rdPerson: Word('обменивают', 3),
  masculinePast: Word('обменивал', 3),
  femininePast: Word('обменивала', 3),
  neuterPast: Word('обменивало', 3),
  pluralPast: Word('обменивали', 3),
  imperativeInformal: Word('обменивай', 3),
  imperativeFormal: Word('обменивайте', 3),
  imperfect: [],
};

perfectVerbs.set(обменивать.name.text, обменивать);

export { обменивать };