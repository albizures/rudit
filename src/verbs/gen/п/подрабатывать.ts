import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрабатывать: PerfectVerb = {
  name: Word('подрабатывать', 6),
  singular1stPerson: Word('подрабатываю', 6),
  singular2ndPerson: Word('подрабатываешь', 6),
  singular3rdPerson: Word('подрабатывает', 6),
  plural1stPerson: Word('подрабатываем', 6),
  plural2ndPerson: Word('подрабатываете', 6),
  plural3rdPerson: Word('подрабатывают', 6),
  masculinePast: Word('подрабатывал', 6),
  femininePast: Word('подрабатывала', 6),
  neuterPast: Word('подрабатывало', 6),
  pluralPast: Word('подрабатывали', 6),
  imperativeInformal: Word('подрабатывай', 6),
  imperativeFormal: Word('подрабатывайте', 6),
  imperfect: [],
};

perfectVerbs.set(подрабатывать.name.text, подрабатывать);

export { подрабатывать };