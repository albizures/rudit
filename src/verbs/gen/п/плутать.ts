import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плутать: PerfectVerb = {
  name: Word('плутать', 4),
  singular1stPerson: Word('плутаю', 4),
  singular2ndPerson: Word('плутаешь', 4),
  singular3rdPerson: Word('плутает', 4),
  plural1stPerson: Word('плутаем', 4),
  plural2ndPerson: Word('плутаете', 4),
  plural3rdPerson: Word('плутают', 4),
  masculinePast: Word('плутал', 4),
  femininePast: Word('плутала', 4),
  neuterPast: Word('плутало', 4),
  pluralPast: Word('плутали', 4),
  imperativeInformal: Word('плутай', 4),
  imperativeFormal: Word('плутайте', 4),
  imperfect: [],
};

perfectVerbs.set(плутать.name.text, плутать);

export { плутать };