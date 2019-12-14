import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приваживать: PerfectVerb = {
  name: Word('приваживать', 4),
  singular1stPerson: Word('приваживаю', 4),
  singular2ndPerson: Word('приваживаешь', 4),
  singular3rdPerson: Word('приваживает', 4),
  plural1stPerson: Word('приваживаем', 4),
  plural2ndPerson: Word('приваживаете', 4),
  plural3rdPerson: Word('приваживают', 4),
  masculinePast: Word('приваживал', 4),
  femininePast: Word('приваживала', 4),
  neuterPast: Word('приваживало', 4),
  pluralPast: Word('приваживали', 4),
  imperativeInformal: Word('приваживай', 4),
  imperativeFormal: Word('приваживайте', 4),
  imperfect: [],
};

perfectVerbs.set(приваживать.name.text, приваживать);

export { приваживать };