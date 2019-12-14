import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заклинать: PerfectVerb = {
  name: Word('заклинать', 6),
  singular1stPerson: Word('заклинаю', 6),
  singular2ndPerson: Word('заклинаешь', 6),
  singular3rdPerson: Word('заклинает', 6),
  plural1stPerson: Word('заклинаем', 6),
  plural2ndPerson: Word('заклинаете', 6),
  plural3rdPerson: Word('заклинают', 6),
  masculinePast: Word('заклинал', 6),
  femininePast: Word('заклинала', 6),
  neuterPast: Word('заклинало', 6),
  pluralPast: Word('заклинали', 6),
  imperativeInformal: Word('заклинай', 6),
  imperativeFormal: Word('заклинайте', 6),
  imperfect: [],
};

perfectVerbs.set(заклинать.name.text, заклинать);

export { заклинать };