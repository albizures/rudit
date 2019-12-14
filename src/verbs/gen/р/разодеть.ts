import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разодеть: PerfectVerb = {
  name: Word('разодеть', 5),
  singular1stPerson: Word('разодену', 5),
  singular2ndPerson: Word('разоденешь', 5),
  singular3rdPerson: Word('разоденет', 5),
  plural1stPerson: Word('разоденем', 5),
  plural2ndPerson: Word('разоденете', 5),
  plural3rdPerson: Word('разоденут', 5),
  masculinePast: Word('разодел', 5),
  femininePast: Word('разодела', 5),
  neuterPast: Word('разодело', 5),
  pluralPast: Word('разодели', 5),
  imperativeInformal: Word('разодень', 5),
  imperativeFormal: Word('разоденьте', 5),
  imperfect: [],
};

perfectVerbs.set(разодеть.name.text, разодеть);

export { разодеть };