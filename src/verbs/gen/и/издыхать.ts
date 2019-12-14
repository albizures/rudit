import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const издыхать: PerfectVerb = {
  name: Word('издыхать', 5),
  singular1stPerson: Word('издыхаю', 5),
  singular2ndPerson: Word('издыхаешь', 5),
  singular3rdPerson: Word('издыхает', 5),
  plural1stPerson: Word('издыхаем', 5),
  plural2ndPerson: Word('издыхаете', 5),
  plural3rdPerson: Word('издыхают', 5),
  masculinePast: Word('издыхал', 5),
  femininePast: Word('издыхала', 5),
  neuterPast: Word('издыхало', 5),
  pluralPast: Word('издыхали', 5),
  imperativeInformal: Word('издыхай', 5),
  imperativeFormal: Word('издыхайте', 5),
  imperfect: [],
};

perfectVerbs.set(издыхать.name.text, издыхать);

export { издыхать };