import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const страдать: PerfectVerb = {
  name: Word('страдать', 5),
  singular1stPerson: Word('страдаю', 5),
  singular2ndPerson: Word('страдаешь', 5),
  singular3rdPerson: Word('страдает', 5),
  plural1stPerson: Word('страдаем', 5),
  plural2ndPerson: Word('страдаете', 5),
  plural3rdPerson: Word('страдают', 5),
  masculinePast: Word('страдал', 5),
  femininePast: Word('страдала', 5),
  neuterPast: Word('страдало', 5),
  pluralPast: Word('страдали', 5),
  imperativeInformal: Word('страдай', 5),
  imperativeFormal: Word('страдайте', 5),
  imperfect: ['пострадать'],
};

perfectVerbs.set(страдать.name.text, страдать);

export { страдать };