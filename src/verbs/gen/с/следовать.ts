import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const следовать: PerfectVerb = {
  name: Word('следовать', 2),
  singular1stPerson: Word('следую', 2),
  singular2ndPerson: Word('следуешь', 2),
  singular3rdPerson: Word('следует', 2),
  plural1stPerson: Word('следуем', 2),
  plural2ndPerson: Word('следуете', 2),
  plural3rdPerson: Word('следуют', 2),
  masculinePast: Word('следовал', 2),
  femininePast: Word('следовала', 2),
  neuterPast: Word('следовало', 2),
  pluralPast: Word('следовали', 2),
  imperativeInformal: Word('следуй', 2),
  imperativeFormal: Word('следуйте', 2),
  imperfect: ['последовать'],
};

perfectVerbs.set(следовать.name.text, следовать);

export { следовать };