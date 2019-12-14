import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const колыхать: PerfectVerb = {
  name: Word('колыхать', 5),
  singular1stPerson: Word('колышу', 3),
  singular2ndPerson: Word('колышешь', 3),
  singular3rdPerson: Word('колышет', 3),
  plural1stPerson: Word('колышем', 3),
  plural2ndPerson: Word('колышете', 3),
  plural3rdPerson: Word('колышут', 3),
  masculinePast: Word('колыхал', 5),
  femininePast: Word('колыхала', 5),
  neuterPast: Word('колыхало', 5),
  pluralPast: Word('колыхали', 5),
  imperativeInformal: Word('колышь', 3),
  imperativeFormal: Word('колышьте', 3),
  imperfect: [],
};

perfectVerbs.set(колыхать.name.text, колыхать);

export { колыхать };