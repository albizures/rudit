import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откупорить: PerfectVerb = {
  name: Word('откупорить', 3),
  singular1stPerson: Word('откупорю', 3),
  singular2ndPerson: Word('откупоришь', 3),
  singular3rdPerson: Word('откупорит', 3),
  plural1stPerson: Word('откупорим', 3),
  plural2ndPerson: Word('откупорите', 3),
  plural3rdPerson: Word('откупорят', 3),
  masculinePast: Word('откупорил', 3),
  femininePast: Word('откупорила', 3),
  neuterPast: Word('откупорило', 3),
  pluralPast: Word('откупорили', 3),
  imperativeInformal: Word('откупори//отку'порь', 3),
  imperativeFormal: Word('откупорьте', 3),
  imperfect: [],
};

perfectVerbs.set(откупорить.name.text, откупорить);

export { откупорить };