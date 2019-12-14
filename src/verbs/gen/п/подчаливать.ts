import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подчаливать: PerfectVerb = {
  name: Word('подчаливать', 4),
  singular1stPerson: Word('подчаливаю', 4),
  singular2ndPerson: Word('подчаливаешь', 4),
  singular3rdPerson: Word('подчаливает', 4),
  plural1stPerson: Word('подчаливаем', 4),
  plural2ndPerson: Word('подчаливаете', 4),
  plural3rdPerson: Word('подчаливают', 4),
  masculinePast: Word('подчаливал', 4),
  femininePast: Word('подчаливала', 4),
  neuterPast: Word('подчаливало', 4),
  pluralPast: Word('подчаливали', 4),
  imperativeInformal: Word('подчаливай', 4),
  imperativeFormal: Word('подчаливайте', 4),
  imperfect: [],
};

perfectVerbs.set(подчаливать.name.text, подчаливать);

export { подчаливать };