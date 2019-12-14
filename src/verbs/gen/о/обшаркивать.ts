import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обшаркивать: PerfectVerb = {
  name: Word('обшаркивать', 3),
  singular1stPerson: Word('обшаркиваю', 3),
  singular2ndPerson: Word('обшаркиваешь', 3),
  singular3rdPerson: Word('обшаркивает', 3),
  plural1stPerson: Word('обшаркиваем', 3),
  plural2ndPerson: Word('обшаркиваете', 3),
  plural3rdPerson: Word('обшаркивают', 3),
  masculinePast: Word('обшаркивал', 3),
  femininePast: Word('обшаркивала', 3),
  neuterPast: Word('обшаркивало', 3),
  pluralPast: Word('обшаркивали', 3),
  imperativeInformal: Word('обшаркивай', 3),
  imperativeFormal: Word('обшаркивайте', 3),
  imperfect: [],
};

perfectVerbs.set(обшаркивать.name.text, обшаркивать);

export { обшаркивать };