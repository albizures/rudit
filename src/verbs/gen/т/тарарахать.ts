import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тарарахать: PerfectVerb = {
  name: Word('тарарахать', 5),
  singular1stPerson: Word('тарарахаю', 5),
  singular2ndPerson: Word('тарарахаешь', 5),
  singular3rdPerson: Word('тарарахает', 5),
  plural1stPerson: Word('тарарахаем', 5),
  plural2ndPerson: Word('тарарахаете', 5),
  plural3rdPerson: Word('тарарахают', 5),
  masculinePast: Word('тарарахал', 5),
  femininePast: Word('тарарахала', 5),
  neuterPast: Word('тарарахало', 5),
  pluralPast: Word('тарарахали', 5),
  imperativeInformal: Word('тарарахай', 5),
  imperativeFormal: Word('тарарахайте', 5),
  imperfect: [],
};

perfectVerbs.set(тарарахать.name.text, тарарахать);

export { тарарахать };