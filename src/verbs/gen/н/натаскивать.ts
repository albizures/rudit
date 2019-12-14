import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натаскивать: PerfectVerb = {
  name: Word('натаскивать', 3),
  singular1stPerson: Word('натаскиваю', 3),
  singular2ndPerson: Word('натаскиваешь', 3),
  singular3rdPerson: Word('натаскивает', 3),
  plural1stPerson: Word('натаскиваем', 3),
  plural2ndPerson: Word('натаскиваете', 3),
  plural3rdPerson: Word('натаскивают', 3),
  masculinePast: Word('натаскивал', 3),
  femininePast: Word('натаскивала', 3),
  neuterPast: Word('натаскивало', 3),
  pluralPast: Word('натаскивали', 3),
  imperativeInformal: Word('натаскивай', 3),
  imperativeFormal: Word('натаскивайте', 3),
  imperfect: [],
};

perfectVerbs.set(натаскивать.name.text, натаскивать);

export { натаскивать };