import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разравнивать: PerfectVerb = {
  name: Word('разравнивать', 4),
  singular1stPerson: Word('разравниваю', 4),
  singular2ndPerson: Word('разравниваешь', 4),
  singular3rdPerson: Word('разравнивает', 4),
  plural1stPerson: Word('разравниваем', 4),
  plural2ndPerson: Word('разравниваете', 4),
  plural3rdPerson: Word('разравнивают', 4),
  masculinePast: Word('разравнивал', 4),
  femininePast: Word('разравнивала', 4),
  neuterPast: Word('разравнивало', 4),
  pluralPast: Word('разравнивали', 4),
  imperativeInformal: Word('разравнивай', 4),
  imperativeFormal: Word('разравнивайте', 4),
  imperfect: [],
};

perfectVerbs.set(разравнивать.name.text, разравнивать);

export { разравнивать };