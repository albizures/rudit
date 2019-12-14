import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засорить: PerfectVerb = {
  name: Word('засорить', 5),
  singular1stPerson: Word('засорю', 5),
  singular2ndPerson: Word('засоришь', 5),
  singular3rdPerson: Word('засорит', 5),
  plural1stPerson: Word('засорим', 5),
  plural2ndPerson: Word('засорите', 5),
  plural3rdPerson: Word('засорят', 5),
  masculinePast: Word('засорил', 5),
  femininePast: Word('засорила', 5),
  neuterPast: Word('засорило', 5),
  pluralPast: Word('засорили', 5),
  imperativeInformal: Word('засори', 5),
  imperativeFormal: Word('засорите', 5),
  imperfect: [],
};

perfectVerbs.set(засорить.name.text, засорить);

export { засорить };