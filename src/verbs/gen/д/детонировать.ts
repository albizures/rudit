import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const детонировать: PerfectVerb = {
  name: Word('детонировать', 5),
  singular1stPerson: Word('детонирую', 5),
  singular2ndPerson: Word('детонируешь', 5),
  singular3rdPerson: Word('детонирует', 5),
  plural1stPerson: Word('детонируем', 5),
  plural2ndPerson: Word('детонируете', 5),
  plural3rdPerson: Word('детонируют', 5),
  masculinePast: Word('детонировал', 5),
  femininePast: Word('детонировала', 5),
  neuterPast: Word('детонировало', 5),
  pluralPast: Word('детонировали', 5),
  imperativeInformal: Word('детонируй', 5),
  imperativeFormal: Word('детонируйте', 5),
  imperfect: [],
};

perfectVerbs.set(детонировать.name.text, детонировать);

export { детонировать };