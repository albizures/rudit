import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растаскать: PerfectVerb = {
  name: Word('растаскать', 7),
  singular1stPerson: Word('растаскаю', 7),
  singular2ndPerson: Word('растаскаешь', 7),
  singular3rdPerson: Word('растаскает', 7),
  plural1stPerson: Word('растаскаем', 7),
  plural2ndPerson: Word('растаскаете', 7),
  plural3rdPerson: Word('растаскают', 7),
  masculinePast: Word('растаскал', 7),
  femininePast: Word('растаскала', 7),
  neuterPast: Word('растаскало', 7),
  pluralPast: Word('растаскали', 7),
  imperativeInformal: Word('растаскай', 7),
  imperativeFormal: Word('растаскайте', 7),
  imperfect: [],
};

perfectVerbs.set(растаскать.name.text, растаскать);

export { растаскать };