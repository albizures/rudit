import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распределяться: PerfectVerb = {
  name: Word('распределяться', 9),
  singular1stPerson: Word('распределяюсь', 9),
  singular2ndPerson: Word('распределяешься', 9),
  singular3rdPerson: Word('распределяется', 9),
  plural1stPerson: Word('распределяемся', 9),
  plural2ndPerson: Word('распределяетесь', 9),
  plural3rdPerson: Word('распределяются', 9),
  masculinePast: Word('распределялся', 9),
  femininePast: Word('распределялась', 9),
  neuterPast: Word('распределялось', 9),
  pluralPast: Word('распределялись', 9),
  imperativeInformal: Word('распределяйся', 9),
  imperativeFormal: Word('распределяйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(распределяться.name.text, распределяться);

export { распределяться };