import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const паразитировать: PerfectVerb = {
  name: Word('паразитировать', 7),
  singular1stPerson: Word('паразитирую', 7),
  singular2ndPerson: Word('паразитируешь', 7),
  singular3rdPerson: Word('паразитирует', 7),
  plural1stPerson: Word('паразитируем', 7),
  plural2ndPerson: Word('паразитируете', 7),
  plural3rdPerson: Word('паразитируют', 7),
  masculinePast: Word('паразитировал', 7),
  femininePast: Word('паразитировала', 7),
  neuterPast: Word('паразитировало', 7),
  pluralPast: Word('паразитировали', 7),
  imperativeInformal: Word('паразитируй', 7),
  imperativeFormal: Word('паразитируйте', 7),
  imperfect: [],
};

perfectVerbs.set(паразитировать.name.text, паразитировать);

export { паразитировать };