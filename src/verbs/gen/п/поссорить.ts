import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поссорить: PerfectVerb = {
  name: Word('поссорить', 4),
  singular1stPerson: Word('поссорю', 4),
  singular2ndPerson: Word('поссоришь', 4),
  singular3rdPerson: Word('поссорит', 4),
  plural1stPerson: Word('поссорим', 4),
  plural2ndPerson: Word('поссорите', 4),
  plural3rdPerson: Word('поссорят', 4),
  masculinePast: Word('поссорил', 4),
  femininePast: Word('поссорила', 4),
  neuterPast: Word('поссорило', 4),
  pluralPast: Word('поссорили', 4),
  imperativeInformal: Word('поссорь', 4),
  imperativeFormal: Word('поссорьте', 4),
  imperfect: [],
};

perfectVerbs.set(поссорить.name.text, поссорить);

export { поссорить };