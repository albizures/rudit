import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посмеяться: PerfectVerb = {
  name: Word('посмеяться', 5),
  singular1stPerson: Word('посмеюсь', 5),
  singular2ndPerson: Word('посмеёшься', 5),
  singular3rdPerson: Word('посмеётся', 5),
  plural1stPerson: Word('посмеёмся', 5),
  plural2ndPerson: Word('посмеётесь', 5),
  plural3rdPerson: Word('посмеются', 5),
  masculinePast: Word('посмеялся', 5),
  femininePast: Word('посмеялась', 5),
  neuterPast: Word('посмеялось', 5),
  pluralPast: Word('посмеялись', 5),
  imperativeInformal: Word('посмейся', 4),
  imperativeFormal: Word('посмейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(посмеяться.name.text, посмеяться);

export { посмеяться };