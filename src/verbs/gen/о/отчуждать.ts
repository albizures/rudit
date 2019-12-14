import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отчуждать: PerfectVerb = {
  name: Word('отчуждать', 6),
  singular1stPerson: Word('отчуждаю', 6),
  singular2ndPerson: Word('отчуждаешь', 6),
  singular3rdPerson: Word('отчуждает', 6),
  plural1stPerson: Word('отчуждаем', 6),
  plural2ndPerson: Word('отчуждаете', 6),
  plural3rdPerson: Word('отчуждают', 6),
  masculinePast: Word('отчуждал', 6),
  femininePast: Word('отчуждала', 6),
  neuterPast: Word('отчуждало', 6),
  pluralPast: Word('отчуждали', 6),
  imperativeInformal: Word('отчуждай', 6),
  imperativeFormal: Word('отчуждайте', 6),
  imperfect: ['отчудить'],
};

perfectVerbs.set(отчуждать.name.text, отчуждать);

export { отчуждать };