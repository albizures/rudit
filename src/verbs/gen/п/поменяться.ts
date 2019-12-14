import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поменяться: PerfectVerb = {
  name: Word('поменяться', 5),
  singular1stPerson: Word('поменяюсь', 5),
  singular2ndPerson: Word('поменяешься', 5),
  singular3rdPerson: Word('поменяется', 5),
  plural1stPerson: Word('поменяемся', 5),
  plural2ndPerson: Word('поменяетесь', 5),
  plural3rdPerson: Word('поменяются', 5),
  masculinePast: Word('поменялся', 5),
  femininePast: Word('поменялась', 5),
  neuterPast: Word('поменялось', 5),
  pluralPast: Word('поменялись', 5),
  imperativeInformal: Word('поменяйся', 5),
  imperativeFormal: Word('поменяйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(поменяться.name.text, поменяться);

export { поменяться };