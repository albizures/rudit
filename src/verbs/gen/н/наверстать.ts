import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наверстать: PerfectVerb = {
  name: Word('наверстать', 7),
  singular1stPerson: Word('наверстаю', 7),
  singular2ndPerson: Word('наверстаешь', 7),
  singular3rdPerson: Word('наверстает', 7),
  plural1stPerson: Word('наверстаем', 7),
  plural2ndPerson: Word('наверстаете', 7),
  plural3rdPerson: Word('наверстают', 7),
  masculinePast: Word('наверстал', 7),
  femininePast: Word('наверстала', 7),
  neuterPast: Word('наверстало', 7),
  pluralPast: Word('наверстали', 7),
  imperativeInformal: Word('наверстай', 7),
  imperativeFormal: Word('наверстайте', 7),
  imperfect: [],
};

perfectVerbs.set(наверстать.name.text, наверстать);

export { наверстать };