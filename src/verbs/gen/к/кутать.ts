import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кутать: PerfectVerb = {
  name: Word('кутать', 1),
  singular1stPerson: Word('кутаю', 1),
  singular2ndPerson: Word('кутаешь', 1),
  singular3rdPerson: Word('кутает', 1),
  plural1stPerson: Word('кутаем', 1),
  plural2ndPerson: Word('кутаете', 1),
  plural3rdPerson: Word('кутают', 1),
  masculinePast: Word('кутал', 1),
  femininePast: Word('кутала', 1),
  neuterPast: Word('кутало', 1),
  pluralPast: Word('кутали', 1),
  imperativeInformal: Word('кутай', 1),
  imperativeFormal: Word('кутайте', 1),
  imperfect: [],
};

perfectVerbs.set(кутать.name.text, кутать);

export { кутать };