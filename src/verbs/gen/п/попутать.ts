import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попутать: PerfectVerb = {
  name: Word('попутать', 3),
  singular1stPerson: Word('попутаю', 3),
  singular2ndPerson: Word('попутаешь', 3),
  singular3rdPerson: Word('попутает', 3),
  plural1stPerson: Word('попутаем', 3),
  plural2ndPerson: Word('попутаете', 3),
  plural3rdPerson: Word('попутают', 3),
  masculinePast: Word('попутал', 3),
  femininePast: Word('попутала', 3),
  neuterPast: Word('попутало', 3),
  pluralPast: Word('попутали', 3),
  imperativeInformal: Word('попутай', 3),
  imperativeFormal: Word('попутайте', 3),
  imperfect: [],
};

perfectVerbs.set(попутать.name.text, попутать);

export { попутать };