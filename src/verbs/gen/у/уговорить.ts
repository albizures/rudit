import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уговорить: PerfectVerb = {
  name: Word('уговорить', 6),
  singular1stPerson: Word('уговорю', 6),
  singular2ndPerson: Word('уговоришь', 6),
  singular3rdPerson: Word('уговорит', 6),
  plural1stPerson: Word('уговорим', 6),
  plural2ndPerson: Word('уговорите', 6),
  plural3rdPerson: Word('уговорят', 6),
  masculinePast: Word('уговорил', 6),
  femininePast: Word('уговорила', 6),
  neuterPast: Word('уговорило', 6),
  pluralPast: Word('уговорили', 6),
  imperativeInformal: Word('уговори', 6),
  imperativeFormal: Word('уговорите', 6),
  imperfect: [],
};

perfectVerbs.set(уговорить.name.text, уговорить);

export { уговорить };