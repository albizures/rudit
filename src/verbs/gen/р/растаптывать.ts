import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растаптывать: PerfectVerb = {
  name: Word('растаптывать', 4),
  singular1stPerson: Word('растаптываю', 4),
  singular2ndPerson: Word('растаптываешь', 4),
  singular3rdPerson: Word('растаптывает', 4),
  plural1stPerson: Word('растаптываем', 4),
  plural2ndPerson: Word('растаптываете', 4),
  plural3rdPerson: Word('растаптывают', 4),
  masculinePast: Word('растаптывал', 4),
  femininePast: Word('растаптывала', 4),
  neuterPast: Word('растаптывало', 4),
  pluralPast: Word('растаптывали', 4),
  imperativeInformal: Word('растаптывай', 4),
  imperativeFormal: Word('растаптывайте', 4),
  imperfect: [],
};

perfectVerbs.set(растаптывать.name.text, растаптывать);

export { растаптывать };