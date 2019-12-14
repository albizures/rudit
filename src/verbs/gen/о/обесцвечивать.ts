import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обесцвечивать: PerfectVerb = {
  name: Word('обесцвечивать', 6),
  singular1stPerson: Word('обесцвечиваю', 6),
  singular2ndPerson: Word('обесцвечиваешь', 6),
  singular3rdPerson: Word('обесцвечивает', 6),
  plural1stPerson: Word('обесцвечиваем', 6),
  plural2ndPerson: Word('обесцвечиваете', 6),
  plural3rdPerson: Word('обесцвечивают', 6),
  masculinePast: Word('обесцвечивал', 6),
  femininePast: Word('обесцвечивала', 6),
  neuterPast: Word('обесцвечивало', 6),
  pluralPast: Word('обесцвечивали', 6),
  imperativeInformal: Word('обесцвечивай', 6),
  imperativeFormal: Word('обесцвечивайте', 6),
  imperfect: [],
};

perfectVerbs.set(обесцвечивать.name.text, обесцвечивать);

export { обесцвечивать };