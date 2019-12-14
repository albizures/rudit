import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выстирать: PerfectVerb = {
  name: Word('выстирать', 1),
  singular1stPerson: Word('выстираю', 1),
  singular2ndPerson: Word('выстираешь', 1),
  singular3rdPerson: Word('выстирает', 1),
  plural1stPerson: Word('выстираем', 1),
  plural2ndPerson: Word('выстираете', 1),
  plural3rdPerson: Word('выстирают', 1),
  masculinePast: Word('выстирал', 1),
  femininePast: Word('выстирала', 1),
  neuterPast: Word('выстирало', 1),
  pluralPast: Word('выстирали', 1),
  imperativeInformal: Word('выстирай', 1),
  imperativeFormal: Word('выстирайте', 1),
  imperfect: [],
};

perfectVerbs.set(выстирать.name.text, выстирать);

export { выстирать };