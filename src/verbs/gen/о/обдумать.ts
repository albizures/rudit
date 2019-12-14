import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обдумать: PerfectVerb = {
  name: Word('обдумать', 3),
  singular1stPerson: Word('обдумаю', 3),
  singular2ndPerson: Word('обдумаешь', 3),
  singular3rdPerson: Word('обдумает', 3),
  plural1stPerson: Word('обдумаем', 3),
  plural2ndPerson: Word('обдумаете', 3),
  plural3rdPerson: Word('обдумают', 3),
  masculinePast: Word('обдумал', 3),
  femininePast: Word('обдумала', 3),
  neuterPast: Word('обдумало', 3),
  pluralPast: Word('обдумали', 3),
  imperativeInformal: Word('обдумай', 3),
  imperativeFormal: Word('обдумайте', 3),
  imperfect: ['обдумывать'],
};

perfectVerbs.set(обдумать.name.text, обдумать);

export { обдумать };