import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const констатировать: PerfectVerb = {
  name: Word('констатировать', 7),
  singular1stPerson: Word('констатирую', 7),
  singular2ndPerson: Word('констатируешь', 7),
  singular3rdPerson: Word('констатирует', 7),
  plural1stPerson: Word('констатируем', 7),
  plural2ndPerson: Word('констатируете', 7),
  plural3rdPerson: Word('констатируют', 7),
  masculinePast: Word('констатировал', 7),
  femininePast: Word('констатировала', 7),
  neuterPast: Word('констатировало', 7),
  pluralPast: Word('констатировали', 7),
  imperativeInformal: Word('констатируй', 7),
  imperativeFormal: Word('констатируйте', 7),
  imperfect: [],
};

perfectVerbs.set(констатировать.name.text, констатировать);

export { констатировать };