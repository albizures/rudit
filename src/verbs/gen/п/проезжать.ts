import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проезжать: PerfectVerb = {
  name: Word('проезжать', 6),
  singular1stPerson: Word('проезжаю', 6),
  singular2ndPerson: Word('проезжаешь', 6),
  singular3rdPerson: Word('проезжает', 6),
  plural1stPerson: Word('проезжаем', 6),
  plural2ndPerson: Word('проезжаете', 6),
  plural3rdPerson: Word('проезжают', 6),
  masculinePast: Word('проезжал', 6),
  femininePast: Word('проезжала', 6),
  neuterPast: Word('проезжало', 6),
  pluralPast: Word('проезжали', 6),
  imperativeInformal: Word('проезжай', 6),
  imperativeFormal: Word('проезжайте', 6),
  imperfect: [],
};

perfectVerbs.set(проезжать.name.text, проезжать);

export { проезжать };