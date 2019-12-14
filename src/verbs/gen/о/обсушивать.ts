import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обсушивать: PerfectVerb = {
  name: Word('обсушивать', 3),
  singular1stPerson: Word('обсушиваю', 3),
  singular2ndPerson: Word('обсушиваешь', 3),
  singular3rdPerson: Word('обсушивает', 3),
  plural1stPerson: Word('обсушиваем', 3),
  plural2ndPerson: Word('обсушиваете', 3),
  plural3rdPerson: Word('обсушивают', 3),
  masculinePast: Word('обсушивал', 3),
  femininePast: Word('обсушивала', 3),
  neuterPast: Word('обсушивало', 3),
  pluralPast: Word('обсушивали', 3),
  imperativeInformal: Word('обсушивай', 3),
  imperativeFormal: Word('обсушивайте', 3),
  imperfect: [],
};

perfectVerbs.set(обсушивать.name.text, обсушивать);

export { обсушивать };