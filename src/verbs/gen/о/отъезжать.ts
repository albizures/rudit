import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отъезжать: PerfectVerb = {
  name: Word('отъезжать', 6),
  singular1stPerson: Word('отъезжаю', 6),
  singular2ndPerson: Word('отъезжаешь', 6),
  singular3rdPerson: Word('отъезжает', 6),
  plural1stPerson: Word('отъезжаем', 6),
  plural2ndPerson: Word('отъезжаете', 6),
  plural3rdPerson: Word('отъезжают', 6),
  masculinePast: Word('отъезжал', 6),
  femininePast: Word('отъезжала', 6),
  neuterPast: Word('отъезжало', 6),
  pluralPast: Word('отъезжали', 6),
  imperativeInformal: Word('отъезжай', 6),
  imperativeFormal: Word('отъезжайте', 6),
  imperfect: [],
};

perfectVerbs.set(отъезжать.name.text, отъезжать);

export { отъезжать };