import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезличивать: PerfectVerb = {
  name: Word('обезличивать', 5),
  singular1stPerson: Word('обезличиваю', 5),
  singular2ndPerson: Word('обезличиваешь', 5),
  singular3rdPerson: Word('обезличивает', 5),
  plural1stPerson: Word('обезличиваем', 5),
  plural2ndPerson: Word('обезличиваете', 5),
  plural3rdPerson: Word('обезличивают', 5),
  masculinePast: Word('обезличивал', 5),
  femininePast: Word('обезличивала', 5),
  neuterPast: Word('обезличивало', 5),
  pluralPast: Word('обезличивали', 5),
  imperativeInformal: Word('обезличивай', 5),
  imperativeFormal: Word('обезличивайте', 5),
  imperfect: [],
};

perfectVerbs.set(обезличивать.name.text, обезличивать);

export { обезличивать };