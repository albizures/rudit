import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переползти: PerfectVerb = {
  name: Word('переползти', 9),
  singular1stPerson: Word('переползу', 8),
  singular2ndPerson: Word('переползёшь', 8),
  singular3rdPerson: Word('переползёт', 8),
  plural1stPerson: Word('переползём', 8),
  plural2ndPerson: Word('переползёте', 8),
  plural3rdPerson: Word('переползут', 8),
  masculinePast: Word('переполз', 5),
  femininePast: Word('переползла', 9),
  neuterPast: Word('переползло', 9),
  pluralPast: Word('переползли', 9),
  imperativeInformal: Word('переползи', 8),
  imperativeFormal: Word('переползите', 8),
  imperfect: [],
};

perfectVerbs.set(переползти.name.text, переползти);

export { переползти };