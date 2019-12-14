import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсеивать: PerfectVerb = {
  name: Word('отсеивать', 3),
  singular1stPerson: Word('отсеиваю', 3),
  singular2ndPerson: Word('отсеиваешь', 3),
  singular3rdPerson: Word('отсеивает', 3),
  plural1stPerson: Word('отсеиваем', 3),
  plural2ndPerson: Word('отсеиваете', 3),
  plural3rdPerson: Word('отсеивают', 3),
  masculinePast: Word('отсеивал', 3),
  femininePast: Word('отсеивала', 3),
  neuterPast: Word('отсеивало', 3),
  pluralPast: Word('отсеивали', 3),
  imperativeInformal: Word('отсеивай', 3),
  imperativeFormal: Word('отсеивайте', 3),
  imperfect: [],
};

perfectVerbs.set(отсеивать.name.text, отсеивать);

export { отсеивать };