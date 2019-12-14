import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const девать: PerfectVerb = {
  name: Word('девать', 3),
  singular1stPerson: Word('деваю', 3),
  singular2ndPerson: Word('деваешь', 3),
  singular3rdPerson: Word('девает', 3),
  plural1stPerson: Word('деваем', 3),
  plural2ndPerson: Word('деваете', 3),
  plural3rdPerson: Word('девают', 3),
  masculinePast: Word('девал', 3),
  femininePast: Word('девала', 3),
  neuterPast: Word('девало', 3),
  pluralPast: Word('девали', 3),
  imperativeInformal: Word('девай', 3),
  imperativeFormal: Word('девайте', 3),
  imperfect: ['деть'],
};

perfectVerbs.set(девать.name.text, девать);

export { девать };