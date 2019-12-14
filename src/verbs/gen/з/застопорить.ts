import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застопорить: PerfectVerb = {
  name: Word('застопорить', 4),
  singular1stPerson: Word('застопорю', 4),
  singular2ndPerson: Word('застопоришь', 4),
  singular3rdPerson: Word('застопорит', 4),
  plural1stPerson: Word('застопорим', 4),
  plural2ndPerson: Word('застопорите', 4),
  plural3rdPerson: Word('застопорят', 4),
  masculinePast: Word('застопорил', 4),
  femininePast: Word('застопорила', 4),
  neuterPast: Word('застопорило', 4),
  pluralPast: Word('застопорили', 4),
  imperativeInformal: Word('застопори', 4),
  imperativeFormal: Word('застопорьте', 4),
  imperfect: [],
};

perfectVerbs.set(застопорить.name.text, застопорить);

export { застопорить };