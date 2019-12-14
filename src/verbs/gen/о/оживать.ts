import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оживать: PerfectVerb = {
  name: Word('оживать', 4),
  singular1stPerson: Word('оживаю', 4),
  singular2ndPerson: Word('оживаешь', 4),
  singular3rdPerson: Word('оживает', 4),
  plural1stPerson: Word('оживаем', 4),
  plural2ndPerson: Word('оживаете', 4),
  plural3rdPerson: Word('оживают', 4),
  masculinePast: Word('оживал', 4),
  femininePast: Word('оживала', 4),
  neuterPast: Word('оживало', 4),
  pluralPast: Word('оживали', 4),
  imperativeInformal: Word('оживай', 4),
  imperativeFormal: Word('оживайте', 4),
  imperfect: ['ожить'],
};

perfectVerbs.set(оживать.name.text, оживать);

export { оживать };