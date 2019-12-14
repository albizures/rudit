import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накреняться: PerfectVerb = {
  name: Word('накреняться', 6),
  singular1stPerson: Word('накреняюсь', 6),
  singular2ndPerson: Word('накреняешься', 6),
  singular3rdPerson: Word('накреняется', 6),
  plural1stPerson: Word('накреняемся', 6),
  plural2ndPerson: Word('накреняетесь', 6),
  plural3rdPerson: Word('накреняются', 6),
  masculinePast: Word('накренялся', 6),
  femininePast: Word('накренялась', 6),
  neuterPast: Word('накренялось', 6),
  pluralPast: Word('накренялись', 6),
  imperativeInformal: Word('накреняйся', 6),
  imperativeFormal: Word('накреняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(накреняться.name.text, накреняться);

export { накреняться };