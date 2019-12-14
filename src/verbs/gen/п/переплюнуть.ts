import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переплюнуть: PerfectVerb = {
  name: Word('переплюнуть', 6),
  singular1stPerson: Word('переплюну', 6),
  singular2ndPerson: Word('переплюнешь', 6),
  singular3rdPerson: Word('переплюнет', 6),
  plural1stPerson: Word('переплюнем', 6),
  plural2ndPerson: Word('переплюнете', 6),
  plural3rdPerson: Word('переплюнут', 6),
  masculinePast: Word('переплюнул', 6),
  femininePast: Word('переплюнула', 6),
  neuterPast: Word('переплюнуло', 6),
  pluralPast: Word('переплюнули', 6),
  imperativeInformal: Word('переплюнь', 6),
  imperativeFormal: Word('переплюньте', 6),
  imperfect: [],
};

perfectVerbs.set(переплюнуть.name.text, переплюнуть);

export { переплюнуть };