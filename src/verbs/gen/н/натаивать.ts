import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натаивать: PerfectVerb = {
  name: Word('натаивать', 3),
  singular1stPerson: Word('натаиваю', 3),
  singular2ndPerson: Word('натаиваешь', 3),
  singular3rdPerson: Word('натаивает', 3),
  plural1stPerson: Word('натаиваем', 3),
  plural2ndPerson: Word('натаиваете', 3),
  plural3rdPerson: Word('натаивают', 3),
  masculinePast: Word('натаивал', 3),
  femininePast: Word('натаивала', 3),
  neuterPast: Word('натаивало', 3),
  pluralPast: Word('натаивали', 3),
  imperativeInformal: Word('натаивай', 3),
  imperativeFormal: Word('натаивайте', 3),
  imperfect: [],
};

perfectVerbs.set(натаивать.name.text, натаивать);

export { натаивать };