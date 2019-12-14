import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намарать: PerfectVerb = {
  name: Word('намарать', 5),
  singular1stPerson: Word('намараю', 5),
  singular2ndPerson: Word('намараешь', 5),
  singular3rdPerson: Word('намарает', 5),
  plural1stPerson: Word('намараем', 5),
  plural2ndPerson: Word('намараете', 5),
  plural3rdPerson: Word('намарают', 5),
  masculinePast: Word('намарал', 5),
  femininePast: Word('намарала', 5),
  neuterPast: Word('намарало', 5),
  pluralPast: Word('намарали', 5),
  imperativeInformal: Word('намарай', 5),
  imperativeFormal: Word('намарайте', 5),
  imperfect: [],
};

perfectVerbs.set(намарать.name.text, намарать);

export { намарать };