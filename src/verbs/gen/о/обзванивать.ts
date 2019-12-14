import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обзванивать: PerfectVerb = {
  name: Word('обзванивать', 4),
  singular1stPerson: Word('обзваниваю', 4),
  singular2ndPerson: Word('обзваниваешь', 4),
  singular3rdPerson: Word('обзванивает', 4),
  plural1stPerson: Word('обзваниваем', 4),
  plural2ndPerson: Word('обзваниваете', 4),
  plural3rdPerson: Word('обзванивают', 4),
  masculinePast: Word('обзванивал', 4),
  femininePast: Word('обзванивала', 4),
  neuterPast: Word('обзванивало', 4),
  pluralPast: Word('обзванивали', 4),
  imperativeInformal: Word('обзванивай', 4),
  imperativeFormal: Word('обзванивайте', 4),
  imperfect: [],
};

perfectVerbs.set(обзванивать.name.text, обзванивать);

export { обзванивать };