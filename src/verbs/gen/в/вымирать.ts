import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымирать: PerfectVerb = {
  name: Word('вымирать', 5),
  singular1stPerson: Word('вымираю', 5),
  singular2ndPerson: Word('вымираешь', 5),
  singular3rdPerson: Word('вымирает', 5),
  plural1stPerson: Word('вымираем', 5),
  plural2ndPerson: Word('вымираете', 5),
  plural3rdPerson: Word('вымирают', 5),
  masculinePast: Word('вымирал', 5),
  femininePast: Word('вымирала', 5),
  neuterPast: Word('вымирало', 5),
  pluralPast: Word('вымирали', 5),
  imperativeInformal: Word('вымирай', 5),
  imperativeFormal: Word('вымирайте', 5),
  imperfect: ['вымереть'],
};

perfectVerbs.set(вымирать.name.text, вымирать);

export { вымирать };