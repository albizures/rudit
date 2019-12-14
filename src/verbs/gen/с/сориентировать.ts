import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сориентировать: PerfectVerb = {
  name: Word('сориентировать', 7),
  singular1stPerson: Word('сориентирую', 7),
  singular2ndPerson: Word('сориентируешь', 7),
  singular3rdPerson: Word('сориентирует', 7),
  plural1stPerson: Word('сориентируем', 7),
  plural2ndPerson: Word('сориентируете', 7),
  plural3rdPerson: Word('сориентируют', 7),
  masculinePast: Word('сориентировал', 7),
  femininePast: Word('сориентировала', 7),
  neuterPast: Word('сориентировало', 7),
  pluralPast: Word('сориентировали', 7),
  imperativeInformal: Word('сориентируй', 7),
  imperativeFormal: Word('сориентируйте', 7),
  imperfect: [],
};

perfectVerbs.set(сориентировать.name.text, сориентировать);

export { сориентировать };