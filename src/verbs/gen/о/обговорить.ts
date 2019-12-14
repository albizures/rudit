import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обговорить: PerfectVerb = {
  name: Word('обговорить', 7),
  singular1stPerson: Word('обговорю', 7),
  singular2ndPerson: Word('обговоришь', 7),
  singular3rdPerson: Word('обговорит', 7),
  plural1stPerson: Word('обговорим', 7),
  plural2ndPerson: Word('обговорите', 7),
  plural3rdPerson: Word('обговорят', 7),
  masculinePast: Word('обговорил', 7),
  femininePast: Word('обговорила', 7),
  neuterPast: Word('обговорило', 7),
  pluralPast: Word('обговорили', 7),
  imperativeInformal: Word('обговори', 7),
  imperativeFormal: Word('обговорите', 7),
  imperfect: [],
};

perfectVerbs.set(обговорить.name.text, обговорить);

export { обговорить };