import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засыхать: PerfectVerb = {
  name: Word('засыхать', 5),
  singular1stPerson: Word('засыхаю', 5),
  singular2ndPerson: Word('засыхаешь', 5),
  singular3rdPerson: Word('засыхает', 5),
  plural1stPerson: Word('засыхаем', 5),
  plural2ndPerson: Word('засыхаете', 5),
  plural3rdPerson: Word('засыхают', 5),
  masculinePast: Word('засыхал', 5),
  femininePast: Word('засыхала', 5),
  neuterPast: Word('засыхало', 5),
  pluralPast: Word('засыхали', 5),
  imperativeInformal: Word('засыхай', 5),
  imperativeFormal: Word('засыхайте', 5),
  imperfect: [],
};

perfectVerbs.set(засыхать.name.text, засыхать);

export { засыхать };