import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const процитировать: PerfectVerb = {
  name: Word('процитировать', 6),
  singular1stPerson: Word('процитирую', 6),
  singular2ndPerson: Word('процитируешь', 6),
  singular3rdPerson: Word('процитирует', 6),
  plural1stPerson: Word('процитируем', 6),
  plural2ndPerson: Word('процитируете', 6),
  plural3rdPerson: Word('процитируют', 6),
  masculinePast: Word('процитировал', 6),
  femininePast: Word('процитировала', 6),
  neuterPast: Word('процитировало', 6),
  pluralPast: Word('процитировали', 6),
  imperativeInformal: Word('процитируй', 6),
  imperativeFormal: Word('процитируйте', 6),
  imperfect: [],
};

perfectVerbs.set(процитировать.name.text, процитировать);

export { процитировать };