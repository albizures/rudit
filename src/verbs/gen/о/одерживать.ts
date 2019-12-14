import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одерживать: PerfectVerb = {
  name: Word('одерживать', 2),
  singular1stPerson: Word('одерживаю', 2),
  singular2ndPerson: Word('одерживаешь', 2),
  singular3rdPerson: Word('одерживает', 2),
  plural1stPerson: Word('одерживаем', 2),
  plural2ndPerson: Word('одерживаете', 2),
  plural3rdPerson: Word('одерживают', 2),
  masculinePast: Word('одерживал', 2),
  femininePast: Word('одерживала', 2),
  neuterPast: Word('одерживало', 2),
  pluralPast: Word('одерживали', 2),
  imperativeInformal: Word('одерживай', 2),
  imperativeFormal: Word('одерживайте', 2),
  imperfect: [],
};

perfectVerbs.set(одерживать.name.text, одерживать);

export { одерживать };