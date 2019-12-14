import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const досаждать: PerfectVerb = {
  name: Word('досаждать', 6),
  singular1stPerson: Word('досаждаю', 6),
  singular2ndPerson: Word('досаждаешь', 6),
  singular3rdPerson: Word('досаждает', 6),
  plural1stPerson: Word('досаждаем', 6),
  plural2ndPerson: Word('досаждаете', 6),
  plural3rdPerson: Word('досаждают', 6),
  masculinePast: Word('досаждал', 6),
  femininePast: Word('досаждала', 6),
  neuterPast: Word('досаждало', 6),
  pluralPast: Word('досаждали', 6),
  imperativeInformal: Word('досаждай', 6),
  imperativeFormal: Word('досаждайте', 6),
  imperfect: ['досадить'],
};

perfectVerbs.set(досаждать.name.text, досаждать);

export { досаждать };