import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наслаждать: PerfectVerb = {
  name: Word('наслаждать', 7),
  singular1stPerson: Word('наслаждаю', 7),
  singular2ndPerson: Word('наслаждаешь', 7),
  singular3rdPerson: Word('наслаждает', 7),
  plural1stPerson: Word('наслаждаем', 7),
  plural2ndPerson: Word('наслаждаете', 7),
  plural3rdPerson: Word('наслаждают', 7),
  masculinePast: Word('наслаждал', 7),
  femininePast: Word('наслаждала', 7),
  neuterPast: Word('наслаждало', 7),
  pluralPast: Word('наслаждали', 7),
  imperativeInformal: Word('наслаждай', 7),
  imperativeFormal: Word('наслаждайте', 7),
  imperfect: [],
};

perfectVerbs.set(наслаждать.name.text, наслаждать);

export { наслаждать };