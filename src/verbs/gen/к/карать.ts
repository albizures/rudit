import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const карать: PerfectVerb = {
  name: Word('карать', 3),
  singular1stPerson: Word('караю', 3),
  singular2ndPerson: Word('караешь', 3),
  singular3rdPerson: Word('карает', 3),
  plural1stPerson: Word('караем', 3),
  plural2ndPerson: Word('караете', 3),
  plural3rdPerson: Word('карают', 3),
  masculinePast: Word('карал', 3),
  femininePast: Word('карала', 3),
  neuterPast: Word('карало', 3),
  pluralPast: Word('карали', 3),
  imperativeInformal: Word('карай', 3),
  imperativeFormal: Word('карайте', 3),
  imperfect: [],
};

perfectVerbs.set(карать.name.text, карать);

export { карать };