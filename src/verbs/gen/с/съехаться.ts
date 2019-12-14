import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const съехаться: PerfectVerb = {
  name: Word('съехаться', 2),
  singular1stPerson: Word('съедусь', 2),
  singular2ndPerson: Word('съедешься', 2),
  singular3rdPerson: Word('съедется', 2),
  plural1stPerson: Word('съедемся', 2),
  plural2ndPerson: Word('съедетесь', 2),
  plural3rdPerson: Word('съедутся', 2),
  masculinePast: Word('съехался', 2),
  femininePast: Word('съехалась', 2),
  neuterPast: Word('съехалось', 2),
  pluralPast: Word('съехались', 2),
  imperativeInformal: Word('съезжайся', 5),
  imperativeFormal: Word('съезжайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(съехаться.name.text, съехаться);

export { съехаться };