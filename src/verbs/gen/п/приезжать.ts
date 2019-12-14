import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приезжать: PerfectVerb = {
  name: Word('приезжать', 6),
  singular1stPerson: Word('приезжаю', 6),
  singular2ndPerson: Word('приезжаешь', 6),
  singular3rdPerson: Word('приезжает', 6),
  plural1stPerson: Word('приезжаем', 6),
  plural2ndPerson: Word('приезжаете', 6),
  plural3rdPerson: Word('приезжают', 6),
  masculinePast: Word('приезжал', 6),
  femininePast: Word('приезжала', 6),
  neuterPast: Word('приезжало', 6),
  pluralPast: Word('приезжали', 6),
  imperativeInformal: Word('приезжай', 6),
  imperativeFormal: Word('приезжайте', 6),
  imperfect: ['приехать'],
};

perfectVerbs.set(приезжать.name.text, приезжать);

export { приезжать };