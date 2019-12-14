import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стопорить: PerfectVerb = {
  name: Word('стопорить', 2),
  singular1stPerson: Word('стопорю', 2),
  singular2ndPerson: Word('стопоришь', 2),
  singular3rdPerson: Word('стопорит', 2),
  plural1stPerson: Word('стопорим', 2),
  plural2ndPerson: Word('стопорите', 2),
  plural3rdPerson: Word('стопорят', 2),
  masculinePast: Word('стопорил', 2),
  femininePast: Word('стопорила', 2),
  neuterPast: Word('стопорило', 2),
  pluralPast: Word('стопорили', 2),
  imperativeInformal: Word('стопори', 2),
  imperativeFormal: Word('стопорьте', 2),
  imperfect: [],
};

perfectVerbs.set(стопорить.name.text, стопорить);

export { стопорить };