import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмирать: PerfectVerb = {
  name: Word('отмирать', 5),
  singular1stPerson: Word('отмираю', 5),
  singular2ndPerson: Word('отмираешь', 5),
  singular3rdPerson: Word('отмирает', 5),
  plural1stPerson: Word('отмираем', 5),
  plural2ndPerson: Word('отмираете', 5),
  plural3rdPerson: Word('отмирают', 5),
  masculinePast: Word('отмирал', 5),
  femininePast: Word('отмирала', 5),
  neuterPast: Word('отмирало', 5),
  pluralPast: Word('отмирали', 5),
  imperativeInformal: Word('отмирай', 5),
  imperativeFormal: Word('отмирайте', 5),
  imperfect: [],
};

perfectVerbs.set(отмирать.name.text, отмирать);

export { отмирать };