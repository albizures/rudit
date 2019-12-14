import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпячивать: PerfectVerb = {
  name: Word('выпячивать', 3),
  singular1stPerson: Word('выпячиваю', 3),
  singular2ndPerson: Word('выпячиваешь', 3),
  singular3rdPerson: Word('выпячивает', 3),
  plural1stPerson: Word('выпячиваем', 3),
  plural2ndPerson: Word('выпячиваете', 3),
  plural3rdPerson: Word('выпячивают', 3),
  masculinePast: Word('выпячивал', 3),
  femininePast: Word('выпячивала', 3),
  neuterPast: Word('выпячивало', 3),
  pluralPast: Word('выпячивали', 3),
  imperativeInformal: Word('выпячивай', 3),
  imperativeFormal: Word('выпячивайте', 3),
  imperfect: [],
};

perfectVerbs.set(выпячивать.name.text, выпячивать);

export { выпячивать };