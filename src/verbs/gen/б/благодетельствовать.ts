import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const благодетельствовать: PerfectVerb = {
  name: Word('благодетельствовать', 6),
  singular1stPerson: Word('благодетельствую', 6),
  singular2ndPerson: Word('благодетельствуешь', 6),
  singular3rdPerson: Word('благодетельствует', 6),
  plural1stPerson: Word('благодетельствуем', 6),
  plural2ndPerson: Word('благодетельствуете', 6),
  plural3rdPerson: Word('благодетельствуют', 6),
  masculinePast: Word('благодетельствовал', 6),
  femininePast: Word('благодетельствовала', 6),
  neuterPast: Word('благодетельствовало', 6),
  pluralPast: Word('благодетельствовали', 6),
  imperativeInformal: Word('благодетельствуй', 6),
  imperativeFormal: Word('благодетельствуйте', 6),
  imperfect: [],
};

perfectVerbs.set(благодетельствовать.name.text, благодетельствовать);

export { благодетельствовать };