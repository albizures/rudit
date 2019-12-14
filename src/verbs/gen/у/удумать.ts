import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удумать: PerfectVerb = {
  name: Word('удумать', 2),
  singular1stPerson: Word('удумаю', 2),
  singular2ndPerson: Word('удумаешь', 2),
  singular3rdPerson: Word('удумает', 2),
  plural1stPerson: Word('удумаем', 2),
  plural2ndPerson: Word('удумаете', 2),
  plural3rdPerson: Word('удумают', 2),
  masculinePast: Word('удумал', 2),
  femininePast: Word('удумала', 2),
  neuterPast: Word('удумало', 2),
  pluralPast: Word('удумали', 2),
  imperativeInformal: Word('удумай', 2),
  imperativeFormal: Word('удумайте', 2),
  imperfect: [],
};

perfectVerbs.set(удумать.name.text, удумать);

export { удумать };