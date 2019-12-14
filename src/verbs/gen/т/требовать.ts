import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const требовать: PerfectVerb = {
  name: Word('требовать', 2),
  singular1stPerson: Word('требую', 2),
  singular2ndPerson: Word('требуешь', 2),
  singular3rdPerson: Word('требует', 2),
  plural1stPerson: Word('требуем', 2),
  plural2ndPerson: Word('требуете', 2),
  plural3rdPerson: Word('требуют', 2),
  masculinePast: Word('требовал', 2),
  femininePast: Word('требовала', 2),
  neuterPast: Word('требовало', 2),
  pluralPast: Word('требовали', 2),
  imperativeInformal: Word('требуй', 2),
  imperativeFormal: Word('требуйте', 2),
  imperfect: ['потребовать'],
};

perfectVerbs.set(требовать.name.text, требовать);

export { требовать };