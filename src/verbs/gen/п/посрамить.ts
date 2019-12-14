import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посрамить: PerfectVerb = {
  name: Word('посрамить', 6),
  singular1stPerson: Word('посрамлю', 7),
  singular2ndPerson: Word('посрамишь', 6),
  singular3rdPerson: Word('посрамит', 6),
  plural1stPerson: Word('посрамим', 6),
  plural2ndPerson: Word('посрамите', 6),
  plural3rdPerson: Word('посрамят', 6),
  masculinePast: Word('посрамил', 6),
  femininePast: Word('посрамила', 6),
  neuterPast: Word('посрамило', 6),
  pluralPast: Word('посрамили', 6),
  imperativeInformal: Word('посрами', 6),
  imperativeFormal: Word('посрамите', 6),
  imperfect: [],
};

perfectVerbs.set(посрамить.name.text, посрамить);

export { посрамить };