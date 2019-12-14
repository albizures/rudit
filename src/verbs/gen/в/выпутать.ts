import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпутать: PerfectVerb = {
  name: Word('выпутать', 1),
  singular1stPerson: Word('выпутаю', 1),
  singular2ndPerson: Word('выпутаешь', 1),
  singular3rdPerson: Word('выпутает', 1),
  plural1stPerson: Word('выпутаем', 1),
  plural2ndPerson: Word('выпутаете', 1),
  plural3rdPerson: Word('выпутают', 1),
  masculinePast: Word('выпутал', 1),
  femininePast: Word('выпутала', 1),
  neuterPast: Word('выпутало', 1),
  pluralPast: Word('выпутали', 1),
  imperativeInformal: Word('выпутай', 1),
  imperativeFormal: Word('выпутайте', 1),
  imperfect: [],
};

perfectVerbs.set(выпутать.name.text, выпутать);

export { выпутать };