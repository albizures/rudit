import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переиначить: PerfectVerb = {
  name: Word('переиначить', 6),
  singular1stPerson: Word('переиначу', 6),
  singular2ndPerson: Word('переиначишь', 6),
  singular3rdPerson: Word('переиначит', 6),
  plural1stPerson: Word('переиначим', 6),
  plural2ndPerson: Word('переиначите', 6),
  plural3rdPerson: Word('переиначат', 6),
  masculinePast: Word('переиначил', 6),
  femininePast: Word('переиначила', 6),
  neuterPast: Word('переиначило', 6),
  pluralPast: Word('переиначили', 6),
  imperativeInformal: Word('переиначь', 6),
  imperativeFormal: Word('переиначьте', 6),
  imperfect: [],
};

perfectVerbs.set(переиначить.name.text, переиначить);

export { переиначить };