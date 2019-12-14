import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объегорить: PerfectVerb = {
  name: Word('объегорить', 5),
  singular1stPerson: Word('объегорю', 5),
  singular2ndPerson: Word('объегоришь', 5),
  singular3rdPerson: Word('объегорит', 5),
  plural1stPerson: Word('объегорим', 5),
  plural2ndPerson: Word('объегорите', 5),
  plural3rdPerson: Word('объегорят', 5),
  masculinePast: Word('объегорил', 5),
  femininePast: Word('объегорила', 5),
  neuterPast: Word('объегорило', 5),
  pluralPast: Word('объегорили', 5),
  imperativeInformal: Word('объегорь', 5),
  imperativeFormal: Word('объегорьте', 5),
  imperfect: [],
};

perfectVerbs.set(объегорить.name.text, объегорить);

export { объегорить };