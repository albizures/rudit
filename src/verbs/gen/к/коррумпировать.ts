import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const коррумпировать: PerfectVerb = {
  name: Word('коррумпировать', 7),
  singular1stPerson: Word('коррумпирую', 7),
  singular2ndPerson: Word('коррумпируешь', 7),
  singular3rdPerson: Word('коррумпирует', 7),
  plural1stPerson: Word('коррумпируем', 7),
  plural2ndPerson: Word('коррумпируете', 7),
  plural3rdPerson: Word('коррумпируют', 7),
  masculinePast: Word('коррумпировал', 7),
  femininePast: Word('коррумпировала', 7),
  neuterPast: Word('коррумпировало', 7),
  pluralPast: Word('коррумпировали', 7),
  imperativeInformal: Word('коррумпируй', 7),
  imperativeFormal: Word('коррумпируйте', 7),
  imperfect: [],
};

perfectVerbs.set(коррумпировать.name.text, коррумпировать);

export { коррумпировать };