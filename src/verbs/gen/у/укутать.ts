import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укутать: PerfectVerb = {
  name: Word('укутать', 2),
  singular1stPerson: Word('укутаю', 2),
  singular2ndPerson: Word('укутаешь', 2),
  singular3rdPerson: Word('укутает', 2),
  plural1stPerson: Word('укутаем', 2),
  plural2ndPerson: Word('укутаете', 2),
  plural3rdPerson: Word('укутают', 2),
  masculinePast: Word('укутал', 2),
  femininePast: Word('укутала', 2),
  neuterPast: Word('укутало', 2),
  pluralPast: Word('укутали', 2),
  imperativeInformal: Word('укутай', 2),
  imperativeFormal: Word('укутайте', 2),
  imperfect: [],
};

perfectVerbs.set(укутать.name.text, укутать);

export { укутать };