import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спорить: PerfectVerb = {
  name: Word('спорить', 2),
  singular1stPerson: Word('спорю', 2),
  singular2ndPerson: Word('споришь', 2),
  singular3rdPerson: Word('спорит', 2),
  plural1stPerson: Word('спорим', 2),
  plural2ndPerson: Word('спорите', 2),
  plural3rdPerson: Word('спорят', 2),
  masculinePast: Word('спорил', 2),
  femininePast: Word('спорила', 2),
  neuterPast: Word('спорило', 2),
  pluralPast: Word('спорили', 2),
  imperativeInformal: Word('спорь', 2),
  imperativeFormal: Word('спорьте', 2),
  imperfect: ['поспорить'],
};

perfectVerbs.set(спорить.name.text, спорить);

export { спорить };