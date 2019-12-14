import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const занижать: PerfectVerb = {
  name: Word('занижать', 5),
  singular1stPerson: Word('занижаю', 5),
  singular2ndPerson: Word('занижаешь', 5),
  singular3rdPerson: Word('занижает', 5),
  plural1stPerson: Word('занижаем', 5),
  plural2ndPerson: Word('занижаете', 5),
  plural3rdPerson: Word('занижают', 5),
  masculinePast: Word('занижал', 5),
  femininePast: Word('занижала', 5),
  neuterPast: Word('занижало', 5),
  pluralPast: Word('занижали', 5),
  imperativeInformal: Word('занижай', 5),
  imperativeFormal: Word('занижайте', 5),
  imperfect: [],
};

perfectVerbs.set(занижать.name.text, занижать);

export { занижать };