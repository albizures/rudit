import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const штурмовать: PerfectVerb = {
  name: Word('штурмовать', 7),
  singular1stPerson: Word('штурмую', 5),
  singular2ndPerson: Word('штурмуешь', 5),
  singular3rdPerson: Word('штурмует', 5),
  plural1stPerson: Word('штурмуем', 5),
  plural2ndPerson: Word('штурмуете', 5),
  plural3rdPerson: Word('штурмуют', 5),
  masculinePast: Word('штурмовал', 7),
  femininePast: Word('штурмовала', 7),
  neuterPast: Word('штурмовало', 7),
  pluralPast: Word('штурмовали', 7),
  imperativeInformal: Word('штурмуй', 5),
  imperativeFormal: Word('штурмуйте', 5),
  imperfect: [],
};

perfectVerbs.set(штурмовать.name.text, штурмовать);

export { штурмовать };