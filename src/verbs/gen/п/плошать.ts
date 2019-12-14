import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плошать: PerfectVerb = {
  name: Word('плошать', 4),
  singular1stPerson: Word('плошаю', 4),
  singular2ndPerson: Word('плошаешь', 4),
  singular3rdPerson: Word('плошает', 4),
  plural1stPerson: Word('плошаем', 4),
  plural2ndPerson: Word('плошаете', 4),
  plural3rdPerson: Word('плошают', 4),
  masculinePast: Word('плошал', 4),
  femininePast: Word('плошала', 4),
  neuterPast: Word('плошало', 4),
  pluralPast: Word('плошали', 4),
  imperativeInformal: Word('плошай', 4),
  imperativeFormal: Word('плошайте', 4),
  imperfect: [],
};

perfectVerbs.set(плошать.name.text, плошать);

export { плошать };