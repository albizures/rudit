import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдыхать: PerfectVerb = {
  name: Word('выдыхать', 5),
  singular1stPerson: Word('выдыхаю', 5),
  singular2ndPerson: Word('выдыхаешь', 5),
  singular3rdPerson: Word('выдыхает', 5),
  plural1stPerson: Word('выдыхаем', 5),
  plural2ndPerson: Word('выдыхаете', 5),
  plural3rdPerson: Word('выдыхают', 5),
  masculinePast: Word('выдыхал', 5),
  femininePast: Word('выдыхала', 5),
  neuterPast: Word('выдыхало', 5),
  pluralPast: Word('выдыхали', 5),
  imperativeInformal: Word('выдыхай', 5),
  imperativeFormal: Word('выдыхайте', 5),
  imperfect: [],
};

perfectVerbs.set(выдыхать.name.text, выдыхать);

export { выдыхать };