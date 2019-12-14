import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подхлёстывать: PerfectVerb = {
  name: Word('подхлёстывать', 10),
  singular1stPerson: Word('подхлёстываю', 10),
  singular2ndPerson: Word('подхлёстываешь', 10),
  singular3rdPerson: Word('подхлёстывает', 10),
  plural1stPerson: Word('подхлёстываем', 10),
  plural2ndPerson: Word('подхлёстываете', 10),
  plural3rdPerson: Word('подхлёстывают', 10),
  masculinePast: Word('подхлёстывал', 10),
  femininePast: Word('подхлёстывала', 10),
  neuterPast: Word('подхлёстывало', 10),
  pluralPast: Word('подхлёстывали', 10),
  imperativeInformal: Word('подхлёстывай', 10),
  imperativeFormal: Word('подхлёстывайте', 10),
  imperfect: [],
};

perfectVerbs.set(подхлёстывать.name.text, подхлёстывать);

export { подхлёстывать };