import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взлохмачивать: PerfectVerb = {
  name: Word('взлохмачивать', 6),
  singular1stPerson: Word('взлохмачиваю', 6),
  singular2ndPerson: Word('взлохмачиваешь', 6),
  singular3rdPerson: Word('взлохмачивает', 6),
  plural1stPerson: Word('взлохмачиваем', 6),
  plural2ndPerson: Word('взлохмачиваете', 6),
  plural3rdPerson: Word('взлохмачивают', 6),
  masculinePast: Word('взлохмачивал', 6),
  femininePast: Word('взлохмачивала', 6),
  neuterPast: Word('взлохмачивало', 6),
  pluralPast: Word('взлохмачивали', 6),
  imperativeInformal: Word('взлохмачивай', 6),
  imperativeFormal: Word('взлохмачивайте', 6),
  imperfect: [],
};

perfectVerbs.set(взлохмачивать.name.text, взлохмачивать);

export { взлохмачивать };