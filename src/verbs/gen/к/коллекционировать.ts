import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const коллекционировать: PerfectVerb = {
  name: Word('коллекционировать', 10),
  singular1stPerson: Word('коллекционирую', 10),
  singular2ndPerson: Word('коллекционируешь', 10),
  singular3rdPerson: Word('коллекционирует', 10),
  plural1stPerson: Word('коллекционируем', 10),
  plural2ndPerson: Word('коллекционируете', 10),
  plural3rdPerson: Word('коллекционируют', 10),
  masculinePast: Word('коллекционировал', 10),
  femininePast: Word('коллекционировала', 10),
  neuterPast: Word('коллекционировало', 10),
  pluralPast: Word('коллекционировали', 10),
  imperativeInformal: Word('коллекционируй', 10),
  imperativeFormal: Word('коллекционируйте', 10),
  imperfect: [],
};

perfectVerbs.set(коллекционировать.name.text, коллекционировать);

export { коллекционировать };