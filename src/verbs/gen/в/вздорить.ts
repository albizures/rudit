import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздорить: PerfectVerb = {
  name: Word('вздорить', 3),
  singular1stPerson: Word('вздорю', 3),
  singular2ndPerson: Word('вздоришь', 3),
  singular3rdPerson: Word('вздорит', 3),
  plural1stPerson: Word('вздорим', 3),
  plural2ndPerson: Word('вздорите', 3),
  plural3rdPerson: Word('вздорят', 3),
  masculinePast: Word('вздорил', 3),
  femininePast: Word('вздорила', 3),
  neuterPast: Word('вздорило', 3),
  pluralPast: Word('вздорили', 3),
  imperativeInformal: Word('вздорь', 3),
  imperativeFormal: Word('вздорьте', 3),
  imperfect: [],
};

perfectVerbs.set(вздорить.name.text, вздорить);

export { вздорить };