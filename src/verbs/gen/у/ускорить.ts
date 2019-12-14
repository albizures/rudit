import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ускорить: PerfectVerb = {
  name: Word('ускорить', 3),
  singular1stPerson: Word('ускорю', 3),
  singular2ndPerson: Word('ускоришь', 3),
  singular3rdPerson: Word('ускорит', 3),
  plural1stPerson: Word('ускорим', 3),
  plural2ndPerson: Word('ускорите', 3),
  plural3rdPerson: Word('ускорят', 3),
  masculinePast: Word('ускорил', 3),
  femininePast: Word('ускорила', 3),
  neuterPast: Word('ускорило', 3),
  pluralPast: Word('ускорили', 3),
  imperativeInformal: Word('ускорь', 3),
  imperativeFormal: Word('ускорьте', 3),
  imperfect: ['ускорять'],
};

perfectVerbs.set(ускорить.name.text, ускорить);

export { ускорить };