import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удовлетворяться: PerfectVerb = {
  name: Word('удовлетворяться', 10),
  singular1stPerson: Word('удовлетворяюсь', 10),
  singular2ndPerson: Word('удовлетворяешься', 10),
  singular3rdPerson: Word('удовлетворяется', 10),
  plural1stPerson: Word('удовлетворяемся', 10),
  plural2ndPerson: Word('удовлетворяетесь', 10),
  plural3rdPerson: Word('удовлетворяются', 10),
  masculinePast: Word('удовлетворялся', 10),
  femininePast: Word('удовлетворялась', 10),
  neuterPast: Word('удовлетворялось', 10),
  pluralPast: Word('удовлетворялись', 10),
  imperativeInformal: Word('удовлетворяйся', 10),
  imperativeFormal: Word('удовлетворяйтесь', 10),
  imperfect: [],
};

perfectVerbs.set(удовлетворяться.name.text, удовлетворяться);

export { удовлетворяться };