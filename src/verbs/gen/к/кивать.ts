import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кивать: PerfectVerb = {
  name: Word('кивать', 3),
  singular1stPerson: Word('киваю', 3),
  singular2ndPerson: Word('киваешь', 3),
  singular3rdPerson: Word('кивает', 3),
  plural1stPerson: Word('киваем', 3),
  plural2ndPerson: Word('киваете', 3),
  plural3rdPerson: Word('кивают', 3),
  masculinePast: Word('кивал', 3),
  femininePast: Word('кивала', 3),
  neuterPast: Word('кивало', 3),
  pluralPast: Word('кивали', 3),
  imperativeInformal: Word('кивай', 3),
  imperativeFormal: Word('кивайте', 3),
  imperfect: ['кивнуть'],
};

perfectVerbs.set(кивать.name.text, кивать);

export { кивать };