import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взгромождать: PerfectVerb = {
  name: Word('взгромождать', 9),
  singular1stPerson: Word('взгромождаю', 9),
  singular2ndPerson: Word('взгромождаешь', 9),
  singular3rdPerson: Word('взгромождает', 9),
  plural1stPerson: Word('взгромождаем', 9),
  plural2ndPerson: Word('взгромождаете', 9),
  plural3rdPerson: Word('взгромождают', 9),
  masculinePast: Word('взгромождал', 9),
  femininePast: Word('взгромождала', 9),
  neuterPast: Word('взгромождало', 9),
  pluralPast: Word('взгромождали', 9),
  imperativeInformal: Word('взгромождай', 9),
  imperativeFormal: Word('взгромождайте', 9),
  imperfect: [],
};

perfectVerbs.set(взгромождать.name.text, взгромождать);

export { взгромождать };