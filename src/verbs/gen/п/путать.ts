import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const путать: PerfectVerb = {
  name: Word('путать', 1),
  singular1stPerson: Word('путаю', 1),
  singular2ndPerson: Word('путаешь', 1),
  singular3rdPerson: Word('путает', 1),
  plural1stPerson: Word('путаем', 1),
  plural2ndPerson: Word('путаете', 1),
  plural3rdPerson: Word('путают', 1),
  masculinePast: Word('путал', 1),
  femininePast: Word('путала', 1),
  neuterPast: Word('путало', 1),
  pluralPast: Word('путали', 1),
  imperativeInformal: Word('путай', 1),
  imperativeFormal: Word('путайте', 1),
  imperfect: ['спутать','запутать','перепутать'],
};

perfectVerbs.set(путать.name.text, путать);

export { путать };