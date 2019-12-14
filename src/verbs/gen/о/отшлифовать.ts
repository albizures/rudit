import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отшлифовать: PerfectVerb = {
  name: Word('отшлифовать', 8),
  singular1stPerson: Word('отшлифую', 6),
  singular2ndPerson: Word('отшлифуешь', 6),
  singular3rdPerson: Word('отшлифует', 6),
  plural1stPerson: Word('отшлифуем', 6),
  plural2ndPerson: Word('отшлифуете', 6),
  plural3rdPerson: Word('отшлифуют', 6),
  masculinePast: Word('отшлифовал', 8),
  femininePast: Word('отшлифовала', 8),
  neuterPast: Word('отшлифовало', 8),
  pluralPast: Word('отшлифовали', 8),
  imperativeInformal: Word('отшлифуй', 6),
  imperativeFormal: Word('отшлифуйте', 6),
  imperfect: ['шлифовать'],
};

perfectVerbs.set(отшлифовать.name.text, отшлифовать);

export { отшлифовать };