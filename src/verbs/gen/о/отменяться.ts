import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отменяться: PerfectVerb = {
  name: Word('отменяться', 5),
  singular1stPerson: Word('отменяюсь', 5),
  singular2ndPerson: Word('отменяешься', 5),
  singular3rdPerson: Word('отменяется', 5),
  plural1stPerson: Word('отменяемся', 5),
  plural2ndPerson: Word('отменяетесь', 5),
  plural3rdPerson: Word('отменяются', 5),
  masculinePast: Word('отменялся', 5),
  femininePast: Word('отменялась', 5),
  neuterPast: Word('отменялось', 5),
  pluralPast: Word('отменялись', 5),
  imperativeInformal: Word('отменяйся', 5),
  imperativeFormal: Word('отменяйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отменяться.name.text, отменяться);

export { отменяться };