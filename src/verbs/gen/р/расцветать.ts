import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расцветать: PerfectVerb = {
  name: Word('расцветать', 7),
  singular1stPerson: Word('расцветаю', 7),
  singular2ndPerson: Word('расцветаешь', 7),
  singular3rdPerson: Word('расцветает', 7),
  plural1stPerson: Word('расцветаем', 7),
  plural2ndPerson: Word('расцветаете', 7),
  plural3rdPerson: Word('расцветают', 7),
  masculinePast: Word('расцветал', 7),
  femininePast: Word('расцветала', 7),
  neuterPast: Word('расцветало', 7),
  pluralPast: Word('расцветали', 7),
  imperativeInformal: Word('расцветай', 7),
  imperativeFormal: Word('расцветайте', 7),
  imperfect: [],
};

perfectVerbs.set(расцветать.name.text, расцветать);

export { расцветать };