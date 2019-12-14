import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтверждать: PerfectVerb = {
  name: Word('подтверждать', 9),
  singular1stPerson: Word('подтверждаю', 9),
  singular2ndPerson: Word('подтверждаешь', 9),
  singular3rdPerson: Word('подтверждает', 9),
  plural1stPerson: Word('подтверждаем', 9),
  plural2ndPerson: Word('подтверждаете', 9),
  plural3rdPerson: Word('подтверждают', 9),
  masculinePast: Word('подтверждал', 9),
  femininePast: Word('подтверждала', 9),
  neuterPast: Word('подтверждало', 9),
  pluralPast: Word('подтверждали', 9),
  imperativeInformal: Word('подтверждай', 9),
  imperativeFormal: Word('подтверждайте', 9),
  imperfect: ['подтвердить'],
};

perfectVerbs.set(подтверждать.name.text, подтверждать);

export { подтверждать };