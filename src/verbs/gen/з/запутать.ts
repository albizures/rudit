import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запутать: PerfectVerb = {
  name: Word('запутать', 3),
  singular1stPerson: Word('запутаю', 3),
  singular2ndPerson: Word('запутаешь', 3),
  singular3rdPerson: Word('запутает', 3),
  plural1stPerson: Word('запутаем', 3),
  plural2ndPerson: Word('запутаете', 3),
  plural3rdPerson: Word('запутают', 3),
  masculinePast: Word('запутал', 3),
  femininePast: Word('запутала', 3),
  neuterPast: Word('запутало', 3),
  pluralPast: Word('запутали', 3),
  imperativeInformal: Word('запутай', 3),
  imperativeFormal: Word('запутайте', 3),
  imperfect: [],
};

perfectVerbs.set(запутать.name.text, запутать);

export { запутать };