import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поиграть: PerfectVerb = {
  name: Word('поиграть', 5),
  singular1stPerson: Word('поиграю', 5),
  singular2ndPerson: Word('поиграешь', 5),
  singular3rdPerson: Word('поиграет', 5),
  plural1stPerson: Word('поиграем', 5),
  plural2ndPerson: Word('поиграете', 5),
  plural3rdPerson: Word('поиграют', 5),
  masculinePast: Word('поиграл', 5),
  femininePast: Word('поиграла', 5),
  neuterPast: Word('поиграло', 5),
  pluralPast: Word('поиграли', 5),
  imperativeInformal: Word('поиграй', 5),
  imperativeFormal: Word('поиграйте', 5),
  imperfect: [],
};

perfectVerbs.set(поиграть.name.text, поиграть);

export { поиграть };