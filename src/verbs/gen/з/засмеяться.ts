import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засмеяться: PerfectVerb = {
  name: Word('засмеяться', 5),
  singular1stPerson: Word('засмеюсь', 5),
  singular2ndPerson: Word('засмеёшься', 1),
  singular3rdPerson: Word('засмеётся', 1),
  plural1stPerson: Word('засмеёмся', 1),
  plural2ndPerson: Word('засмеётесь', 1),
  plural3rdPerson: Word('засмеются', 5),
  masculinePast: Word('засмеялся', 5),
  femininePast: Word('засмеялась', 5),
  neuterPast: Word('засмеялось', 5),
  pluralPast: Word('засмеялись', 5),
  imperativeInformal: Word('засмейся', 4),
  imperativeFormal: Word('засмейтесь', 4),
  imperfect: ['смеяться'],
};

perfectVerbs.set(засмеяться.name.text, засмеяться);

export { засмеяться };