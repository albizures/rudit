import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умалчивать: PerfectVerb = {
  name: Word('умалчивать', 2),
  singular1stPerson: Word('умалчиваю', 2),
  singular2ndPerson: Word('умалчиваешь', 2),
  singular3rdPerson: Word('умалчивает', 2),
  plural1stPerson: Word('умалчиваем', 2),
  plural2ndPerson: Word('умалчиваете', 2),
  plural3rdPerson: Word('умалчивают', 2),
  masculinePast: Word('умалчивал', 2),
  femininePast: Word('умалчивала', 2),
  neuterPast: Word('умалчивало', 2),
  pluralPast: Word('умалчивали', 2),
  imperativeInformal: Word('умалчивай', 2),
  imperativeFormal: Word('умалчивайте', 2),
  imperfect: [],
};

perfectVerbs.set(умалчивать.name.text, умалчивать);

export { умалчивать };