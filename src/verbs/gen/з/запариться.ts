import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запариться: PerfectVerb = {
  name: Word('запариться', 3),
  singular1stPerson: Word('запарюсь', 3),
  singular2ndPerson: Word('запаришься', 3),
  singular3rdPerson: Word('запарится', 3),
  plural1stPerson: Word('запаримся', 3),
  plural2ndPerson: Word('запаритесь', 3),
  plural3rdPerson: Word('запарятся', 3),
  masculinePast: Word('запарился', 3),
  femininePast: Word('запарилась', 3),
  neuterPast: Word('запарилось', 3),
  pluralPast: Word('запарились', 3),
  imperativeInformal: Word('запарься', 3),
  imperativeFormal: Word('запарьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(запариться.name.text, запариться);

export { запариться };