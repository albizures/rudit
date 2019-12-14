import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подыграть: PerfectVerb = {
  name: Word('подыграть', 6),
  singular1stPerson: Word('подыграю', 6),
  singular2ndPerson: Word('подыграешь', 6),
  singular3rdPerson: Word('подыграет', 6),
  plural1stPerson: Word('подыграем', 6),
  plural2ndPerson: Word('подыграете', 6),
  plural3rdPerson: Word('подыграют', 6),
  masculinePast: Word('подыграл', 6),
  femininePast: Word('подыграла', 6),
  neuterPast: Word('подыграло', 6),
  pluralPast: Word('подыграли', 6),
  imperativeInformal: Word('подыграй', 6),
  imperativeFormal: Word('подыграйте', 6),
  imperfect: [],
};

perfectVerbs.set(подыграть.name.text, подыграть);

export { подыграть };