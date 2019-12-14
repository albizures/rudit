import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подхлёстывать: PerfectVerb = {
  name: Word('подхлёстывать', 5),
  singular1stPerson: Word('подхлёстываю', 5),
  singular2ndPerson: Word('подхлёстываешь', 5),
  singular3rdPerson: Word('подхлёстывает', 5),
  plural1stPerson: Word('подхлёстываем', 5),
  plural2ndPerson: Word('подхлёстываете', 5),
  plural3rdPerson: Word('подхлёстывают', 5),
  masculinePast: Word('подхлёстывал', 5),
  femininePast: Word('подхлёстывала', 5),
  neuterPast: Word('подхлёстывало', 5),
  pluralPast: Word('подхлёстывали', 5),
  imperativeInformal: Word('подхлёстывай', 5),
  imperativeFormal: Word('подхлёстывайте', 5),
  imperfect: [],
};

perfectVerbs.set(подхлёстывать.name.text, подхлёстывать);

export { подхлёстывать };