import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переговорить: PerfectVerb = {
  name: Word('переговорить', 9),
  singular1stPerson: Word('переговорю', 9),
  singular2ndPerson: Word('переговоришь', 9),
  singular3rdPerson: Word('переговорит', 9),
  plural1stPerson: Word('переговорим', 9),
  plural2ndPerson: Word('переговорите', 9),
  plural3rdPerson: Word('переговорят', 9),
  masculinePast: Word('переговорил', 9),
  femininePast: Word('переговорила', 9),
  neuterPast: Word('переговорило', 9),
  pluralPast: Word('переговорили', 9),
  imperativeInformal: Word('переговори', 9),
  imperativeFormal: Word('переговорите', 9),
  imperfect: [],
};

perfectVerbs.set(переговорить.name.text, переговорить);

export { переговорить };