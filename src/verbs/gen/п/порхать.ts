import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порхать: PerfectVerb = {
  name: Word('порхать', 4),
  singular1stPerson: Word('порхаю', 4),
  singular2ndPerson: Word('порхаешь', 4),
  singular3rdPerson: Word('порхает', 4),
  plural1stPerson: Word('порхаем', 4),
  plural2ndPerson: Word('порхаете', 4),
  plural3rdPerson: Word('порхают', 4),
  masculinePast: Word('порхал', 4),
  femininePast: Word('порхала', 4),
  neuterPast: Word('порхало', 4),
  pluralPast: Word('порхали', 4),
  imperativeInformal: Word('порхай', 4),
  imperativeFormal: Word('порхайте', 4),
  imperfect: [],
};

perfectVerbs.set(порхать.name.text, порхать);

export { порхать };