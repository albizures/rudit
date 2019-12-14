import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приказать: PerfectVerb = {
  name: Word('приказать', 6),
  singular1stPerson: Word('прикажу', 6),
  singular2ndPerson: Word('прикажешь', 4),
  singular3rdPerson: Word('прикажет', 4),
  plural1stPerson: Word('прикажем', 4),
  plural2ndPerson: Word('прикажете', 4),
  plural3rdPerson: Word('прикажут', 4),
  masculinePast: Word('приказал', 6),
  femininePast: Word('приказала', 6),
  neuterPast: Word('приказало', 6),
  pluralPast: Word('приказали', 6),
  imperativeInformal: Word('прикажи', 6),
  imperativeFormal: Word('прикажите', 6),
  imperfect: ['приказывать'],
};

perfectVerbs.set(приказать.name.text, приказать);

export { приказать };