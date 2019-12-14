import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укорить: PerfectVerb = {
  name: Word('укорить', 4),
  singular1stPerson: Word('укорю', 4),
  singular2ndPerson: Word('укоришь', 4),
  singular3rdPerson: Word('укорит', 4),
  plural1stPerson: Word('укорим', 4),
  plural2ndPerson: Word('укорите', 4),
  plural3rdPerson: Word('укорят', 4),
  masculinePast: Word('укорил', 4),
  femininePast: Word('укорила', 4),
  neuterPast: Word('укорило', 4),
  pluralPast: Word('укорили', 4),
  imperativeInformal: Word('укори', 4),
  imperativeFormal: Word('укорите', 4),
  imperfect: [],
};

perfectVerbs.set(укорить.name.text, укорить);

export { укорить };