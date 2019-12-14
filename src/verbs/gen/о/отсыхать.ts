import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсыхать: PerfectVerb = {
  name: Word('отсыхать', 5),
  singular1stPerson: Word('отсыхаю', 5),
  singular2ndPerson: Word('отсыхаешь', 5),
  singular3rdPerson: Word('отсыхает', 5),
  plural1stPerson: Word('отсыхаем', 5),
  plural2ndPerson: Word('отсыхаете', 5),
  plural3rdPerson: Word('отсыхают', 5),
  masculinePast: Word('отсыхал', 5),
  femininePast: Word('отсыхала', 5),
  neuterPast: Word('отсыхало', 5),
  pluralPast: Word('отсыхали', 5),
  imperativeInformal: Word('отсыхай', 5),
  imperativeFormal: Word('отсыхайте', 5),
  imperfect: [],
};

perfectVerbs.set(отсыхать.name.text, отсыхать);

export { отсыхать };