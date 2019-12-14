import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разряжать: PerfectVerb = {
  name: Word('разряжать', 6),
  singular1stPerson: Word('разряжаю', 6),
  singular2ndPerson: Word('разряжаешь', 6),
  singular3rdPerson: Word('разряжает', 6),
  plural1stPerson: Word('разряжаем', 6),
  plural2ndPerson: Word('разряжаете', 6),
  plural3rdPerson: Word('разряжают', 6),
  masculinePast: Word('разряжал', 6),
  femininePast: Word('разряжала', 6),
  neuterPast: Word('разряжало', 6),
  pluralPast: Word('разряжали', 6),
  imperativeInformal: Word('разряжай', 6),
  imperativeFormal: Word('разряжайте', 6),
  imperfect: [],
};

perfectVerbs.set(разряжать.name.text, разряжать);

export { разряжать };