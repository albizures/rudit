import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проплутать: PerfectVerb = {
  name: Word('проплутать', 7),
  singular1stPerson: Word('проплутаю', 7),
  singular2ndPerson: Word('проплутаешь', 7),
  singular3rdPerson: Word('проплутает', 7),
  plural1stPerson: Word('проплутаем', 7),
  plural2ndPerson: Word('проплутаете', 7),
  plural3rdPerson: Word('проплутают', 7),
  masculinePast: Word('проплутал', 7),
  femininePast: Word('проплутала', 7),
  neuterPast: Word('проплутало', 7),
  pluralPast: Word('проплутали', 7),
  imperativeInformal: Word('проплутай', 7),
  imperativeFormal: Word('проплутайте', 7),
  imperfect: [],
};

perfectVerbs.set(проплутать.name.text, проплутать);

export { проплутать };