import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдерживать: PerfectVerb = {
  name: Word('сдерживать', 2),
  singular1stPerson: Word('сдерживаю', 2),
  singular2ndPerson: Word('сдерживаешь', 2),
  singular3rdPerson: Word('сдерживает', 2),
  plural1stPerson: Word('сдерживаем', 2),
  plural2ndPerson: Word('сдерживаете', 2),
  plural3rdPerson: Word('сдерживают', 2),
  masculinePast: Word('сдерживал', 2),
  femininePast: Word('сдерживала', 2),
  neuterPast: Word('сдерживало', 2),
  pluralPast: Word('сдерживали', 2),
  imperativeInformal: Word('сдерживай', 2),
  imperativeFormal: Word('сдерживайте', 2),
  imperfect: [],
};

perfectVerbs.set(сдерживать.name.text, сдерживать);

export { сдерживать };