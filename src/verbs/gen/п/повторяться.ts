import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повторяться: PerfectVerb = {
  name: Word('повторяться', 6),
  singular1stPerson: Word('повторяюсь', 6),
  singular2ndPerson: Word('повторяешься', 6),
  singular3rdPerson: Word('повторяется', 6),
  plural1stPerson: Word('повторяемся', 6),
  plural2ndPerson: Word('повторяетесь', 6),
  plural3rdPerson: Word('повторяются', 6),
  masculinePast: Word('повторялся', 6),
  femininePast: Word('повторялась', 6),
  neuterPast: Word('повторялось', 6),
  pluralPast: Word('повторялись', 6),
  imperativeInformal: Word('повторяйся', 6),
  imperativeFormal: Word('повторяйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(повторяться.name.text, повторяться);

export { повторяться };