import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позорить: PerfectVerb = {
  name: Word('позорить', 3),
  singular1stPerson: Word('позорю', 3),
  singular2ndPerson: Word('позоришь', 3),
  singular3rdPerson: Word('позорит', 3),
  plural1stPerson: Word('позорим', 3),
  plural2ndPerson: Word('позорите', 3),
  plural3rdPerson: Word('позорят', 3),
  masculinePast: Word('позорил', 3),
  femininePast: Word('позорила', 3),
  neuterPast: Word('позорило', 3),
  pluralPast: Word('позорили', 3),
  imperativeInformal: Word('позорь', 3),
  imperativeFormal: Word('позорьте', 3),
  imperfect: [],
};

perfectVerbs.set(позорить.name.text, позорить);

export { позорить };