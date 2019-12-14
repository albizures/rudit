import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const громыхать: PerfectVerb = {
  name: Word('громыхать', 6),
  singular1stPerson: Word('громыхаю', 6),
  singular2ndPerson: Word('громыхаешь', 6),
  singular3rdPerson: Word('громыхает', 6),
  plural1stPerson: Word('громыхаем', 6),
  plural2ndPerson: Word('громыхаете', 6),
  plural3rdPerson: Word('громыхают', 6),
  masculinePast: Word('громыхал', 6),
  femininePast: Word('громыхала', 6),
  neuterPast: Word('громыхало', 6),
  pluralPast: Word('громыхали', 6),
  imperativeInformal: Word('громыхай', 6),
  imperativeFormal: Word('громыхайте', 6),
  imperfect: [],
};

perfectVerbs.set(громыхать.name.text, громыхать);

export { громыхать };