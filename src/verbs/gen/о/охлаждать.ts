import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const охлаждать: PerfectVerb = {
  name: Word('охлаждать', 6),
  singular1stPerson: Word('охлаждаю', 6),
  singular2ndPerson: Word('охлаждаешь', 6),
  singular3rdPerson: Word('охлаждает', 6),
  plural1stPerson: Word('охлаждаем', 6),
  plural2ndPerson: Word('охлаждаете', 6),
  plural3rdPerson: Word('охлаждают', 6),
  masculinePast: Word('охлаждал', 6),
  femininePast: Word('охлаждала', 6),
  neuterPast: Word('охлаждало', 6),
  pluralPast: Word('охлаждали', 6),
  imperativeInformal: Word('охлаждай', 6),
  imperativeFormal: Word('охлаждайте', 6),
  imperfect: [],
};

perfectVerbs.set(охлаждать.name.text, охлаждать);

export { охлаждать };