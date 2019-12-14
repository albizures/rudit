import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взъезжать: PerfectVerb = {
  name: Word('взъезжать', 6),
  singular1stPerson: Word('взъезжаю', 6),
  singular2ndPerson: Word('взъезжаешь', 6),
  singular3rdPerson: Word('взъезжает', 6),
  plural1stPerson: Word('взъезжаем', 6),
  plural2ndPerson: Word('взъезжаете', 6),
  plural3rdPerson: Word('взъезжают', 6),
  masculinePast: Word('взъезжал', 6),
  femininePast: Word('взъезжала', 6),
  neuterPast: Word('взъезжало', 6),
  pluralPast: Word('взъезжали', 6),
  imperativeInformal: Word('взъезжай', 6),
  imperativeFormal: Word('взъезжайте', 6),
  imperfect: [],
};

perfectVerbs.set(взъезжать.name.text, взъезжать);

export { взъезжать };