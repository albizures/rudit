import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озонировать: PerfectVerb = {
  name: Word('озонировать', 4),
  singular1stPerson: Word('озонирую', 4),
  singular2ndPerson: Word('озонируешь', 4),
  singular3rdPerson: Word('озонирует', 4),
  plural1stPerson: Word('озонируем', 4),
  plural2ndPerson: Word('озонируете', 4),
  plural3rdPerson: Word('озонируют', 4),
  masculinePast: Word('озонировал', 4),
  femininePast: Word('озонировала', 4),
  neuterPast: Word('озонировало', 4),
  pluralPast: Word('озонировали', 4),
  imperativeInformal: Word('озонируй', 4),
  imperativeFormal: Word('озонируйте', 4),
  imperfect: [],
};

perfectVerbs.set(озонировать.name.text, озонировать);

export { озонировать };