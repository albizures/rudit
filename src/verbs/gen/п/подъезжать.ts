import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подъезжать: PerfectVerb = {
  name: Word('подъезжать', 7),
  singular1stPerson: Word('подъезжаю', 7),
  singular2ndPerson: Word('подъезжаешь', 7),
  singular3rdPerson: Word('подъезжает', 7),
  plural1stPerson: Word('подъезжаем', 7),
  plural2ndPerson: Word('подъезжаете', 7),
  plural3rdPerson: Word('подъезжают', 7),
  masculinePast: Word('подъезжал', 7),
  femininePast: Word('подъезжала', 7),
  neuterPast: Word('подъезжало', 7),
  pluralPast: Word('подъезжали', 7),
  imperativeInformal: Word('подъезжай', 7),
  imperativeFormal: Word('подъезжайте', 7),
  imperfect: [],
};

perfectVerbs.set(подъезжать.name.text, подъезжать);

export { подъезжать };