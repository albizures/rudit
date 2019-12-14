import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отхаркивать: PerfectVerb = {
  name: Word('отхаркивать', 3),
  singular1stPerson: Word('отхаркиваю', 3),
  singular2ndPerson: Word('отхаркиваешь', 3),
  singular3rdPerson: Word('отхаркивает', 3),
  plural1stPerson: Word('отхаркиваем', 3),
  plural2ndPerson: Word('отхаркиваете', 3),
  plural3rdPerson: Word('отхаркивают', 3),
  masculinePast: Word('отхаркивал', 3),
  femininePast: Word('отхаркивала', 3),
  neuterPast: Word('отхаркивало', 3),
  pluralPast: Word('отхаркивали', 3),
  imperativeInformal: Word('отхаркивай', 3),
  imperativeFormal: Word('отхаркивайте', 3),
  imperfect: [],
};

perfectVerbs.set(отхаркивать.name.text, отхаркивать);

export { отхаркивать };