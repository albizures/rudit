import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const командовать: PerfectVerb = {
  name: Word('командовать', 3),
  singular1stPerson: Word('командую', 3),
  singular2ndPerson: Word('командуешь', 3),
  singular3rdPerson: Word('командует', 3),
  plural1stPerson: Word('командуем', 3),
  plural2ndPerson: Word('командуете', 3),
  plural3rdPerson: Word('командуют', 3),
  masculinePast: Word('командовал', 3),
  femininePast: Word('командовала', 3),
  neuterPast: Word('командовало', 3),
  pluralPast: Word('командовали', 3),
  imperativeInformal: Word('командуй', 3),
  imperativeFormal: Word('командуйте', 3),
  imperfect: [],
};

perfectVerbs.set(командовать.name.text, командовать);

export { командовать };