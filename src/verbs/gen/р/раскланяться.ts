import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскланяться: PerfectVerb = {
  name: Word('раскланяться', 5),
  singular1stPerson: Word('раскланяюсь', 5),
  singular2ndPerson: Word('раскланяешься', 5),
  singular3rdPerson: Word('раскланяется', 5),
  plural1stPerson: Word('раскланяемся', 5),
  plural2ndPerson: Word('раскланяетесь', 5),
  plural3rdPerson: Word('раскланяются', 5),
  masculinePast: Word('раскланялся', 5),
  femininePast: Word('раскланялась', 5),
  neuterPast: Word('раскланялось', 5),
  pluralPast: Word('раскланялись', 5),
  imperativeInformal: Word('раскланяйся', 5),
  imperativeFormal: Word('раскланяйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(раскланяться.name.text, раскланяться);

export { раскланяться };