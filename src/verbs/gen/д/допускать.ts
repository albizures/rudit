import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const допускать: PerfectVerb = {
  name: Word('допускать', 6),
  singular1stPerson: Word('допускаю', 6),
  singular2ndPerson: Word('допускаешь', 6),
  singular3rdPerson: Word('допускает', 6),
  plural1stPerson: Word('допускаем', 6),
  plural2ndPerson: Word('допускаете', 6),
  plural3rdPerson: Word('допускают', 6),
  masculinePast: Word('допускал', 6),
  femininePast: Word('допускала', 6),
  neuterPast: Word('допускало', 6),
  pluralPast: Word('допускали', 6),
  imperativeInformal: Word('допускай', 6),
  imperativeFormal: Word('допускайте', 6),
  imperfect: ['допустить'],
};

perfectVerbs.set(допускать.name.text, допускать);

export { допускать };