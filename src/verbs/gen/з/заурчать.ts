import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заурчать: PerfectVerb = {
  name: Word('заурчать', 5),
  singular1stPerson: Word('заурчу', 5),
  singular2ndPerson: Word('заурчишь', 5),
  singular3rdPerson: Word('заурчит', 5),
  plural1stPerson: Word('заурчим', 5),
  plural2ndPerson: Word('заурчите', 5),
  plural3rdPerson: Word('заурчат', 5),
  masculinePast: Word('заурчал', 5),
  femininePast: Word('заурчала', 5),
  neuterPast: Word('заурчало', 5),
  pluralPast: Word('заурчали', 5),
  imperativeInformal: Word('заурчи', 5),
  imperativeFormal: Word('заурчите', 5),
  imperfect: [],
};

perfectVerbs.set(заурчать.name.text, заурчать);

export { заурчать };