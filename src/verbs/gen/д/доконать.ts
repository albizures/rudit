import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доконать: PerfectVerb = {
  name: Word('доконать', 5),
  singular1stPerson: Word('доконаю', 5),
  singular2ndPerson: Word('доконаешь', 5),
  singular3rdPerson: Word('доконает', 5),
  plural1stPerson: Word('доконаем', 5),
  plural2ndPerson: Word('доконаете', 5),
  plural3rdPerson: Word('доконают', 5),
  masculinePast: Word('доконал', 5),
  femininePast: Word('доконала', 5),
  neuterPast: Word('доконало', 5),
  pluralPast: Word('доконали', 5),
  imperativeInformal: Word('доконай', 5),
  imperativeFormal: Word('доконайте', 5),
  imperfect: [],
};

perfectVerbs.set(доконать.name.text, доконать);

export { доконать };