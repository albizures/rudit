import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отворяться: PerfectVerb = {
  name: Word('отворяться', 5),
  singular1stPerson: Word('отворяюсь', 5),
  singular2ndPerson: Word('отворяешься', 5),
  singular3rdPerson: Word('отворяется', 5),
  plural1stPerson: Word('отворяемся', 5),
  plural2ndPerson: Word('отворяетесь', 5),
  plural3rdPerson: Word('отворяются', 5),
  masculinePast: Word('отворялся', 5),
  femininePast: Word('отворялась', 5),
  neuterPast: Word('отворялось', 5),
  pluralPast: Word('отворялись', 5),
  imperativeInformal: Word('отворяйся', 5),
  imperativeFormal: Word('отворяйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отворяться.name.text, отворяться);

export { отворяться };