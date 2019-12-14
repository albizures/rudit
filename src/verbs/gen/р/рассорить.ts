import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассорить: PerfectVerb = {
  name: Word('рассорить', 4),
  singular1stPerson: Word('рассорю', 4),
  singular2ndPerson: Word('рассоришь', 4),
  singular3rdPerson: Word('рассорит', 4),
  plural1stPerson: Word('рассорим', 4),
  plural2ndPerson: Word('рассорите', 4),
  plural3rdPerson: Word('рассорят', 4),
  masculinePast: Word('рассорил', 4),
  femininePast: Word('рассорила', 4),
  neuterPast: Word('рассорило', 4),
  pluralPast: Word('рассорили', 4),
  imperativeInformal: Word('рассорь', 4),
  imperativeFormal: Word('рассорьте', 4),
  imperfect: [],
};

perfectVerbs.set(рассорить.name.text, рассорить);

export { рассорить };