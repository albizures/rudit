import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отчищать: PerfectVerb = {
  name: Word('отчищать', 5),
  singular1stPerson: Word('отчищаю', 5),
  singular2ndPerson: Word('отчищаешь', 5),
  singular3rdPerson: Word('отчищает', 5),
  plural1stPerson: Word('отчищаем', 5),
  plural2ndPerson: Word('отчищаете', 5),
  plural3rdPerson: Word('отчищают', 5),
  masculinePast: Word('отчищал', 5),
  femininePast: Word('отчищала', 5),
  neuterPast: Word('отчищало', 5),
  pluralPast: Word('отчищали', 5),
  imperativeInformal: Word('отчищай', 5),
  imperativeFormal: Word('отчищайте', 5),
  imperfect: [],
};

perfectVerbs.set(отчищать.name.text, отчищать);

export { отчищать };