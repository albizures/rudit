import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздеть: PerfectVerb = {
  name: Word('раздеть', 4),
  singular1stPerson: Word('раздену', 4),
  singular2ndPerson: Word('разденешь', 4),
  singular3rdPerson: Word('разденет', 4),
  plural1stPerson: Word('разденем', 4),
  plural2ndPerson: Word('разденете', 4),
  plural3rdPerson: Word('разденут', 4),
  masculinePast: Word('раздел', 4),
  femininePast: Word('раздела', 4),
  neuterPast: Word('раздело', 4),
  pluralPast: Word('раздели', 4),
  imperativeInformal: Word('раздень', 4),
  imperativeFormal: Word('разденьте', 4),
  imperfect: ['раздевать'],
};

perfectVerbs.set(раздеть.name.text, раздеть);

export { раздеть };