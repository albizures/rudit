import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переиграть: PerfectVerb = {
  name: Word('переиграть', 7),
  singular1stPerson: Word('переиграю', 7),
  singular2ndPerson: Word('переиграешь', 7),
  singular3rdPerson: Word('переиграет', 7),
  plural1stPerson: Word('переиграем', 7),
  plural2ndPerson: Word('переиграете', 7),
  plural3rdPerson: Word('переиграют', 7),
  masculinePast: Word('переиграл', 7),
  femininePast: Word('переиграла', 7),
  neuterPast: Word('переиграло', 7),
  pluralPast: Word('переиграли', 7),
  imperativeInformal: Word('переиграй', 7),
  imperativeFormal: Word('переиграйте', 7),
  imperfect: [],
};

perfectVerbs.set(переиграть.name.text, переиграть);

export { переиграть };