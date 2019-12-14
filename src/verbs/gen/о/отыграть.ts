import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отыграть: PerfectVerb = {
  name: Word('отыграть', 5),
  singular1stPerson: Word('отыграю', 5),
  singular2ndPerson: Word('отыграешь', 5),
  singular3rdPerson: Word('отыграет', 5),
  plural1stPerson: Word('отыграем', 5),
  plural2ndPerson: Word('отыграете', 5),
  plural3rdPerson: Word('отыграют', 5),
  masculinePast: Word('отыграл', 5),
  femininePast: Word('отыграла', 5),
  neuterPast: Word('отыграло', 5),
  pluralPast: Word('отыграли', 5),
  imperativeInformal: Word('отыграй', 5),
  imperativeFormal: Word('отыграйте', 5),
  imperfect: [],
};

perfectVerbs.set(отыграть.name.text, отыграть);

export { отыграть };