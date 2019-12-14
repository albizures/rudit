import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насаждать: PerfectVerb = {
  name: Word('насаждать', 6),
  singular1stPerson: Word('насаждаю', 6),
  singular2ndPerson: Word('насаждаешь', 6),
  singular3rdPerson: Word('насаждает', 6),
  plural1stPerson: Word('насаждаем', 6),
  plural2ndPerson: Word('насаждаете', 6),
  plural3rdPerson: Word('насаждают', 6),
  masculinePast: Word('насаждал', 6),
  femininePast: Word('насаждала', 6),
  neuterPast: Word('насаждало', 6),
  pluralPast: Word('насаждали', 6),
  imperativeInformal: Word('насаждай', 6),
  imperativeFormal: Word('насаждайте', 6),
  imperfect: [],
};

perfectVerbs.set(насаждать.name.text, насаждать);

export { насаждать };