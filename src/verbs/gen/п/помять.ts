import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помять: PerfectVerb = {
  name: Word('помять', 3),
  singular1stPerson: Word('помну', 4),
  singular2ndPerson: Word('помнёшь', 1),
  singular3rdPerson: Word('помнёт', 1),
  plural1stPerson: Word('помнём', 1),
  plural2ndPerson: Word('помнёте', 6),
  plural3rdPerson: Word('помнут', 4),
  masculinePast: Word('помял', 3),
  femininePast: Word('помяла', 3),
  neuterPast: Word('помяло', 3),
  pluralPast: Word('помяли', 3),
  imperativeInformal: Word('помни', 4),
  imperativeFormal: Word('помните', 4),
  imperfect: ['мять'],
};

perfectVerbs.set(помять.name.text, помять);

export { помять };