import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдумать: PerfectVerb = {
  name: Word('выдумать', 1),
  singular1stPerson: Word('выдумаю', 1),
  singular2ndPerson: Word('выдумаешь', 1),
  singular3rdPerson: Word('выдумает', 1),
  plural1stPerson: Word('выдумаем', 1),
  plural2ndPerson: Word('выдумаете', 1),
  plural3rdPerson: Word('выдумают', 1),
  masculinePast: Word('выдумал', 1),
  femininePast: Word('выдумала', 1),
  neuterPast: Word('выдумало', 1),
  pluralPast: Word('выдумали', 1),
  imperativeInformal: Word('выдумай', 1),
  imperativeFormal: Word('выдумайте', 1),
  imperfect: [],
};

perfectVerbs.set(выдумать.name.text, выдумать);

export { выдумать };