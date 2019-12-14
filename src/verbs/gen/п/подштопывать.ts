import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подштопывать: PerfectVerb = {
  name: Word('подштопывать', 5),
  singular1stPerson: Word('подштопываю', 5),
  singular2ndPerson: Word('подштопываешь', 5),
  singular3rdPerson: Word('подштопывает', 5),
  plural1stPerson: Word('подштопываем', 5),
  plural2ndPerson: Word('подштопываете', 5),
  plural3rdPerson: Word('подштопывают', 5),
  masculinePast: Word('подштопывал', 5),
  femininePast: Word('подштопывала', 5),
  neuterPast: Word('подштопывало', 5),
  pluralPast: Word('подштопывали', 5),
  imperativeInformal: Word('подштопывай', 5),
  imperativeFormal: Word('подштопывайте', 5),
  imperfect: [],
};

perfectVerbs.set(подштопывать.name.text, подштопывать);

export { подштопывать };