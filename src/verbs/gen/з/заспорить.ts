import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заспорить: PerfectVerb = {
  name: Word('заспорить', 4),
  singular1stPerson: Word('заспорю', 4),
  singular2ndPerson: Word('заспоришь', 4),
  singular3rdPerson: Word('заспорит', 4),
  plural1stPerson: Word('заспорим', 4),
  plural2ndPerson: Word('заспорите', 4),
  plural3rdPerson: Word('заспорят', 4),
  masculinePast: Word('заспорил', 4),
  femininePast: Word('заспорила', 4),
  neuterPast: Word('заспорило', 4),
  pluralPast: Word('заспорили', 4),
  imperativeInformal: Word('заспорь', 4),
  imperativeFormal: Word('заспорьте', 4),
  imperfect: [],
};

perfectVerbs.set(заспорить.name.text, заспорить);

export { заспорить };