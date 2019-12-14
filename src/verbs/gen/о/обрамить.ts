import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрамить: PerfectVerb = {
  name: Word('обрамить', 5),
  singular1stPerson: Word('обрамлю', 6),
  singular2ndPerson: Word('обрамишь', 5),
  singular3rdPerson: Word('обрамит', 5),
  plural1stPerson: Word('обрамим', 5),
  plural2ndPerson: Word('обрамите', 5),
  plural3rdPerson: Word('обрамят', 5),
  masculinePast: Word('обрамил', 5),
  femininePast: Word('обрамила', 5),
  neuterPast: Word('обрамило', 5),
  pluralPast: Word('обрамили', 5),
  imperativeInformal: Word('обрами', 5),
  imperativeFormal: Word('обрамите', 5),
  imperfect: [],
};

perfectVerbs.set(обрамить.name.text, обрамить);

export { обрамить };