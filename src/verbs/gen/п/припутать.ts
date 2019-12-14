import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припутать: PerfectVerb = {
  name: Word('припутать', 4),
  singular1stPerson: Word('припутаю', 4),
  singular2ndPerson: Word('припутаешь', 4),
  singular3rdPerson: Word('припутает', 4),
  plural1stPerson: Word('припутаем', 4),
  plural2ndPerson: Word('припутаете', 4),
  plural3rdPerson: Word('припутают', 4),
  masculinePast: Word('припутал', 4),
  femininePast: Word('припутала', 4),
  neuterPast: Word('припутало', 4),
  pluralPast: Word('припутали', 4),
  imperativeInformal: Word('припутай', 4),
  imperativeFormal: Word('припутайте', 4),
  imperfect: [],
};

perfectVerbs.set(припутать.name.text, припутать);

export { припутать };