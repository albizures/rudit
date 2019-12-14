import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбивать: PerfectVerb = {
  name: Word('разбивать', 6),
  singular1stPerson: Word('разбиваю', 6),
  singular2ndPerson: Word('разбиваешь', 6),
  singular3rdPerson: Word('разбивает', 6),
  plural1stPerson: Word('разбиваем', 6),
  plural2ndPerson: Word('разбиваете', 6),
  plural3rdPerson: Word('разбивают', 6),
  masculinePast: Word('разбивал', 6),
  femininePast: Word('разбивала', 6),
  neuterPast: Word('разбивало', 6),
  pluralPast: Word('разбивали', 6),
  imperativeInformal: Word('разбивай', 6),
  imperativeFormal: Word('разбивайте', 6),
  imperfect: ['разбить'],
};

perfectVerbs.set(разбивать.name.text, разбивать);

export { разбивать };