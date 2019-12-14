import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разыграть: PerfectVerb = {
  name: Word('разыграть', 6),
  singular1stPerson: Word('разыграю', 6),
  singular2ndPerson: Word('разыграешь', 6),
  singular3rdPerson: Word('разыграет', 6),
  plural1stPerson: Word('разыграем', 6),
  plural2ndPerson: Word('разыграете', 6),
  plural3rdPerson: Word('разыграют', 6),
  masculinePast: Word('разыграл', 6),
  femininePast: Word('разыграла', 6),
  neuterPast: Word('разыграло', 6),
  pluralPast: Word('разыграли', 6),
  imperativeInformal: Word('разыграй', 6),
  imperativeFormal: Word('разыграйте', 6),
  imperfect: ['разыгрывать'],
};

perfectVerbs.set(разыграть.name.text, разыграть);

export { разыграть };