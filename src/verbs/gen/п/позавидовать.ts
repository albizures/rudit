import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позавидовать: PerfectVerb = {
  name: Word('позавидовать', 5),
  singular1stPerson: Word('позавидую', 5),
  singular2ndPerson: Word('позавидуешь', 5),
  singular3rdPerson: Word('позавидует', 5),
  plural1stPerson: Word('позавидуем', 5),
  plural2ndPerson: Word('позавидуете', 5),
  plural3rdPerson: Word('позавидуют', 5),
  masculinePast: Word('позавидовал', 5),
  femininePast: Word('позавидовала', 5),
  neuterPast: Word('позавидовало', 5),
  pluralPast: Word('позавидовали', 5),
  imperativeInformal: Word('позавидуй', 5),
  imperativeFormal: Word('позавидуйте', 5),
  imperfect: [],
};

perfectVerbs.set(позавидовать.name.text, позавидовать);

export { позавидовать };