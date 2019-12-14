import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переспорить: PerfectVerb = {
  name: Word('переспорить', 6),
  singular1stPerson: Word('переспорю', 6),
  singular2ndPerson: Word('переспоришь', 6),
  singular3rdPerson: Word('переспорит', 6),
  plural1stPerson: Word('переспорим', 6),
  plural2ndPerson: Word('переспорите', 6),
  plural3rdPerson: Word('переспорят', 6),
  masculinePast: Word('переспорил', 6),
  femininePast: Word('переспорила', 6),
  neuterPast: Word('переспорило', 6),
  pluralPast: Word('переспорили', 6),
  imperativeInformal: Word('переспорь', 6),
  imperativeFormal: Word('переспорьте', 6),
  imperfect: [],
};

perfectVerbs.set(переспорить.name.text, переспорить);

export { переспорить };