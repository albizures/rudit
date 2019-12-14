import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const капризничать: PerfectVerb = {
  name: Word('капризничать', 4),
  singular1stPerson: Word('капризничаю', 4),
  singular2ndPerson: Word('капризничаешь', 4),
  singular3rdPerson: Word('капризничает', 4),
  plural1stPerson: Word('капризничаем', 4),
  plural2ndPerson: Word('капризничаете', 4),
  plural3rdPerson: Word('капризничают', 4),
  masculinePast: Word('капризничал', 4),
  femininePast: Word('капризничала', 4),
  neuterPast: Word('капризничало', 4),
  pluralPast: Word('капризничали', 4),
  imperativeInformal: Word('капризничай', 4),
  imperativeFormal: Word('капризничайте', 4),
  imperfect: [],
};

perfectVerbs.set(капризничать.name.text, капризничать);

export { капризничать };