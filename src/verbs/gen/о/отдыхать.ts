import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдыхать: PerfectVerb = {
  name: Word('отдыхать', 5),
  singular1stPerson: Word('отдыхаю', 5),
  singular2ndPerson: Word('отдыхаешь', 5),
  singular3rdPerson: Word('отдыхает', 5),
  plural1stPerson: Word('отдыхаем', 5),
  plural2ndPerson: Word('отдыхаете', 5),
  plural3rdPerson: Word('отдыхают', 5),
  masculinePast: Word('отдыхал', 5),
  femininePast: Word('отдыхала', 5),
  neuterPast: Word('отдыхало', 5),
  pluralPast: Word('отдыхали', 5),
  imperativeInformal: Word('отдыхай', 5),
  imperativeFormal: Word('отдыхайте', 5),
  imperfect: ['отдохнуть'],
};

perfectVerbs.set(отдыхать.name.text, отдыхать);

export { отдыхать };