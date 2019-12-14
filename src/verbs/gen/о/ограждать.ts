import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ограждать: PerfectVerb = {
  name: Word('ограждать', 6),
  singular1stPerson: Word('ограждаю', 6),
  singular2ndPerson: Word('ограждаешь', 6),
  singular3rdPerson: Word('ограждает', 6),
  plural1stPerson: Word('ограждаем', 6),
  plural2ndPerson: Word('ограждаете', 6),
  plural3rdPerson: Word('ограждают', 6),
  masculinePast: Word('ограждал', 6),
  femininePast: Word('ограждала', 6),
  neuterPast: Word('ограждало', 6),
  pluralPast: Word('ограждали', 6),
  imperativeInformal: Word('ограждай', 6),
  imperativeFormal: Word('ограждайте', 6),
  imperfect: [],
};

perfectVerbs.set(ограждать.name.text, ограждать);

export { ограждать };