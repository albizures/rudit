import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкрикивать: PerfectVerb = {
  name: Word('выкрикивать', 4),
  singular1stPerson: Word('выкрикиваю', 4),
  singular2ndPerson: Word('выкрикиваешь', 4),
  singular3rdPerson: Word('выкрикивает', 4),
  plural1stPerson: Word('выкрикиваем', 4),
  plural2ndPerson: Word('выкрикиваете', 4),
  plural3rdPerson: Word('выкрикивают', 4),
  masculinePast: Word('выкрикивал', 4),
  femininePast: Word('выкрикивала', 4),
  neuterPast: Word('выкрикивало', 4),
  pluralPast: Word('выкрикивали', 4),
  imperativeInformal: Word('выкрикивай', 4),
  imperativeFormal: Word('выкрикивайте', 4),
  imperfect: [],
};

perfectVerbs.set(выкрикивать.name.text, выкрикивать);

export { выкрикивать };