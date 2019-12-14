import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обыграть: PerfectVerb = {
  name: Word('обыграть', 5),
  singular1stPerson: Word('обыграю', 5),
  singular2ndPerson: Word('обыграешь', 5),
  singular3rdPerson: Word('обыграет', 5),
  plural1stPerson: Word('обыграем', 5),
  plural2ndPerson: Word('обыграете', 5),
  plural3rdPerson: Word('обыграют', 5),
  masculinePast: Word('обыграл', 5),
  femininePast: Word('обыграла', 5),
  neuterPast: Word('обыграло', 5),
  pluralPast: Word('обыграли', 5),
  imperativeInformal: Word('обыграй', 5),
  imperativeFormal: Word('обыграйте', 5),
  imperfect: [],
};

perfectVerbs.set(обыграть.name.text, обыграть);

export { обыграть };