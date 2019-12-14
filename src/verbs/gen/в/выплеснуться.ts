import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплеснуться: PerfectVerb = {
  name: Word('выплеснуться', 1),
  singular1stPerson: Word('выплеснусь', 1),
  singular2ndPerson: Word('выплеснешься', 1),
  singular3rdPerson: Word('выплеснется', 1),
  plural1stPerson: Word('выплеснемся', 1),
  plural2ndPerson: Word('выплеснетесь', 1),
  plural3rdPerson: Word('выплеснутся', 1),
  masculinePast: Word('выплеснулся', 1),
  femininePast: Word('выплеснулась', 1),
  neuterPast: Word('выплеснулось', 1),
  pluralPast: Word('выплеснулись', 1),
  imperativeInformal: Word('выплеснись', 1),
  imperativeFormal: Word('выплеснитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выплеснуться.name.text, выплеснуться);

export { выплеснуться };