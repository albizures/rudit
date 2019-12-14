import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оскальпировать: PerfectVerb = {
  name: Word('оскальпировать', 7),
  singular1stPerson: Word('оскальпирую', 7),
  singular2ndPerson: Word('оскальпируешь', 7),
  singular3rdPerson: Word('оскальпирует', 7),
  plural1stPerson: Word('оскальпируем', 7),
  plural2ndPerson: Word('оскальпируете', 7),
  plural3rdPerson: Word('оскальпируют', 7),
  masculinePast: Word('оскальпировал', 7),
  femininePast: Word('оскальпировала', 7),
  neuterPast: Word('оскальпировало', 7),
  pluralPast: Word('оскальпировали', 7),
  imperativeInformal: Word('оскальпируй', 7),
  imperativeFormal: Word('оскальпируйте', 7),
  imperfect: [],
};

perfectVerbs.set(оскальпировать.name.text, оскальпировать);

export { оскальпировать };