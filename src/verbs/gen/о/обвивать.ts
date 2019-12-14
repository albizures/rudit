import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвивать: PerfectVerb = {
  name: Word('обвивать', 5),
  singular1stPerson: Word('обвиваю', 5),
  singular2ndPerson: Word('обвиваешь', 5),
  singular3rdPerson: Word('обвивает', 5),
  plural1stPerson: Word('обвиваем', 5),
  plural2ndPerson: Word('обвиваете', 5),
  plural3rdPerson: Word('обвивают', 5),
  masculinePast: Word('обвивал', 5),
  femininePast: Word('обвивала', 5),
  neuterPast: Word('обвивало', 5),
  pluralPast: Word('обвивали', 5),
  imperativeInformal: Word('обвивай', 5),
  imperativeFormal: Word('обвивайте', 5),
  imperfect: [],
};

perfectVerbs.set(обвивать.name.text, обвивать);

export { обвивать };