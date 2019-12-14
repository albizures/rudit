import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поймать: PerfectVerb = {
  name: Word('поймать', 4),
  singular1stPerson: Word('поймаю', 4),
  singular2ndPerson: Word('поймаешь', 4),
  singular3rdPerson: Word('поймает', 4),
  plural1stPerson: Word('поймаем', 4),
  plural2ndPerson: Word('поймаете', 4),
  plural3rdPerson: Word('поймают', 4),
  masculinePast: Word('поймал', 4),
  femininePast: Word('поймала', 4),
  neuterPast: Word('поймало', 4),
  pluralPast: Word('поймали', 4),
  imperativeInformal: Word('поймай', 4),
  imperativeFormal: Word('поймайте', 4),
  imperfect: ['ловить'],
};

perfectVerbs.set(поймать.name.text, поймать);

export { поймать };