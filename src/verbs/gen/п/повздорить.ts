import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повздорить: PerfectVerb = {
  name: Word('повздорить', 5),
  singular1stPerson: Word('повздорю', 5),
  singular2ndPerson: Word('повздоришь', 5),
  singular3rdPerson: Word('повздорит', 5),
  plural1stPerson: Word('повздорим', 5),
  plural2ndPerson: Word('повздорите', 5),
  plural3rdPerson: Word('повздорят', 5),
  masculinePast: Word('повздорил', 5),
  femininePast: Word('повздорила', 5),
  neuterPast: Word('повздорило', 5),
  pluralPast: Word('повздорили', 5),
  imperativeInformal: Word('повздорь', 5),
  imperativeFormal: Word('повздорьте', 5),
  imperfect: [],
};

perfectVerbs.set(повздорить.name.text, повздорить);

export { повздорить };