import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озирать: PerfectVerb = {
  name: Word('озирать', 4),
  singular1stPerson: Word('озираю', 4),
  singular2ndPerson: Word('озираешь', 4),
  singular3rdPerson: Word('озирает', 4),
  plural1stPerson: Word('озираем', 4),
  plural2ndPerson: Word('озираете', 4),
  plural3rdPerson: Word('озирают', 4),
  masculinePast: Word('озирал', 4),
  femininePast: Word('озирала', 4),
  neuterPast: Word('озирало', 4),
  pluralPast: Word('озирали', 4),
  imperativeInformal: Word('озирай', 4),
  imperativeFormal: Word('озирайте', 4),
  imperfect: [],
};

perfectVerbs.set(озирать.name.text, озирать);

export { озирать };