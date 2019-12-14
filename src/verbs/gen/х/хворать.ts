import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хворать: PerfectVerb = {
  name: Word('хворать', 4),
  singular1stPerson: Word('хвораю', 4),
  singular2ndPerson: Word('хвораешь', 4),
  singular3rdPerson: Word('хворает', 4),
  plural1stPerson: Word('хвораем', 4),
  plural2ndPerson: Word('хвораете', 4),
  plural3rdPerson: Word('хворают', 4),
  masculinePast: Word('хворал', 4),
  femininePast: Word('хворала', 4),
  neuterPast: Word('хворало', 4),
  pluralPast: Word('хворали', 4),
  imperativeInformal: Word('хворай', 4),
  imperativeFormal: Word('хворайте', 4),
  imperfect: [],
};

perfectVerbs.set(хворать.name.text, хворать);

export { хворать };