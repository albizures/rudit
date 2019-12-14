import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закупорить: PerfectVerb = {
  name: Word('закупорить', 3),
  singular1stPerson: Word('закупорю', 3),
  singular2ndPerson: Word('закупоришь', 3),
  singular3rdPerson: Word('закупорит', 3),
  plural1stPerson: Word('закупорим', 3),
  plural2ndPerson: Word('закупорите', 3),
  plural3rdPerson: Word('закупорят', 3),
  masculinePast: Word('закупорил', 3),
  femininePast: Word('закупорила', 3),
  neuterPast: Word('закупорило', 3),
  pluralPast: Word('закупорили', 3),
  imperativeInformal: Word('закупори//заку'порь', 3),
  imperativeFormal: Word('закупорьте', 3),
  imperfect: [],
};

perfectVerbs.set(закупорить.name.text, закупорить);

export { закупорить };