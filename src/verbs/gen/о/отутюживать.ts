import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отутюживать: PerfectVerb = {
  name: Word('отутюживать', 4),
  singular1stPerson: Word('отутюживаю', 4),
  singular2ndPerson: Word('отутюживаешь', 4),
  singular3rdPerson: Word('отутюживает', 4),
  plural1stPerson: Word('отутюживаем', 4),
  plural2ndPerson: Word('отутюживаете', 4),
  plural3rdPerson: Word('отутюживают', 4),
  masculinePast: Word('отутюживал', 4),
  femininePast: Word('отутюживала', 4),
  neuterPast: Word('отутюживало', 4),
  pluralPast: Word('отутюживали', 4),
  imperativeInformal: Word('отутюживай', 4),
  imperativeFormal: Word('отутюживайте', 4),
  imperfect: [],
};

perfectVerbs.set(отутюживать.name.text, отутюживать);

export { отутюживать };