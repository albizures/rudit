import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const срамить: PerfectVerb = {
  name: Word('срамить', 4),
  singular1stPerson: Word('срамлю', 5),
  singular2ndPerson: Word('срамишь', 4),
  singular3rdPerson: Word('срамит', 4),
  plural1stPerson: Word('срамим', 4),
  plural2ndPerson: Word('срамите', 4),
  plural3rdPerson: Word('срамят', 4),
  masculinePast: Word('срамил', 4),
  femininePast: Word('срамила', 4),
  neuterPast: Word('срамило', 4),
  pluralPast: Word('срамили', 4),
  imperativeInformal: Word('срами', 4),
  imperativeFormal: Word('срамите', 4),
  imperfect: [],
};

perfectVerbs.set(срамить.name.text, срамить);

export { срамить };