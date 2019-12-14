import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрабатывать: PerfectVerb = {
  name: Word('разрабатывать', 6),
  singular1stPerson: Word('разрабатываю', 6),
  singular2ndPerson: Word('разрабатываешь', 6),
  singular3rdPerson: Word('разрабатывает', 6),
  plural1stPerson: Word('разрабатываем', 6),
  plural2ndPerson: Word('разрабатываете', 6),
  plural3rdPerson: Word('разрабатывают', 6),
  masculinePast: Word('разрабатывал', 6),
  femininePast: Word('разрабатывала', 6),
  neuterPast: Word('разрабатывало', 6),
  pluralPast: Word('разрабатывали', 6),
  imperativeInformal: Word('разрабатывай', 6),
  imperativeFormal: Word('разрабатывайте', 6),
  imperfect: ['разработать'],
};

perfectVerbs.set(разрабатывать.name.text, разрабатывать);

export { разрабатывать };