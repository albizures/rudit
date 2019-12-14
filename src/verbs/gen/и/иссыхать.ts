import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const иссыхать: PerfectVerb = {
  name: Word('иссыхать', 5),
  singular1stPerson: Word('иссыхаю', 5),
  singular2ndPerson: Word('иссыхаешь', 5),
  singular3rdPerson: Word('иссыхает', 5),
  plural1stPerson: Word('иссыхаем', 5),
  plural2ndPerson: Word('иссыхаете', 5),
  plural3rdPerson: Word('иссыхают', 5),
  masculinePast: Word('иссыхал', 5),
  femininePast: Word('иссыхала', 5),
  neuterPast: Word('иссыхало', 5),
  pluralPast: Word('иссыхали', 5),
  imperativeInformal: Word('иссыхай', 5),
  imperativeFormal: Word('иссыхайте', 5),
  imperfect: [],
};

perfectVerbs.set(иссыхать.name.text, иссыхать);

export { иссыхать };