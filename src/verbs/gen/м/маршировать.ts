import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const маршировать: PerfectVerb = {
  name: Word('маршировать', 8),
  singular1stPerson: Word('марширую', 6),
  singular2ndPerson: Word('маршируешь', 6),
  singular3rdPerson: Word('марширует', 6),
  plural1stPerson: Word('маршируем', 6),
  plural2ndPerson: Word('маршируете', 6),
  plural3rdPerson: Word('маршируют', 6),
  masculinePast: Word('маршировал', 8),
  femininePast: Word('маршировала', 8),
  neuterPast: Word('маршировало', 8),
  pluralPast: Word('маршировали', 8),
  imperativeInformal: Word('маршируй', 6),
  imperativeFormal: Word('маршируйте', 6),
  imperfect: [],
};

perfectVerbs.set(маршировать.name.text, маршировать);

export { маршировать };