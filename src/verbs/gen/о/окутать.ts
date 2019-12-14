import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окутать: PerfectVerb = {
  name: Word('окутать', 2),
  singular1stPerson: Word('окутаю', 2),
  singular2ndPerson: Word('окутаешь', 2),
  singular3rdPerson: Word('окутает', 2),
  plural1stPerson: Word('окутаем', 2),
  plural2ndPerson: Word('окутаете', 2),
  plural3rdPerson: Word('окутают', 2),
  masculinePast: Word('окутал', 2),
  femininePast: Word('окутала', 2),
  neuterPast: Word('окутало', 2),
  pluralPast: Word('окутали', 2),
  imperativeInformal: Word('окутай', 2),
  imperativeFormal: Word('окутайте', 2),
  imperfect: [],
};

perfectVerbs.set(окутать.name.text, окутать);

export { окутать };