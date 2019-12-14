import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тиранить: PerfectVerb = {
  name: Word('тиранить', 3),
  singular1stPerson: Word('тираню', 3),
  singular2ndPerson: Word('тиранишь', 3),
  singular3rdPerson: Word('тиранит', 3),
  plural1stPerson: Word('тираним', 3),
  plural2ndPerson: Word('тираните', 3),
  plural3rdPerson: Word('тиранят', 3),
  masculinePast: Word('тиранил', 3),
  femininePast: Word('тиранила', 3),
  neuterPast: Word('тиранило', 3),
  pluralPast: Word('тиранили', 3),
  imperativeInformal: Word('тирань', 3),
  imperativeFormal: Word('тираньте', 3),
  imperfect: [],
};

perfectVerbs.set(тиранить.name.text, тиранить);

export { тиранить };