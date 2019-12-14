import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затворяться: PerfectVerb = {
  name: Word('затворяться', 6),
  singular1stPerson: Word('затворяюсь', 6),
  singular2ndPerson: Word('затворяешься', 6),
  singular3rdPerson: Word('затворяется', 6),
  plural1stPerson: Word('затворяемся', 6),
  plural2ndPerson: Word('затворяетесь', 6),
  plural3rdPerson: Word('затворяются', 6),
  masculinePast: Word('затворялся', 6),
  femininePast: Word('затворялась', 6),
  neuterPast: Word('затворялось', 6),
  pluralPast: Word('затворялись', 6),
  imperativeInformal: Word('затворяйся', 6),
  imperativeFormal: Word('затворяйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(затворяться.name.text, затворяться);

export { затворяться };