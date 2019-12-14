import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бурчать: PerfectVerb = {
  name: Word('бурчать', 4),
  singular1stPerson: Word('бурчу', 4),
  singular2ndPerson: Word('бурчишь', 4),
  singular3rdPerson: Word('бурчит', 4),
  plural1stPerson: Word('бурчим', 4),
  plural2ndPerson: Word('бурчите', 4),
  plural3rdPerson: Word('бурчат', 4),
  masculinePast: Word('бурчал', 4),
  femininePast: Word('бурчала', 4),
  neuterPast: Word('бурчало', 4),
  pluralPast: Word('бурчали', 4),
  imperativeInformal: Word('бурчи', 4),
  imperativeFormal: Word('бурчите', 4),
  imperfect: ['пробурчать'],
};

perfectVerbs.set(бурчать.name.text, бурчать);

export { бурчать };