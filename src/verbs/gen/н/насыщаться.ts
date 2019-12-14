import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насыщаться: PerfectVerb = {
  name: Word('насыщаться', 5),
  singular1stPerson: Word('насыщаюсь', 5),
  singular2ndPerson: Word('насыщаешься', 5),
  singular3rdPerson: Word('насыщается', 5),
  plural1stPerson: Word('насыщаемся', 5),
  plural2ndPerson: Word('насыщаетесь', 5),
  plural3rdPerson: Word('насыщаются', 5),
  masculinePast: Word('насыщался', 5),
  femininePast: Word('насыщалась', 5),
  neuterPast: Word('насыщалось', 5),
  pluralPast: Word('насыщались', 5),
  imperativeInformal: Word('насыщайся', 5),
  imperativeFormal: Word('насыщайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(насыщаться.name.text, насыщаться);

export { насыщаться };