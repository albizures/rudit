import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насытиться: PerfectVerb = {
  name: Word('насытиться', 3),
  singular1stPerson: Word('насыщусь', 3),
  singular2ndPerson: Word('насытишься', 3),
  singular3rdPerson: Word('насытится', 3),
  plural1stPerson: Word('насытимся', 3),
  plural2ndPerson: Word('насытитесь', 3),
  plural3rdPerson: Word('насытятся', 3),
  masculinePast: Word('насытился', 3),
  femininePast: Word('насытилась', 3),
  neuterPast: Word('насытилось', 3),
  pluralPast: Word('насытились', 3),
  imperativeInformal: Word('насыться', 3),
  imperativeFormal: Word('насытьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(насытиться.name.text, насытиться);

export { насытиться };