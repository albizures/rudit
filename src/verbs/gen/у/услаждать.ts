import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const услаждать: PerfectVerb = {
  name: Word('услаждать', 6),
  singular1stPerson: Word('услаждаю', 6),
  singular2ndPerson: Word('услаждаешь', 6),
  singular3rdPerson: Word('услаждает', 6),
  plural1stPerson: Word('услаждаем', 6),
  plural2ndPerson: Word('услаждаете', 6),
  plural3rdPerson: Word('услаждают', 6),
  masculinePast: Word('услаждал', 6),
  femininePast: Word('услаждала', 6),
  neuterPast: Word('услаждало', 6),
  pluralPast: Word('услаждали', 6),
  imperativeInformal: Word('услаждай', 6),
  imperativeFormal: Word('услаждайте', 6),
  imperfect: [],
};

perfectVerbs.set(услаждать.name.text, услаждать);

export { услаждать };