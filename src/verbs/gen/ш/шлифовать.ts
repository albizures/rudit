import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шлифовать: PerfectVerb = {
  name: Word('шлифовать', 6),
  singular1stPerson: Word('шлифую', 4),
  singular2ndPerson: Word('шлифуешь', 4),
  singular3rdPerson: Word('шлифует', 4),
  plural1stPerson: Word('шлифуем', 4),
  plural2ndPerson: Word('шлифуете', 4),
  plural3rdPerson: Word('шлифуют', 4),
  masculinePast: Word('шлифовал', 6),
  femininePast: Word('шлифовала', 6),
  neuterPast: Word('шлифовало', 6),
  pluralPast: Word('шлифовали', 6),
  imperativeInformal: Word('шлифуй', 4),
  imperativeFormal: Word('шлифуйте', 4),
  imperfect: ['отшлифовать'],
};

perfectVerbs.set(шлифовать.name.text, шлифовать);

export { шлифовать };