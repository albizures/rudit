import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переучить: PerfectVerb = {
  name: Word('переучить', 6),
  singular1stPerson: Word('переучу', 6),
  singular2ndPerson: Word('переучишь', 4),
  singular3rdPerson: Word('переучит', 4),
  plural1stPerson: Word('переучим', 4),
  plural2ndPerson: Word('переучите', 4),
  plural3rdPerson: Word('переучат', 4),
  masculinePast: Word('переучил', 6),
  femininePast: Word('переучила', 6),
  neuterPast: Word('переучило', 6),
  pluralPast: Word('переучили', 6),
  imperativeInformal: Word('переучи', 6),
  imperativeFormal: Word('переучите', 6),
  imperfect: [],
};

perfectVerbs.set(переучить.name.text, переучить);

export { переучить };