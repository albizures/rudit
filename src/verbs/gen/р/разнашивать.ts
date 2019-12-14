import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разнашивать: PerfectVerb = {
  name: Word('разнашивать', 4),
  singular1stPerson: Word('разнашиваю', 4),
  singular2ndPerson: Word('разнашиваешь', 4),
  singular3rdPerson: Word('разнашивает', 4),
  plural1stPerson: Word('разнашиваем', 4),
  plural2ndPerson: Word('разнашиваете', 4),
  plural3rdPerson: Word('разнашивают', 4),
  masculinePast: Word('разнашивал', 4),
  femininePast: Word('разнашивала', 4),
  neuterPast: Word('разнашивало', 4),
  pluralPast: Word('разнашивали', 4),
  imperativeInformal: Word('разнашивай', 4),
  imperativeFormal: Word('разнашивайте', 4),
  imperfect: [],
};

perfectVerbs.set(разнашивать.name.text, разнашивать);

export { разнашивать };