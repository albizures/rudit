import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мяться: PerfectVerb = {
  name: Word('мяться', 1),
  singular1stPerson: Word('мнусь', 2),
  singular2ndPerson: Word('мнёшься', 2),
  singular3rdPerson: Word('мнётся', 2),
  plural1stPerson: Word('мнёмся', 2),
  plural2ndPerson: Word('мнётесь', 2),
  plural3rdPerson: Word('мнутся', 2),
  masculinePast: Word('мялся', 1),
  femininePast: Word('мялась', 1),
  neuterPast: Word('мялось', 1),
  pluralPast: Word('мялись', 1),
  imperativeInformal: Word('мнись', 2),
  imperativeFormal: Word('мнитесь', 2),
  imperfect: [],
};

perfectVerbs.set(мяться.name.text, мяться);

export { мяться };