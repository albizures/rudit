import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рисовать: PerfectVerb = {
  name: Word('рисовать', 5),
  singular1stPerson: Word('рисую', 3),
  singular2ndPerson: Word('рисуешь', 3),
  singular3rdPerson: Word('рисует', 3),
  plural1stPerson: Word('рисуем', 3),
  plural2ndPerson: Word('рисуете', 3),
  plural3rdPerson: Word('рисуют', 3),
  masculinePast: Word('рисовал', 5),
  femininePast: Word('рисовала', 5),
  neuterPast: Word('рисовало', 5),
  pluralPast: Word('рисовали', 5),
  imperativeInformal: Word('рисуй', 3),
  imperativeFormal: Word('рисуйте', 3),
  imperfect: ['нарисовать'],
};

perfectVerbs.set(рисовать.name.text, рисовать);

export { рисовать };