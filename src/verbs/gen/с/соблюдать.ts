import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соблюдать: PerfectVerb = {
  name: Word('соблюдать', 6),
  singular1stPerson: Word('соблюдаю', 6),
  singular2ndPerson: Word('соблюдаешь', 6),
  singular3rdPerson: Word('соблюдает', 6),
  plural1stPerson: Word('соблюдаем', 6),
  plural2ndPerson: Word('соблюдаете', 6),
  plural3rdPerson: Word('соблюдают', 6),
  masculinePast: Word('соблюдал', 6),
  femininePast: Word('соблюдала', 6),
  neuterPast: Word('соблюдало', 6),
  pluralPast: Word('соблюдали', 6),
  imperativeInformal: Word('соблюдай', 6),
  imperativeFormal: Word('соблюдайте', 6),
  imperfect: ['соблюсти'],
};

perfectVerbs.set(соблюдать.name.text, соблюдать);

export { соблюдать };