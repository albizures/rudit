import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прессовать: PerfectVerb = {
  name: Word('прессовать', 7),
  singular1stPerson: Word('прессую', 5),
  singular2ndPerson: Word('прессуешь', 5),
  singular3rdPerson: Word('прессует', 5),
  plural1stPerson: Word('прессуем', 5),
  plural2ndPerson: Word('прессуете', 5),
  plural3rdPerson: Word('прессуют', 5),
  masculinePast: Word('прессовал', 7),
  femininePast: Word('прессовала', 7),
  neuterPast: Word('прессовало', 7),
  pluralPast: Word('прессовали', 7),
  imperativeInformal: Word('прессуй', 5),
  imperativeFormal: Word('прессуйте', 5),
  imperfect: [],
};

perfectVerbs.set(прессовать.name.text, прессовать);

export { прессовать };