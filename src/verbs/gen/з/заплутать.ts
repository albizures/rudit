import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заплутать: PerfectVerb = {
  name: Word('заплутать', 6),
  singular1stPerson: Word('заплутаю', 6),
  singular2ndPerson: Word('заплутаешь', 6),
  singular3rdPerson: Word('заплутает', 6),
  plural1stPerson: Word('заплутаем', 6),
  plural2ndPerson: Word('заплутаете', 6),
  plural3rdPerson: Word('заплутают', 6),
  masculinePast: Word('заплутал', 6),
  femininePast: Word('заплутала', 6),
  neuterPast: Word('заплутало', 6),
  pluralPast: Word('заплутали', 6),
  imperativeInformal: Word('заплутай', 6),
  imperativeFormal: Word('заплутайте', 6),
  imperfect: [],
};

perfectVerbs.set(заплутать.name.text, заплутать);

export { заплутать };