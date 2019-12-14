import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвывать: PerfectVerb = {
  name: Word('подвывать', 6),
  singular1stPerson: Word('подвываю', 6),
  singular2ndPerson: Word('подвываешь', 6),
  singular3rdPerson: Word('подвывает', 6),
  plural1stPerson: Word('подвываем', 6),
  plural2ndPerson: Word('подвываете', 6),
  plural3rdPerson: Word('подвывают', 6),
  masculinePast: Word('подвывал', 6),
  femininePast: Word('подвывала', 6),
  neuterPast: Word('подвывало', 6),
  pluralPast: Word('подвывали', 6),
  imperativeInformal: Word('подвывай', 6),
  imperativeFormal: Word('подвывайте', 6),
  imperfect: [],
};

perfectVerbs.set(подвывать.name.text, подвывать);

export { подвывать };