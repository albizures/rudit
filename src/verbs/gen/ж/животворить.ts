import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const животворить: PerfectVerb = {
  name: Word('животворить', 8),
  singular1stPerson: Word('животворю', 8),
  singular2ndPerson: Word('животворишь', 8),
  singular3rdPerson: Word('животворит', 8),
  plural1stPerson: Word('животворим', 8),
  plural2ndPerson: Word('животворите', 8),
  plural3rdPerson: Word('животворят', 8),
  masculinePast: Word('животворил', 8),
  femininePast: Word('животворила', 8),
  neuterPast: Word('животворило', 8),
  pluralPast: Word('животворили', 8),
  imperativeInformal: Word('животвори', 8),
  imperativeFormal: Word('животворите', 8),
  imperfect: [],
};

perfectVerbs.set(животворить.name.text, животворить);

export { животворить };