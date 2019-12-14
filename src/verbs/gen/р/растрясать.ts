import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растрясать: PerfectVerb = {
  name: Word('растрясать', 7),
  singular1stPerson: Word('растрясаю', 7),
  singular2ndPerson: Word('растрясаешь', 7),
  singular3rdPerson: Word('растрясает', 7),
  plural1stPerson: Word('растрясаем', 7),
  plural2ndPerson: Word('растрясаете', 7),
  plural3rdPerson: Word('растрясают', 7),
  masculinePast: Word('растрясал', 7),
  femininePast: Word('растрясала', 7),
  neuterPast: Word('растрясало', 7),
  pluralPast: Word('растрясали', 7),
  imperativeInformal: Word('растрясай', 7),
  imperativeFormal: Word('растрясайте', 7),
  imperfect: [],
};

perfectVerbs.set(растрясать.name.text, растрясать);

export { растрясать };