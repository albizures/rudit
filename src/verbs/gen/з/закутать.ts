import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закутать: PerfectVerb = {
  name: Word('закутать', 3),
  singular1stPerson: Word('закутаю', 3),
  singular2ndPerson: Word('закутаешь', 3),
  singular3rdPerson: Word('закутает', 3),
  plural1stPerson: Word('закутаем', 3),
  plural2ndPerson: Word('закутаете', 3),
  plural3rdPerson: Word('закутают', 3),
  masculinePast: Word('закутал', 3),
  femininePast: Word('закутала', 3),
  neuterPast: Word('закутало', 3),
  pluralPast: Word('закутали', 3),
  imperativeInformal: Word('закутай', 3),
  imperativeFormal: Word('закутайте', 3),
  imperfect: [],
};

perfectVerbs.set(закутать.name.text, закутать);

export { закутать };