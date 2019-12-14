import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const известковать: PerfectVerb = {
  name: Word('известковать', 9),
  singular1stPerson: Word('известкую', 7),
  singular2ndPerson: Word('известкуешь', 7),
  singular3rdPerson: Word('известкует', 7),
  plural1stPerson: Word('известкуем', 7),
  plural2ndPerson: Word('известкуете', 7),
  plural3rdPerson: Word('известкуют', 7),
  masculinePast: Word('известковал', 9),
  femininePast: Word('известковала', 9),
  neuterPast: Word('известковало', 9),
  pluralPast: Word('известковали', 9),
  imperativeInformal: Word('известкуй', 7),
  imperativeFormal: Word('известкуйте', 7),
  imperfect: [],
};

perfectVerbs.set(известковать.name.text, известковать);

export { известковать };