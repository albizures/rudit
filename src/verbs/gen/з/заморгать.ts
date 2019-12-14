import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заморгать: PerfectVerb = {
  name: Word('заморгать', 6),
  singular1stPerson: Word('заморгаю', 6),
  singular2ndPerson: Word('заморгаешь', 6),
  singular3rdPerson: Word('заморгает', 6),
  plural1stPerson: Word('заморгаем', 6),
  plural2ndPerson: Word('заморгаете', 6),
  plural3rdPerson: Word('заморгают', 6),
  masculinePast: Word('заморгал', 6),
  femininePast: Word('заморгала', 6),
  neuterPast: Word('заморгало', 6),
  pluralPast: Word('заморгали', 6),
  imperativeInformal: Word('заморгай', 6),
  imperativeFormal: Word('заморгайте', 6),
  imperfect: [],
};

perfectVerbs.set(заморгать.name.text, заморгать);

export { заморгать };