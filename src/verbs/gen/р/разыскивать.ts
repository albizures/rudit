import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разыскивать: PerfectVerb = {
  name: Word('разыскивать', 3),
  singular1stPerson: Word('разыскиваю', 3),
  singular2ndPerson: Word('разыскиваешь', 3),
  singular3rdPerson: Word('разыскивает', 3),
  plural1stPerson: Word('разыскиваем', 3),
  plural2ndPerson: Word('разыскиваете', 3),
  plural3rdPerson: Word('разыскивают', 3),
  masculinePast: Word('разыскивал', 3),
  femininePast: Word('разыскивала', 3),
  neuterPast: Word('разыскивало', 3),
  pluralPast: Word('разыскивали', 3),
  imperativeInformal: Word('разыскивай', 3),
  imperativeFormal: Word('разыскивайте', 3),
  imperfect: [],
};

perfectVerbs.set(разыскивать.name.text, разыскивать);

export { разыскивать };