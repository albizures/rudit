import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расправиться: PerfectVerb = {
  name: Word('расправиться', 5),
  singular1stPerson: Word('расправлюсь', 5),
  singular2ndPerson: Word('расправишься', 5),
  singular3rdPerson: Word('расправится', 5),
  plural1stPerson: Word('расправимся', 5),
  plural2ndPerson: Word('расправитесь', 5),
  plural3rdPerson: Word('расправятся', 5),
  masculinePast: Word('расправился', 5),
  femininePast: Word('расправилась', 5),
  neuterPast: Word('расправилось', 5),
  pluralPast: Word('расправились', 5),
  imperativeInformal: Word('расправься', 5),
  imperativeFormal: Word('расправьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(расправиться.name.text, расправиться);

export { расправиться };