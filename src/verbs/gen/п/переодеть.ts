import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переодеть: PerfectVerb = {
  name: Word('переодеть', 6),
  singular1stPerson: Word('переодену', 6),
  singular2ndPerson: Word('переоденешь', 6),
  singular3rdPerson: Word('переоденет', 6),
  plural1stPerson: Word('переоденем', 6),
  plural2ndPerson: Word('переоденете', 6),
  plural3rdPerson: Word('переоденут', 6),
  masculinePast: Word('переодел', 6),
  femininePast: Word('переодела', 6),
  neuterPast: Word('переодело', 6),
  pluralPast: Word('переодели', 6),
  imperativeInformal: Word('переодень', 6),
  imperativeFormal: Word('переоденьте', 6),
  imperfect: [],
};

perfectVerbs.set(переодеть.name.text, переодеть);

export { переодеть };