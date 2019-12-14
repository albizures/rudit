import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмечать: PerfectVerb = {
  name: Word('отмечать', 5),
  singular1stPerson: Word('отмечаю', 5),
  singular2ndPerson: Word('отмечаешь', 5),
  singular3rdPerson: Word('отмечает', 5),
  plural1stPerson: Word('отмечаем', 5),
  plural2ndPerson: Word('отмечаете', 5),
  plural3rdPerson: Word('отмечают', 5),
  masculinePast: Word('отмечал', 5),
  femininePast: Word('отмечала', 5),
  neuterPast: Word('отмечало', 5),
  pluralPast: Word('отмечали', 5),
  imperativeInformal: Word('отмечай', 5),
  imperativeFormal: Word('отмечайте', 5),
  imperfect: ['отметить'],
};

perfectVerbs.set(отмечать.name.text, отмечать);

export { отмечать };