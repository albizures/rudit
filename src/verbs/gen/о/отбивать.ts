import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбивать: PerfectVerb = {
  name: Word('отбивать', 5),
  singular1stPerson: Word('отбиваю', 5),
  singular2ndPerson: Word('отбиваешь', 5),
  singular3rdPerson: Word('отбивает', 5),
  plural1stPerson: Word('отбиваем', 5),
  plural2ndPerson: Word('отбиваете', 5),
  plural3rdPerson: Word('отбивают', 5),
  masculinePast: Word('отбивал', 5),
  femininePast: Word('отбивала', 5),
  neuterPast: Word('отбивало', 5),
  pluralPast: Word('отбивали', 5),
  imperativeInformal: Word('отбивай', 5),
  imperativeFormal: Word('отбивайте', 5),
  imperfect: [],
};

perfectVerbs.set(отбивать.name.text, отбивать);

export { отбивать };