import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запрещать: PerfectVerb = {
  name: Word('запрещать', 6),
  singular1stPerson: Word('запрещаю', 6),
  singular2ndPerson: Word('запрещаешь', 6),
  singular3rdPerson: Word('запрещает', 6),
  plural1stPerson: Word('запрещаем', 6),
  plural2ndPerson: Word('запрещаете', 6),
  plural3rdPerson: Word('запрещают', 6),
  masculinePast: Word('запрещал', 6),
  femininePast: Word('запрещала', 6),
  neuterPast: Word('запрещало', 6),
  pluralPast: Word('запрещали', 6),
  imperativeInformal: Word('запрещай', 6),
  imperativeFormal: Word('запрещайте', 6),
  imperfect: ['запретить'],
};

perfectVerbs.set(запрещать.name.text, запрещать);

export { запрещать };