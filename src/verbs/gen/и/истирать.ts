import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истирать: PerfectVerb = {
  name: Word('истирать', 5),
  singular1stPerson: Word('истираю', 5),
  singular2ndPerson: Word('истираешь', 5),
  singular3rdPerson: Word('истирает', 5),
  plural1stPerson: Word('истираем', 5),
  plural2ndPerson: Word('истираете', 5),
  plural3rdPerson: Word('истирают', 5),
  masculinePast: Word('истирал', 5),
  femininePast: Word('истирала', 5),
  neuterPast: Word('истирало', 5),
  pluralPast: Word('истирали', 5),
  imperativeInformal: Word('истирай', 5),
  imperativeFormal: Word('истирайте', 5),
  imperfect: [],
};

perfectVerbs.set(истирать.name.text, истирать);

export { истирать };