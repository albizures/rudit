import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повреждать: PerfectVerb = {
  name: Word('повреждать', 7),
  singular1stPerson: Word('повреждаю', 7),
  singular2ndPerson: Word('повреждаешь', 7),
  singular3rdPerson: Word('повреждает', 7),
  plural1stPerson: Word('повреждаем', 7),
  plural2ndPerson: Word('повреждаете', 7),
  plural3rdPerson: Word('повреждают', 7),
  masculinePast: Word('повреждал', 7),
  femininePast: Word('повреждала', 7),
  neuterPast: Word('повреждало', 7),
  pluralPast: Word('повреждали', 7),
  imperativeInformal: Word('повреждай', 7),
  imperativeFormal: Word('повреждайте', 7),
  imperfect: [],
};

perfectVerbs.set(повреждать.name.text, повреждать);

export { повреждать };