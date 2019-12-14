import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдерживать: PerfectVerb = {
  name: Word('выдерживать', 3),
  singular1stPerson: Word('выдерживаю', 3),
  singular2ndPerson: Word('выдерживаешь', 3),
  singular3rdPerson: Word('выдерживает', 3),
  plural1stPerson: Word('выдерживаем', 3),
  plural2ndPerson: Word('выдерживаете', 3),
  plural3rdPerson: Word('выдерживают', 3),
  masculinePast: Word('выдерживал', 3),
  femininePast: Word('выдерживала', 3),
  neuterPast: Word('выдерживало', 3),
  pluralPast: Word('выдерживали', 3),
  imperativeInformal: Word('выдерживай', 3),
  imperativeFormal: Word('выдерживайте', 3),
  imperfect: ['выдержать'],
};

perfectVerbs.set(выдерживать.name.text, выдерживать);

export { выдерживать };