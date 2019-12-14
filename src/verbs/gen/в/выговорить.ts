import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выговорить: PerfectVerb = {
  name: Word('выговорить', 1),
  singular1stPerson: Word('выговорю', 1),
  singular2ndPerson: Word('выговоришь', 1),
  singular3rdPerson: Word('выговорит', 1),
  plural1stPerson: Word('выговорим', 1),
  plural2ndPerson: Word('выговорите', 1),
  plural3rdPerson: Word('выговорят', 1),
  masculinePast: Word('выговорил', 1),
  femininePast: Word('выговорила', 1),
  neuterPast: Word('выговорило', 1),
  pluralPast: Word('выговорили', 1),
  imperativeInformal: Word('выговори', 1),
  imperativeFormal: Word('выговорите', 1),
  imperfect: [],
};

perfectVerbs.set(выговорить.name.text, выговорить);

export { выговорить };