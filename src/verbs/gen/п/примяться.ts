import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примяться: PerfectVerb = {
  name: Word('примяться', 4),
  singular1stPerson: Word('примнусь', 5),
  singular2ndPerson: Word('примнёшься', 2),
  singular3rdPerson: Word('примнётся', 2),
  plural1stPerson: Word('примнёмся', 2),
  plural2ndPerson: Word('примнётесь', 7),
  plural3rdPerson: Word('примнутся', 5),
  masculinePast: Word('примялся', 4),
  femininePast: Word('примялась', 4),
  neuterPast: Word('примялось', 4),
  pluralPast: Word('примялись', 4),
  imperativeInformal: Word('примнись', 5),
  imperativeFormal: Word('примнитесь', 5),
  imperfect: [],
};

perfectVerbs.set(примяться.name.text, примяться);

export { примяться };