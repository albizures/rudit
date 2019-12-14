import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разочаровать: PerfectVerb = {
  name: Word('разочаровать', 9),
  singular1stPerson: Word('разочарую', 7),
  singular2ndPerson: Word('разочаруешь', 7),
  singular3rdPerson: Word('разочарует', 7),
  plural1stPerson: Word('разочаруем', 7),
  plural2ndPerson: Word('разочаруете', 7),
  plural3rdPerson: Word('разочаруют', 7),
  masculinePast: Word('разочаровал', 9),
  femininePast: Word('разочаровала', 9),
  neuterPast: Word('разочаровало', 9),
  pluralPast: Word('разочаровали', 9),
  imperativeInformal: Word('разочаруй', 7),
  imperativeFormal: Word('разочаруйте', 7),
  imperfect: [],
};

perfectVerbs.set(разочаровать.name.text, разочаровать);

export { разочаровать };