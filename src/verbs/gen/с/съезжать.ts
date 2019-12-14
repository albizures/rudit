import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const съезжать: PerfectVerb = {
  name: Word('съезжать', 5),
  singular1stPerson: Word('съезжаю', 5),
  singular2ndPerson: Word('съезжаешь', 5),
  singular3rdPerson: Word('съезжает', 5),
  plural1stPerson: Word('съезжаем', 5),
  plural2ndPerson: Word('съезжаете', 5),
  plural3rdPerson: Word('съезжают', 5),
  masculinePast: Word('съезжал', 5),
  femininePast: Word('съезжала', 5),
  neuterPast: Word('съезжало', 5),
  pluralPast: Word('съезжали', 5),
  imperativeInformal: Word('съезжай', 5),
  imperativeFormal: Word('съезжайте', 5),
  imperfect: [],
};

perfectVerbs.set(съезжать.name.text, съезжать);

export { съезжать };