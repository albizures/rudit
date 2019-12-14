import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подговорить: PerfectVerb = {
  name: Word('подговорить', 8),
  singular1stPerson: Word('подговорю', 8),
  singular2ndPerson: Word('подговоришь', 8),
  singular3rdPerson: Word('подговорит', 8),
  plural1stPerson: Word('подговорим', 8),
  plural2ndPerson: Word('подговорите', 8),
  plural3rdPerson: Word('подговорят', 8),
  masculinePast: Word('подговорил', 8),
  femininePast: Word('подговорила', 8),
  neuterPast: Word('подговорило', 8),
  pluralPast: Word('подговорили', 8),
  imperativeInformal: Word('подговори', 8),
  imperativeFormal: Word('подговорите', 8),
  imperfect: [],
};

perfectVerbs.set(подговорить.name.text, подговорить);

export { подговорить };