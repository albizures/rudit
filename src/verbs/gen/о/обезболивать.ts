import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезболивать: PerfectVerb = {
  name: Word('обезболивать', 5),
  singular1stPerson: Word('обезболиваю', 5),
  singular2ndPerson: Word('обезболиваешь', 5),
  singular3rdPerson: Word('обезболивает', 5),
  plural1stPerson: Word('обезболиваем', 5),
  plural2ndPerson: Word('обезболиваете', 5),
  plural3rdPerson: Word('обезболивают', 5),
  masculinePast: Word('обезболивал', 5),
  femininePast: Word('обезболивала', 5),
  neuterPast: Word('обезболивало', 5),
  pluralPast: Word('обезболивали', 5),
  imperativeInformal: Word('обезболивай', 5),
  imperativeFormal: Word('обезболивайте', 5),
  imperfect: [],
};

perfectVerbs.set(обезболивать.name.text, обезболивать);

export { обезболивать };