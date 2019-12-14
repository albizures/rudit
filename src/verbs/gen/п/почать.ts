import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почать: PerfectVerb = {
  name: Word('почать', 3),
  singular1stPerson: Word('почну', 4),
  singular2ndPerson: Word('почнёшь', 1),
  singular3rdPerson: Word('почнёт', 1),
  plural1stPerson: Word('почнём', 1),
  plural2ndPerson: Word('почнёте', 6),
  plural3rdPerson: Word('почнут', 4),
  masculinePast: Word('почал', 3),
  femininePast: Word('почала', 5),
  neuterPast: Word('почало', 3),
  pluralPast: Word('почали', 3),
  imperativeInformal: Word('почни', 4),
  imperativeFormal: Word('почните', 4),
  imperfect: [],
};

perfectVerbs.set(почать.name.text, почать);

export { почать };