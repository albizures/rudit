import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обсуждать: PerfectVerb = {
  name: Word('обсуждать', 6),
  singular1stPerson: Word('обсуждаю', 6),
  singular2ndPerson: Word('обсуждаешь', 6),
  singular3rdPerson: Word('обсуждает', 6),
  plural1stPerson: Word('обсуждаем', 6),
  plural2ndPerson: Word('обсуждаете', 6),
  plural3rdPerson: Word('обсуждают', 6),
  masculinePast: Word('обсуждал', 6),
  femininePast: Word('обсуждала', 6),
  neuterPast: Word('обсуждало', 6),
  pluralPast: Word('обсуждали', 6),
  imperativeInformal: Word('обсуждай', 6),
  imperativeFormal: Word('обсуждайте', 6),
  imperfect: ['обсудить'],
};

perfectVerbs.set(обсуждать.name.text, обсуждать);

export { обсуждать };