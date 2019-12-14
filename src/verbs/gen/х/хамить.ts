import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хамить: PerfectVerb = {
  name: Word('хамить', 3),
  singular1stPerson: Word('хамлю', 4),
  singular2ndPerson: Word('хамишь', 3),
  singular3rdPerson: Word('хамит', 3),
  plural1stPerson: Word('хамим', 3),
  plural2ndPerson: Word('хамите', 3),
  plural3rdPerson: Word('хамят', 3),
  masculinePast: Word('хамил', 3),
  femininePast: Word('хамила', 3),
  neuterPast: Word('хамило', 3),
  pluralPast: Word('хамили', 3),
  imperativeInformal: Word('хами', 3),
  imperativeFormal: Word('хамите', 3),
  imperfect: [],
};

perfectVerbs.set(хамить.name.text, хамить);

export { хамить };