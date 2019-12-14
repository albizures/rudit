import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хлебать: PerfectVerb = {
  name: Word('хлебать', 4),
  singular1stPerson: Word('хлебаю', 4),
  singular2ndPerson: Word('хлебаешь', 4),
  singular3rdPerson: Word('хлебает', 4),
  plural1stPerson: Word('хлебаем', 4),
  plural2ndPerson: Word('хлебаете', 4),
  plural3rdPerson: Word('хлебают', 4),
  masculinePast: Word('хлебал', 4),
  femininePast: Word('хлебала', 4),
  neuterPast: Word('хлебало', 4),
  pluralPast: Word('хлебали', 4),
  imperativeInformal: Word('хлебай', 4),
  imperativeFormal: Word('хлебайте', 4),
  imperfect: ['хлебнуть','похлебать'],
};

perfectVerbs.set(хлебать.name.text, хлебать);

export { хлебать };