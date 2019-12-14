import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ужаснуться: PerfectVerb = {
  name: Word('ужаснуться', 5),
  singular1stPerson: Word('ужаснусь', 5),
  singular2ndPerson: Word('ужаснёшься', 5),
  singular3rdPerson: Word('ужаснётся', 5),
  plural1stPerson: Word('ужаснёмся', 5),
  plural2ndPerson: Word('ужаснётесь', 5),
  plural3rdPerson: Word('ужаснутся', 5),
  masculinePast: Word('ужаснулся', 5),
  femininePast: Word('ужаснулась', 5),
  neuterPast: Word('ужаснулось', 5),
  pluralPast: Word('ужаснулись', 5),
  imperativeInformal: Word('ужаснись', 5),
  imperativeFormal: Word('ужаснитесь', 5),
  imperfect: [],
};

perfectVerbs.set(ужаснуться.name.text, ужаснуться);

export { ужаснуться };