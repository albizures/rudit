import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оговорить: PerfectVerb = {
  name: Word('оговорить', 6),
  singular1stPerson: Word('оговорю', 6),
  singular2ndPerson: Word('оговоришь', 6),
  singular3rdPerson: Word('оговорит', 6),
  plural1stPerson: Word('оговорим', 6),
  plural2ndPerson: Word('оговорите', 6),
  plural3rdPerson: Word('оговорят', 6),
  masculinePast: Word('оговорил', 6),
  femininePast: Word('оговорила', 6),
  neuterPast: Word('оговорило', 6),
  pluralPast: Word('оговорили', 6),
  imperativeInformal: Word('оговори', 6),
  imperativeFormal: Word('оговорите', 6),
  imperfect: [],
};

perfectVerbs.set(оговорить.name.text, оговорить);

export { оговорить };