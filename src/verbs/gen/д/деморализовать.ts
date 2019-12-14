import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const деморализовать: PerfectVerb = {
  name: Word('деморализовать', 11),
  singular1stPerson: Word('деморализую', 9),
  singular2ndPerson: Word('деморализуешь', 9),
  singular3rdPerson: Word('деморализует', 9),
  plural1stPerson: Word('деморализуем', 9),
  plural2ndPerson: Word('деморализуете', 9),
  plural3rdPerson: Word('деморализуют', 9),
  masculinePast: Word('деморализовал', 11),
  femininePast: Word('деморализовала', 11),
  neuterPast: Word('деморализовало', 11),
  pluralPast: Word('деморализовали', 11),
  imperativeInformal: Word('деморализуй', 9),
  imperativeFormal: Word('деморализуйте', 9),
  imperfect: [],
};

perfectVerbs.set(деморализовать.name.text, деморализовать);

export { деморализовать };