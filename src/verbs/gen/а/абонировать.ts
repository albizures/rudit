import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const абонировать: PerfectVerb = {
  name: Word('абонировать', 4),
  singular1stPerson: Word('абонирую', 4),
  singular2ndPerson: Word('абонируешь', 4),
  singular3rdPerson: Word('абонирует', 4),
  plural1stPerson: Word('абонируем', 4),
  plural2ndPerson: Word('абонируете', 4),
  plural3rdPerson: Word('абонируют', 4),
  masculinePast: Word('абонировал', 4),
  femininePast: Word('абонировала', 4),
  neuterPast: Word('абонировало', 4),
  pluralPast: Word('абонировали', 4),
  imperativeInformal: Word('абонируй', 4),
  imperativeFormal: Word('абонируйте', 4),
  imperfect: [],
};

perfectVerbs.set(абонировать.name.text, абонировать);

export { абонировать };