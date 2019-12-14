import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const узнавать: PerfectVerb = {
  name: Word('узнавать', 5),
  singular1stPerson: Word('узнаю', 4),
  singular2ndPerson: Word('узнаёшь', 4),
  singular3rdPerson: Word('узнаёт', 4),
  plural1stPerson: Word('узнаём', 4),
  plural2ndPerson: Word('узнаёте', 4),
  plural3rdPerson: Word('узнают', 4),
  masculinePast: Word('узнавал', 5),
  femininePast: Word('узнавала', 5),
  neuterPast: Word('узнавало', 5),
  pluralPast: Word('узнавали', 5),
  imperativeInformal: Word('узнавай', 5),
  imperativeFormal: Word('узнавайте', 5),
  imperfect: ['узнать'],
};

perfectVerbs.set(узнавать.name.text, узнавать);

export { узнавать };