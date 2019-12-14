import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переслать: PerfectVerb = {
  name: Word('переслать', 6),
  singular1stPerson: Word('перешлю', 6),
  singular2ndPerson: Word('перешлёшь', 6),
  singular3rdPerson: Word('перешлёт', 6),
  plural1stPerson: Word('перешлём', 6),
  plural2ndPerson: Word('перешлёте', 6),
  plural3rdPerson: Word('перешлют', 6),
  masculinePast: Word('переслал', 6),
  femininePast: Word('переслала', 6),
  neuterPast: Word('переслало', 6),
  pluralPast: Word('переслали', 6),
  imperativeInformal: Word('перешли', 6),
  imperativeFormal: Word('перешлите', 6),
  imperfect: [],
};

perfectVerbs.set(переслать.name.text, переслать);

export { переслать };