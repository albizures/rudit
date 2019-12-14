import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впутать: PerfectVerb = {
  name: Word('впутать', 2),
  singular1stPerson: Word('впутаю', 2),
  singular2ndPerson: Word('впутаешь', 2),
  singular3rdPerson: Word('впутает', 2),
  plural1stPerson: Word('впутаем', 2),
  plural2ndPerson: Word('впутаете', 2),
  plural3rdPerson: Word('впутают', 2),
  masculinePast: Word('впутал', 2),
  femininePast: Word('впутала', 2),
  neuterPast: Word('впутало', 2),
  pluralPast: Word('впутали', 2),
  imperativeInformal: Word('впутай', 2),
  imperativeFormal: Word('впутайте', 2),
  imperfect: [],
};

perfectVerbs.set(впутать.name.text, впутать);

export { впутать };