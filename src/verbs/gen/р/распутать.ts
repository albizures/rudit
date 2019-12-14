import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распутать: PerfectVerb = {
  name: Word('распутать', 4),
  singular1stPerson: Word('распутаю', 4),
  singular2ndPerson: Word('распутаешь', 4),
  singular3rdPerson: Word('распутает', 4),
  plural1stPerson: Word('распутаем', 4),
  plural2ndPerson: Word('распутаете', 4),
  plural3rdPerson: Word('распутают', 4),
  masculinePast: Word('распутал', 4),
  femininePast: Word('распутала', 4),
  neuterPast: Word('распутало', 4),
  pluralPast: Word('распутали', 4),
  imperativeInformal: Word('распутай', 4),
  imperativeFormal: Word('распутайте', 4),
  imperfect: [],
};

perfectVerbs.set(распутать.name.text, распутать);

export { распутать };