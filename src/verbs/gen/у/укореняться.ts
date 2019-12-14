import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укореняться: PerfectVerb = {
  name: Word('укореняться', 6),
  singular1stPerson: Word('укореняюсь', 6),
  singular2ndPerson: Word('укореняешься', 6),
  singular3rdPerson: Word('укореняется', 6),
  plural1stPerson: Word('укореняемся', 6),
  plural2ndPerson: Word('укореняетесь', 6),
  plural3rdPerson: Word('укореняются', 6),
  masculinePast: Word('укоренялся', 6),
  femininePast: Word('укоренялась', 6),
  neuterPast: Word('укоренялось', 6),
  pluralPast: Word('укоренялись', 6),
  imperativeInformal: Word('укореняйся', 6),
  imperativeFormal: Word('укореняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(укореняться.name.text, укореняться);

export { укореняться };