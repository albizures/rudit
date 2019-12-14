import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продумать: PerfectVerb = {
  name: Word('продумать', 4),
  singular1stPerson: Word('продумаю', 4),
  singular2ndPerson: Word('продумаешь', 4),
  singular3rdPerson: Word('продумает', 4),
  plural1stPerson: Word('продумаем', 4),
  plural2ndPerson: Word('продумаете', 4),
  plural3rdPerson: Word('продумают', 4),
  masculinePast: Word('продумал', 4),
  femininePast: Word('продумала', 4),
  neuterPast: Word('продумало', 4),
  pluralPast: Word('продумали', 4),
  imperativeInformal: Word('продумай', 4),
  imperativeFormal: Word('продумайте', 4),
  imperfect: [],
};

perfectVerbs.set(продумать.name.text, продумать);

export { продумать };