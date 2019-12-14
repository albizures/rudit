import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвыкать: PerfectVerb = {
  name: Word('отвыкать', 5),
  singular1stPerson: Word('отвыкаю', 5),
  singular2ndPerson: Word('отвыкаешь', 5),
  singular3rdPerson: Word('отвыкает', 5),
  plural1stPerson: Word('отвыкаем', 5),
  plural2ndPerson: Word('отвыкаете', 5),
  plural3rdPerson: Word('отвыкают', 5),
  masculinePast: Word('отвыкал', 5),
  femininePast: Word('отвыкала', 5),
  neuterPast: Word('отвыкало', 5),
  pluralPast: Word('отвыкали', 5),
  imperativeInformal: Word('отвыкай', 5),
  imperativeFormal: Word('отвыкайте', 5),
  imperfect: [],
};

perfectVerbs.set(отвыкать.name.text, отвыкать);

export { отвыкать };