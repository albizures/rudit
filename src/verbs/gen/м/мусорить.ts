import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мусорить: PerfectVerb = {
  name: Word('мусорить', 1),
  singular1stPerson: Word('мусорю', 1),
  singular2ndPerson: Word('мусоришь', 1),
  singular3rdPerson: Word('мусорит', 1),
  plural1stPerson: Word('мусорим', 1),
  plural2ndPerson: Word('мусорите', 1),
  plural3rdPerson: Word('мусорят', 1),
  masculinePast: Word('мусорил', 1),
  femininePast: Word('мусорила', 1),
  neuterPast: Word('мусорило', 1),
  pluralPast: Word('мусорили', 1),
  imperativeInformal: Word('мусорь', 1),
  imperativeFormal: Word('мусорьте', 1),
  imperfect: ['замусорить','намусорить'],
};

perfectVerbs.set(мусорить.name.text, мусорить);

export { мусорить };