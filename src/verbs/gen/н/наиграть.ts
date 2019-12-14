import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наиграть: PerfectVerb = {
  name: Word('наиграть', 5),
  singular1stPerson: Word('наиграю', 5),
  singular2ndPerson: Word('наиграешь', 5),
  singular3rdPerson: Word('наиграет', 5),
  plural1stPerson: Word('наиграем', 5),
  plural2ndPerson: Word('наиграете', 5),
  plural3rdPerson: Word('наиграют', 5),
  masculinePast: Word('наиграл', 5),
  femininePast: Word('наиграла', 5),
  neuterPast: Word('наиграло', 5),
  pluralPast: Word('наиграли', 5),
  imperativeInformal: Word('наиграй', 5),
  imperativeFormal: Word('наиграйте', 5),
  imperfect: [],
};

perfectVerbs.set(наиграть.name.text, наиграть);

export { наиграть };