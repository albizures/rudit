import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарисовать: PerfectVerb = {
  name: Word('нарисовать', 7),
  singular1stPerson: Word('нарисую', 5),
  singular2ndPerson: Word('нарисуешь', 5),
  singular3rdPerson: Word('нарисует', 5),
  plural1stPerson: Word('нарисуем', 5),
  plural2ndPerson: Word('нарисуете', 5),
  plural3rdPerson: Word('нарисуют', 5),
  masculinePast: Word('нарисовал', 7),
  femininePast: Word('нарисовала', 7),
  neuterPast: Word('нарисовало', 7),
  pluralPast: Word('нарисовали', 7),
  imperativeInformal: Word('нарисуй', 5),
  imperativeFormal: Word('нарисуйте', 5),
  imperfect: ['рисовать'],
};

perfectVerbs.set(нарисовать.name.text, нарисовать);

export { нарисовать };