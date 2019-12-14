import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заработать: PerfectVerb = {
  name: Word('заработать', 5),
  singular1stPerson: Word('заработаю', 5),
  singular2ndPerson: Word('заработаешь', 5),
  singular3rdPerson: Word('заработает', 5),
  plural1stPerson: Word('заработаем', 5),
  plural2ndPerson: Word('заработаете', 5),
  plural3rdPerson: Word('заработают', 5),
  masculinePast: Word('заработал', 5),
  femininePast: Word('заработала', 5),
  neuterPast: Word('заработало', 5),
  pluralPast: Word('заработали', 5),
  imperativeInformal: Word('заработай', 5),
  imperativeFormal: Word('заработайте', 5),
  imperfect: ['зарабатывать'],
};

perfectVerbs.set(заработать.name.text, заработать);

export { заработать };