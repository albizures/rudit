import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насмеяться: PerfectVerb = {
  name: Word('насмеяться', 5),
  singular1stPerson: Word('насмеюсь', 5),
  singular2ndPerson: Word('насмеёшься', 1),
  singular3rdPerson: Word('насмеётся', 1),
  plural1stPerson: Word('насмеёмся', 1),
  plural2ndPerson: Word('насмеётесь', 1),
  plural3rdPerson: Word('насмеются', 5),
  masculinePast: Word('насмеялся', 5),
  femininePast: Word('насмеялась', 5),
  neuterPast: Word('насмеялось', 5),
  pluralPast: Word('насмеялись', 5),
  imperativeInformal: Word('насмейся', 4),
  imperativeFormal: Word('насмейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(насмеяться.name.text, насмеяться);

export { насмеяться };