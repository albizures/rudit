import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натурализовать: PerfectVerb = {
  name: Word('натурализовать', 11),
  singular1stPerson: Word('натурализую', 9),
  singular2ndPerson: Word('натурализуешь', 9),
  singular3rdPerson: Word('натурализует', 9),
  plural1stPerson: Word('натурализуем', 9),
  plural2ndPerson: Word('натурализуете', 9),
  plural3rdPerson: Word('натурализуют', 9),
  masculinePast: Word('натурализовал', 11),
  femininePast: Word('натурализовала', 11),
  neuterPast: Word('натурализовало', 11),
  pluralPast: Word('натурализовали', 11),
  imperativeInformal: Word('натурализуй', 9),
  imperativeFormal: Word('натурализуйте', 9),
  imperfect: [],
};

perfectVerbs.set(натурализовать.name.text, натурализовать);

export { натурализовать };