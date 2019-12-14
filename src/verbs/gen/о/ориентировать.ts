import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ориентировать: PerfectVerb = {
  name: Word('ориентировать', 6),
  singular1stPerson: Word('ориентирую', 6),
  singular2ndPerson: Word('ориентируешь', 6),
  singular3rdPerson: Word('ориентирует', 6),
  plural1stPerson: Word('ориентируем', 6),
  plural2ndPerson: Word('ориентируете', 6),
  plural3rdPerson: Word('ориентируют', 6),
  masculinePast: Word('ориентировал', 6),
  femininePast: Word('ориентировала', 6),
  neuterPast: Word('ориентировало', 6),
  pluralPast: Word('ориентировали', 6),
  imperativeInformal: Word('ориентируй', 6),
  imperativeFormal: Word('ориентируйте', 6),
  imperfect: [],
};

perfectVerbs.set(ориентировать.name.text, ориентировать);

export { ориентировать };