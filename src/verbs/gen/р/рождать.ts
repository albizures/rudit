import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рождать: PerfectVerb = {
  name: Word('рождать', 4),
  singular1stPerson: Word('рождаю', 4),
  singular2ndPerson: Word('рождаешь', 4),
  singular3rdPerson: Word('рождает', 4),
  plural1stPerson: Word('рождаем', 4),
  plural2ndPerson: Word('рождаете', 4),
  plural3rdPerson: Word('рождают', 4),
  masculinePast: Word('рождал', 4),
  femininePast: Word('рождала', 4),
  neuterPast: Word('рождало', 4),
  pluralPast: Word('рождали', 4),
  imperativeInformal: Word('рождай', 4),
  imperativeFormal: Word('рождайте', 4),
  imperfect: [],
};

perfectVerbs.set(рождать.name.text, рождать);

export { рождать };