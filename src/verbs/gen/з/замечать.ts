import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замечать: PerfectVerb = {
  name: Word('замечать', 5),
  singular1stPerson: Word('замечаю', 5),
  singular2ndPerson: Word('замечаешь', 5),
  singular3rdPerson: Word('замечает', 5),
  plural1stPerson: Word('замечаем', 5),
  plural2ndPerson: Word('замечаете', 5),
  plural3rdPerson: Word('замечают', 5),
  masculinePast: Word('замечал', 5),
  femininePast: Word('замечала', 5),
  neuterPast: Word('замечало', 5),
  pluralPast: Word('замечали', 5),
  imperativeInformal: Word('замечай', 5),
  imperativeFormal: Word('замечайте', 5),
  imperfect: ['заметить'],
};

perfectVerbs.set(замечать.name.text, замечать);

export { замечать };