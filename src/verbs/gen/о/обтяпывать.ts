import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обтяпывать: PerfectVerb = {
  name: Word('обтяпывать', 3),
  singular1stPerson: Word('обтяпываю', 3),
  singular2ndPerson: Word('обтяпываешь', 3),
  singular3rdPerson: Word('обтяпывает', 3),
  plural1stPerson: Word('обтяпываем', 3),
  plural2ndPerson: Word('обтяпываете', 3),
  plural3rdPerson: Word('обтяпывают', 3),
  masculinePast: Word('обтяпывал', 3),
  femininePast: Word('обтяпывала', 3),
  neuterPast: Word('обтяпывало', 3),
  pluralPast: Word('обтяпывали', 3),
  imperativeInformal: Word('обтяпывай', 3),
  imperativeFormal: Word('обтяпывайте', 3),
  imperfect: [],
};

perfectVerbs.set(обтяпывать.name.text, обтяпывать);

export { обтяпывать };