import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отговорить: PerfectVerb = {
  name: Word('отговорить', 7),
  singular1stPerson: Word('отговорю', 7),
  singular2ndPerson: Word('отговоришь', 7),
  singular3rdPerson: Word('отговорит', 7),
  plural1stPerson: Word('отговорим', 7),
  plural2ndPerson: Word('отговорите', 7),
  plural3rdPerson: Word('отговорят', 7),
  masculinePast: Word('отговорил', 7),
  femininePast: Word('отговорила', 7),
  neuterPast: Word('отговорило', 7),
  pluralPast: Word('отговорили', 7),
  imperativeInformal: Word('отговори', 7),
  imperativeFormal: Word('отговорите', 7),
  imperfect: [],
};

perfectVerbs.set(отговорить.name.text, отговорить);

export { отговорить };