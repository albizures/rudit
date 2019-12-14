import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протиснуться: PerfectVerb = {
  name: Word('протиснуться', 4),
  singular1stPerson: Word('протиснусь', 4),
  singular2ndPerson: Word('протиснешься', 4),
  singular3rdPerson: Word('протиснется', 4),
  plural1stPerson: Word('протиснемся', 4),
  plural2ndPerson: Word('протиснетесь', 4),
  plural3rdPerson: Word('протиснутся', 4),
  masculinePast: Word('протиснулся', 4),
  femininePast: Word('протиснулась', 4),
  neuterPast: Word('протиснулось', 4),
  pluralPast: Word('протиснулись', 4),
  imperativeInformal: Word('протиснись', 4),
  imperativeFormal: Word('протиснитесь', 4),
  imperfect: [],
};

perfectVerbs.set(протиснуться.name.text, протиснуться);

export { протиснуться };