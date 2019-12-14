import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подбрасывать: PerfectVerb = {
  name: Word('подбрасывать', 5),
  singular1stPerson: Word('подбрасываю', 5),
  singular2ndPerson: Word('подбрасываешь', 5),
  singular3rdPerson: Word('подбрасывает', 5),
  plural1stPerson: Word('подбрасываем', 5),
  plural2ndPerson: Word('подбрасываете', 5),
  plural3rdPerson: Word('подбрасывают', 5),
  masculinePast: Word('подбрасывал', 5),
  femininePast: Word('подбрасывала', 5),
  neuterPast: Word('подбрасывало', 5),
  pluralPast: Word('подбрасывали', 5),
  imperativeInformal: Word('подбрасывай', 5),
  imperativeFormal: Word('подбрасывайте', 5),
  imperfect: [],
};

perfectVerbs.set(подбрасывать.name.text, подбрасывать);

export { подбрасывать };