import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const резонировать: PerfectVerb = {
  name: Word('резонировать', 5),
  singular1stPerson: Word('резонирую', 5),
  singular2ndPerson: Word('резонируешь', 5),
  singular3rdPerson: Word('резонирует', 5),
  plural1stPerson: Word('резонируем', 5),
  plural2ndPerson: Word('резонируете', 5),
  plural3rdPerson: Word('резонируют', 5),
  masculinePast: Word('резонировал', 5),
  femininePast: Word('резонировала', 5),
  neuterPast: Word('резонировало', 5),
  pluralPast: Word('резонировали', 5),
  imperativeInformal: Word('резонируй', 5),
  imperativeFormal: Word('резонируйте', 5),
  imperfect: [],
};

perfectVerbs.set(резонировать.name.text, резонировать);

export { резонировать };