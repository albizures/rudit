import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кланяться: PerfectVerb = {
  name: Word('кланяться', 2),
  singular1stPerson: Word('кланяюсь', 2),
  singular2ndPerson: Word('кланяешься', 2),
  singular3rdPerson: Word('кланяется', 2),
  plural1stPerson: Word('кланяемся', 2),
  plural2ndPerson: Word('кланяетесь', 2),
  plural3rdPerson: Word('кланяются', 2),
  masculinePast: Word('кланялся', 2),
  femininePast: Word('кланялась', 2),
  neuterPast: Word('кланялось', 2),
  pluralPast: Word('кланялись', 2),
  imperativeInformal: Word('кланяйся', 2),
  imperativeFormal: Word('кланяйтесь', 2),
  imperfect: [],
};

perfectVerbs.set(кланяться.name.text, кланяться);

export { кланяться };