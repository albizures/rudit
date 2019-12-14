import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зариться: PerfectVerb = {
  name: Word('зариться', 1),
  singular1stPerson: Word('зарюсь', 1),
  singular2ndPerson: Word('заришься', 1),
  singular3rdPerson: Word('зарится', 1),
  plural1stPerson: Word('заримся', 1),
  plural2ndPerson: Word('заритесь', 1),
  plural3rdPerson: Word('зарятся', 1),
  masculinePast: Word('зарился', 1),
  femininePast: Word('зарилась', 1),
  neuterPast: Word('зарилось', 1),
  pluralPast: Word('зарились', 1),
  imperativeInformal: Word('зарься', 1),
  imperativeFormal: Word('зарьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(зариться.name.text, зариться);

export { зариться };