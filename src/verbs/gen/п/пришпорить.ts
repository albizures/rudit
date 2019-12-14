import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пришпорить: PerfectVerb = {
  name: Word('пришпорить', 5),
  singular1stPerson: Word('пришпорю', 5),
  singular2ndPerson: Word('пришпоришь', 5),
  singular3rdPerson: Word('пришпорит', 5),
  plural1stPerson: Word('пришпорим', 5),
  plural2ndPerson: Word('пришпорите', 5),
  plural3rdPerson: Word('пришпорят', 5),
  masculinePast: Word('пришпорил', 5),
  femininePast: Word('пришпорила', 5),
  neuterPast: Word('пришпорило', 5),
  pluralPast: Word('пришпорили', 5),
  imperativeInformal: Word('пришпорь', 5),
  imperativeFormal: Word('пришпорьте', 5),
  imperfect: [],
};

perfectVerbs.set(пришпорить.name.text, пришпорить);

export { пришпорить };