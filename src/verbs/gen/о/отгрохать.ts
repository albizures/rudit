import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отгрохать: PerfectVerb = {
  name: Word('отгрохать', 4),
  singular1stPerson: Word('отгрохаю', 4),
  singular2ndPerson: Word('отгрохаешь', 4),
  singular3rdPerson: Word('отгрохает', 4),
  plural1stPerson: Word('отгрохаем', 4),
  plural2ndPerson: Word('отгрохаете', 4),
  plural3rdPerson: Word('отгрохают', 4),
  masculinePast: Word('отгрохал', 4),
  femininePast: Word('отгрохала', 4),
  neuterPast: Word('отгрохало', 4),
  pluralPast: Word('отгрохали', 4),
  imperativeInformal: Word('отгрохай', 4),
  imperativeFormal: Word('отгрохайте', 4),
  imperfect: [],
};

perfectVerbs.set(отгрохать.name.text, отгрохать);

export { отгрохать };