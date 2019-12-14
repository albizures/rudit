import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покорить: PerfectVerb = {
  name: Word('покорить', 5),
  singular1stPerson: Word('покорю', 5),
  singular2ndPerson: Word('покоришь', 5),
  singular3rdPerson: Word('покорит', 5),
  plural1stPerson: Word('покорим', 5),
  plural2ndPerson: Word('покорите', 5),
  plural3rdPerson: Word('покорят', 5),
  masculinePast: Word('покорил', 5),
  femininePast: Word('покорила', 5),
  neuterPast: Word('покорило', 5),
  pluralPast: Word('покорили', 5),
  imperativeInformal: Word('покори', 5),
  imperativeFormal: Word('покорите', 5),
  imperfect: [],
};

perfectVerbs.set(покорить.name.text, покорить);

export { покорить };