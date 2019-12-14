import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикоснуться: PerfectVerb = {
  name: Word('прикоснуться', 7),
  singular1stPerson: Word('прикоснусь', 7),
  singular2ndPerson: Word('прикоснёшься', 2),
  singular3rdPerson: Word('прикоснётся', 2),
  plural1stPerson: Word('прикоснёмся', 2),
  plural2ndPerson: Word('прикоснётесь', 9),
  plural3rdPerson: Word('прикоснутся', 7),
  masculinePast: Word('прикоснулся', 7),
  femininePast: Word('прикоснулась', 7),
  neuterPast: Word('прикоснулось', 7),
  pluralPast: Word('прикоснулись', 7),
  imperativeInformal: Word('прикоснись', 7),
  imperativeFormal: Word('прикоснитесь', 7),
  imperfect: [],
};

perfectVerbs.set(прикоснуться.name.text, прикоснуться);

export { прикоснуться };