import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поспорить: PerfectVerb = {
  name: Word('поспорить', 4),
  singular1stPerson: Word('поспорю', 4),
  singular2ndPerson: Word('поспоришь', 4),
  singular3rdPerson: Word('поспорит', 4),
  plural1stPerson: Word('поспорим', 4),
  plural2ndPerson: Word('поспорите', 4),
  plural3rdPerson: Word('поспорят', 4),
  masculinePast: Word('поспорил', 4),
  femininePast: Word('поспорила', 4),
  neuterPast: Word('поспорило', 4),
  pluralPast: Word('поспорили', 4),
  imperativeInformal: Word('поспорь', 4),
  imperativeFormal: Word('поспорьте', 4),
  imperfect: [],
};

perfectVerbs.set(поспорить.name.text, поспорить);

export { поспорить };