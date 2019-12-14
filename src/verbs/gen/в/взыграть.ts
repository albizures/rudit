import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взыграть: PerfectVerb = {
  name: Word('взыграть', 5),
  singular1stPerson: Word('взыграю', 5),
  singular2ndPerson: Word('взыграешь', 5),
  singular3rdPerson: Word('взыграет', 5),
  plural1stPerson: Word('взыграем', 5),
  plural2ndPerson: Word('взыграете', 5),
  plural3rdPerson: Word('взыграют', 5),
  masculinePast: Word('взыграл', 5),
  femininePast: Word('взыграла', 5),
  neuterPast: Word('взыграло', 5),
  pluralPast: Word('взыграли', 5),
  imperativeInformal: Word('взыграй', 5),
  imperativeFormal: Word('взыграйте', 5),
  imperfect: [],
};

perfectVerbs.set(взыграть.name.text, взыграть);

export { взыграть };