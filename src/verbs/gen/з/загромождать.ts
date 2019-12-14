import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загромождать: PerfectVerb = {
  name: Word('загромождать', 9),
  singular1stPerson: Word('загромождаю', 9),
  singular2ndPerson: Word('загромождаешь', 9),
  singular3rdPerson: Word('загромождает', 9),
  plural1stPerson: Word('загромождаем', 9),
  plural2ndPerson: Word('загромождаете', 9),
  plural3rdPerson: Word('загромождают', 9),
  masculinePast: Word('загромождал', 9),
  femininePast: Word('загромождала', 9),
  neuterPast: Word('загромождало', 9),
  pluralPast: Word('загромождали', 9),
  imperativeInformal: Word('загромождай', 9),
  imperativeFormal: Word('загромождайте', 9),
  imperfect: [],
};

perfectVerbs.set(загромождать.name.text, загромождать);

export { загромождать };