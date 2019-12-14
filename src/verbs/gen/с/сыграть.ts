import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сыграть: PerfectVerb = {
  name: Word('сыграть', 4),
  singular1stPerson: Word('сыграю', 4),
  singular2ndPerson: Word('сыграешь', 4),
  singular3rdPerson: Word('сыграет', 4),
  plural1stPerson: Word('сыграем', 4),
  plural2ndPerson: Word('сыграете', 4),
  plural3rdPerson: Word('сыграют', 4),
  masculinePast: Word('сыграл', 4),
  femininePast: Word('сыграла', 4),
  neuterPast: Word('сыграло', 4),
  pluralPast: Word('сыграли', 4),
  imperativeInformal: Word('сыграй', 4),
  imperativeFormal: Word('сыграйте', 4),
  imperfect: ['играть'],
};

perfectVerbs.set(сыграть.name.text, сыграть);

export { сыграть };