import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доиграть: PerfectVerb = {
  name: Word('доиграть', 5),
  singular1stPerson: Word('доиграю', 5),
  singular2ndPerson: Word('доиграешь', 5),
  singular3rdPerson: Word('доиграет', 5),
  plural1stPerson: Word('доиграем', 5),
  plural2ndPerson: Word('доиграете', 5),
  plural3rdPerson: Word('доиграют', 5),
  masculinePast: Word('доиграл', 5),
  femininePast: Word('доиграла', 5),
  neuterPast: Word('доиграло', 5),
  pluralPast: Word('доиграли', 5),
  imperativeInformal: Word('доиграй', 5),
  imperativeFormal: Word('доиграйте', 5),
  imperfect: [],
};

perfectVerbs.set(доиграть.name.text, доиграть);

export { доиграть };