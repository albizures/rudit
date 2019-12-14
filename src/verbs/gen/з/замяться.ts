import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замяться: PerfectVerb = {
  name: Word('замяться', 3),
  singular1stPerson: Word('замнусь', 4),
  singular2ndPerson: Word('замнёшься', 1),
  singular3rdPerson: Word('замнётся', 1),
  plural1stPerson: Word('замнёмся', 1),
  plural2ndPerson: Word('замнётесь', 1),
  plural3rdPerson: Word('замнутся', 4),
  masculinePast: Word('замялся', 3),
  femininePast: Word('замялась', 3),
  neuterPast: Word('замялось', 3),
  pluralPast: Word('замялись', 3),
  imperativeInformal: Word('замнись', 4),
  imperativeFormal: Word('замнитесь', 4),
  imperfect: [],
};

perfectVerbs.set(замяться.name.text, замяться);

export { замяться };