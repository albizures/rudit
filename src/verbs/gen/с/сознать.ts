import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сознать: PerfectVerb = {
  name: Word('сознать', 4),
  singular1stPerson: Word('сознаю', 4),
  singular2ndPerson: Word('сознаешь', 4),
  singular3rdPerson: Word('сознает', 4),
  plural1stPerson: Word('сознаем', 4),
  plural2ndPerson: Word('сознаете', 4),
  plural3rdPerson: Word('сознают', 4),
  masculinePast: Word('сознал', 4),
  femininePast: Word('сознала', 4),
  neuterPast: Word('сознало', 4),
  pluralPast: Word('сознали', 4),
  imperativeInformal: Word('сознай', 4),
  imperativeFormal: Word('сознайте', 4),
  imperfect: [],
};

perfectVerbs.set(сознать.name.text, сознать);

export { сознать };