import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зиять: PerfectVerb = {
  name: Word('зиять', 2),
  singular1stPerson: Word('зияю', 2),
  singular2ndPerson: Word('зияешь', 2),
  singular3rdPerson: Word('зияет', 2),
  plural1stPerson: Word('зияем', 2),
  plural2ndPerson: Word('зияете', 2),
  plural3rdPerson: Word('зияют', 2),
  masculinePast: Word('зиял', 2),
  femininePast: Word('зияла', 2),
  neuterPast: Word('зияло', 2),
  pluralPast: Word('зияли', 2),
  imperativeInformal: Word('зияй', 2),
  imperativeFormal: Word('зияйте', 2),
  imperfect: [],
};

perfectVerbs.set(зиять.name.text, зиять);

export { зиять };