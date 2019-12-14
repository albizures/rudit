import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размахнуться: PerfectVerb = {
  name: Word('размахнуться', 7),
  singular1stPerson: Word('размахнусь', 7),
  singular2ndPerson: Word('размахнёшься', 7),
  singular3rdPerson: Word('размахнётся', 7),
  plural1stPerson: Word('размахнёмся', 7),
  plural2ndPerson: Word('размахнётесь', 7),
  plural3rdPerson: Word('размахнутся', 7),
  masculinePast: Word('размахнулся', 7),
  femininePast: Word('размахнулась', 7),
  neuterPast: Word('размахнулось', 7),
  pluralPast: Word('размахнулись', 7),
  imperativeInformal: Word('размахнись', 7),
  imperativeFormal: Word('размахнитесь', 7),
  imperfect: [],
};

perfectVerbs.set(размахнуться.name.text, размахнуться);

export { размахнуться };