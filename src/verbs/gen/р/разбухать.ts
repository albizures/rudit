import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбухать: PerfectVerb = {
  name: Word('разбухать', 6),
  singular1stPerson: Word('разбухаю', 6),
  singular2ndPerson: Word('разбухаешь', 6),
  singular3rdPerson: Word('разбухает', 6),
  plural1stPerson: Word('разбухаем', 6),
  plural2ndPerson: Word('разбухаете', 6),
  plural3rdPerson: Word('разбухают', 6),
  masculinePast: Word('разбухал', 6),
  femininePast: Word('разбухала', 6),
  neuterPast: Word('разбухало', 6),
  pluralPast: Word('разбухали', 6),
  imperativeInformal: Word('разбухай', 6),
  imperativeFormal: Word('разбухайте', 6),
  imperfect: [],
};

perfectVerbs.set(разбухать.name.text, разбухать);

export { разбухать };