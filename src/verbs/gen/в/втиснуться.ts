import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втиснуться: PerfectVerb = {
  name: Word('втиснуться', 2),
  singular1stPerson: Word('втиснусь', 2),
  singular2ndPerson: Word('втиснешься', 2),
  singular3rdPerson: Word('втиснется', 2),
  plural1stPerson: Word('втиснемся', 2),
  plural2ndPerson: Word('втиснетесь', 2),
  plural3rdPerson: Word('втиснутся', 2),
  masculinePast: Word('втиснулся', 2),
  femininePast: Word('втиснулась', 2),
  neuterPast: Word('втиснулось', 2),
  pluralPast: Word('втиснулись', 2),
  imperativeInformal: Word('втиснись', 2),
  imperativeFormal: Word('втиснитесь', 2),
  imperfect: [],
};

perfectVerbs.set(втиснуться.name.text, втиснуться);

export { втиснуться };