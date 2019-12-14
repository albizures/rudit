import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обхамить: PerfectVerb = {
  name: Word('обхамить', 5),
  singular1stPerson: Word('обхамлю', 6),
  singular2ndPerson: Word('обхамишь', 5),
  singular3rdPerson: Word('обхамит', 5),
  plural1stPerson: Word('обхамим', 5),
  plural2ndPerson: Word('обхамите', 5),
  plural3rdPerson: Word('обхамят', 5),
  masculinePast: Word('обхамил', 5),
  femininePast: Word('обхамила', 5),
  neuterPast: Word('обхамило', 5),
  pluralPast: Word('обхамили', 5),
  imperativeInformal: Word('обхами', 5),
  imperativeFormal: Word('обхамите', 5),
  imperfect: [],
};

perfectVerbs.set(обхамить.name.text, обхамить);

export { обхамить };