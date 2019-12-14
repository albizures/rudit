import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заиграть: PerfectVerb = {
  name: Word('заиграть', 5),
  singular1stPerson: Word('заиграю', 5),
  singular2ndPerson: Word('заиграешь', 5),
  singular3rdPerson: Word('заиграет', 5),
  plural1stPerson: Word('заиграем', 5),
  plural2ndPerson: Word('заиграете', 5),
  plural3rdPerson: Word('заиграют', 5),
  masculinePast: Word('заиграл', 5),
  femininePast: Word('заиграла', 5),
  neuterPast: Word('заиграло', 5),
  pluralPast: Word('заиграли', 5),
  imperativeInformal: Word('заиграй', 5),
  imperativeFormal: Word('заиграйте', 5),
  imperfect: [],
};

perfectVerbs.set(заиграть.name.text, заиграть);

export { заиграть };