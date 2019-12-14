import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отворачивать: PerfectVerb = {
  name: Word('отворачивать', 5),
  singular1stPerson: Word('отворачиваю', 5),
  singular2ndPerson: Word('отворачиваешь', 5),
  singular3rdPerson: Word('отворачивает', 5),
  plural1stPerson: Word('отворачиваем', 5),
  plural2ndPerson: Word('отворачиваете', 5),
  plural3rdPerson: Word('отворачивают', 5),
  masculinePast: Word('отворачивал', 5),
  femininePast: Word('отворачивала', 5),
  neuterPast: Word('отворачивало', 5),
  pluralPast: Word('отворачивали', 5),
  imperativeInformal: Word('отворачивай', 5),
  imperativeFormal: Word('отворачивайте', 5),
  imperfect: ['отвернуть'],
};

perfectVerbs.set(отворачивать.name.text, отворачивать);

export { отворачивать };