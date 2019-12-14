import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разорить: PerfectVerb = {
  name: Word('разорить', 5),
  singular1stPerson: Word('разорю', 5),
  singular2ndPerson: Word('разоришь', 5),
  singular3rdPerson: Word('разорит', 5),
  plural1stPerson: Word('разорим', 5),
  plural2ndPerson: Word('разорите', 5),
  plural3rdPerson: Word('разорят', 5),
  masculinePast: Word('разорил', 5),
  femininePast: Word('разорила', 5),
  neuterPast: Word('разорило', 5),
  pluralPast: Word('разорили', 5),
  imperativeInformal: Word('разори', 5),
  imperativeFormal: Word('разорите', 5),
  imperfect: [],
};

perfectVerbs.set(разорить.name.text, разорить);

export { разорить };