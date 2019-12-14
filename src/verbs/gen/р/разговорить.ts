import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разговорить: PerfectVerb = {
  name: Word('разговорить', 8),
  singular1stPerson: Word('разговорю', 8),
  singular2ndPerson: Word('разговоришь', 8),
  singular3rdPerson: Word('разговорит', 8),
  plural1stPerson: Word('разговорим', 8),
  plural2ndPerson: Word('разговорите', 8),
  plural3rdPerson: Word('разговорят', 8),
  masculinePast: Word('разговорил', 8),
  femininePast: Word('разговорила', 8),
  neuterPast: Word('разговорило', 8),
  pluralPast: Word('разговорили', 8),
  imperativeInformal: Word('разговори', 8),
  imperativeFormal: Word('разговорите', 8),
  imperfect: [],
};

perfectVerbs.set(разговорить.name.text, разговорить);

export { разговорить };