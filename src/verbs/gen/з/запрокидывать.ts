import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запрокидывать: PerfectVerb = {
  name: Word('запрокидывать', 6),
  singular1stPerson: Word('запрокидываю', 6),
  singular2ndPerson: Word('запрокидываешь', 6),
  singular3rdPerson: Word('запрокидывает', 6),
  plural1stPerson: Word('запрокидываем', 6),
  plural2ndPerson: Word('запрокидываете', 6),
  plural3rdPerson: Word('запрокидывают', 6),
  masculinePast: Word('запрокидывал', 6),
  femininePast: Word('запрокидывала', 6),
  neuterPast: Word('запрокидывало', 6),
  pluralPast: Word('запрокидывали', 6),
  imperativeInformal: Word('запрокидывай', 6),
  imperativeFormal: Word('запрокидывайте', 6),
  imperfect: [],
};

perfectVerbs.set(запрокидывать.name.text, запрокидывать);

export { запрокидывать };