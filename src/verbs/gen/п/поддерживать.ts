import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поддерживать: PerfectVerb = {
  name: Word('поддерживать', 4),
  singular1stPerson: Word('поддерживаю', 4),
  singular2ndPerson: Word('поддерживаешь', 4),
  singular3rdPerson: Word('поддерживает', 4),
  plural1stPerson: Word('поддерживаем', 4),
  plural2ndPerson: Word('поддерживаете', 4),
  plural3rdPerson: Word('поддерживают', 4),
  masculinePast: Word('поддерживал', 4),
  femininePast: Word('поддерживала', 4),
  neuterPast: Word('поддерживало', 4),
  pluralPast: Word('поддерживали', 4),
  imperativeInformal: Word('поддерживай', 4),
  imperativeFormal: Word('поддерживайте', 4),
  imperfect: ['поддержать'],
};

perfectVerbs.set(поддерживать.name.text, поддерживать);

export { поддерживать };