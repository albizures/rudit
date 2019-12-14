import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрушивать: PerfectVerb = {
  name: Word('обрушивать', 3),
  singular1stPerson: Word('обрушиваю', 3),
  singular2ndPerson: Word('обрушиваешь', 3),
  singular3rdPerson: Word('обрушивает', 3),
  plural1stPerson: Word('обрушиваем', 3),
  plural2ndPerson: Word('обрушиваете', 3),
  plural3rdPerson: Word('обрушивают', 3),
  masculinePast: Word('обрушивал', 3),
  femininePast: Word('обрушивала', 3),
  neuterPast: Word('обрушивало', 3),
  pluralPast: Word('обрушивали', 3),
  imperativeInformal: Word('обрушивай', 3),
  imperativeFormal: Word('обрушивайте', 3),
  imperfect: [],
};

perfectVerbs.set(обрушивать.name.text, обрушивать);

export { обрушивать };