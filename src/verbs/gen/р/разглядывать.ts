import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разглядывать: PerfectVerb = {
  name: Word('разглядывать', 5),
  singular1stPerson: Word('разглядываю', 5),
  singular2ndPerson: Word('разглядываешь', 5),
  singular3rdPerson: Word('разглядывает', 5),
  plural1stPerson: Word('разглядываем', 5),
  plural2ndPerson: Word('разглядываете', 5),
  plural3rdPerson: Word('разглядывают', 5),
  masculinePast: Word('разглядывал', 5),
  femininePast: Word('разглядывала', 5),
  neuterPast: Word('разглядывало', 5),
  pluralPast: Word('разглядывали', 5),
  imperativeInformal: Word('разглядывай', 5),
  imperativeFormal: Word('разглядывайте', 5),
  imperfect: ['разглядеть'],
};

perfectVerbs.set(разглядывать.name.text, разглядывать);

export { разглядывать };