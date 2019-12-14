import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насорить: PerfectVerb = {
  name: Word('насорить', 5),
  singular1stPerson: Word('насорю', 5),
  singular2ndPerson: Word('насоришь', 5),
  singular3rdPerson: Word('насорит', 5),
  plural1stPerson: Word('насорим', 5),
  plural2ndPerson: Word('насорите', 5),
  plural3rdPerson: Word('насорят', 5),
  masculinePast: Word('насорил', 5),
  femininePast: Word('насорила', 5),
  neuterPast: Word('насорило', 5),
  pluralPast: Word('насорили', 5),
  imperativeInformal: Word('насори', 5),
  imperativeFormal: Word('насорите', 5),
  imperfect: [],
};

perfectVerbs.set(насорить.name.text, насорить);

export { насорить };