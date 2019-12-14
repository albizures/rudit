import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмануть: PerfectVerb = {
  name: Word('обмануть', 5),
  singular1stPerson: Word('обману', 5),
  singular2ndPerson: Word('обманешь', 3),
  singular3rdPerson: Word('обманет', 3),
  plural1stPerson: Word('обманем', 3),
  plural2ndPerson: Word('обманете', 3),
  plural3rdPerson: Word('обманут', 3),
  masculinePast: Word('обманул', 5),
  femininePast: Word('обманула', 5),
  neuterPast: Word('обмануло', 5),
  pluralPast: Word('обманули', 5),
  imperativeInformal: Word('обмани', 5),
  imperativeFormal: Word('обманите', 5),
  imperfect: ['обманывать'],
};

perfectVerbs.set(обмануть.name.text, обмануть);

export { обмануть };