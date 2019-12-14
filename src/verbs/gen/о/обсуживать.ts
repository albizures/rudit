import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обсуживать: PerfectVerb = {
  name: Word('обсуживать', 3),
  singular1stPerson: Word('обсуживаю', 3),
  singular2ndPerson: Word('обсуживаешь', 3),
  singular3rdPerson: Word('обсуживает', 3),
  plural1stPerson: Word('обсуживаем', 3),
  plural2ndPerson: Word('обсуживаете', 3),
  plural3rdPerson: Word('обсуживают', 3),
  masculinePast: Word('обсуживал', 3),
  femininePast: Word('обсуживала', 3),
  neuterPast: Word('обсуживало', 3),
  pluralPast: Word('обсуживали', 3),
  imperativeInformal: Word('обсуживай', 3),
  imperativeFormal: Word('обсуживайте', 3),
  imperfect: [],
};

perfectVerbs.set(обсуживать.name.text, обсуживать);

export { обсуживать };