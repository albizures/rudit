import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const коснуться: PerfectVerb = {
  name: Word('коснуться', 4),
  singular1stPerson: Word('коснусь', 4),
  singular2ndPerson: Word('коснёшься', 1),
  singular3rdPerson: Word('коснётся', 1),
  plural1stPerson: Word('коснёмся', 1),
  plural2ndPerson: Word('коснётесь', 6),
  plural3rdPerson: Word('коснутся', 4),
  masculinePast: Word('коснулся', 4),
  femininePast: Word('коснулась', 4),
  neuterPast: Word('коснулось', 4),
  pluralPast: Word('коснулись', 4),
  imperativeInformal: Word('коснись', 4),
  imperativeFormal: Word('коснитесь', 4),
  imperfect: [],
};

perfectVerbs.set(коснуться.name.text, коснуться);

export { коснуться };