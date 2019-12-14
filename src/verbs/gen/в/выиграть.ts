import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выиграть: PerfectVerb = {
  name: Word('выиграть', 1),
  singular1stPerson: Word('выиграю', 1),
  singular2ndPerson: Word('выиграешь', 1),
  singular3rdPerson: Word('выиграет', 1),
  plural1stPerson: Word('выиграем', 1),
  plural2ndPerson: Word('выиграете', 1),
  plural3rdPerson: Word('выиграют', 1),
  masculinePast: Word('выиграл', 1),
  femininePast: Word('выиграла', 1),
  neuterPast: Word('выиграло', 1),
  pluralPast: Word('выиграли', 1),
  imperativeInformal: Word('выиграй', 1),
  imperativeFormal: Word('выиграйте', 1),
  imperfect: ['выигрывать'],
};

perfectVerbs.set(выиграть.name.text, выиграть);

export { выиграть };