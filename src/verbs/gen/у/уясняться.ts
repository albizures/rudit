import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уясняться: PerfectVerb = {
  name: Word('уясняться', 4),
  singular1stPerson: Word('уясняюсь', 4),
  singular2ndPerson: Word('уясняешься', 4),
  singular3rdPerson: Word('уясняется', 4),
  plural1stPerson: Word('уясняемся', 4),
  plural2ndPerson: Word('уясняетесь', 4),
  plural3rdPerson: Word('уясняются', 4),
  masculinePast: Word('уяснялся', 4),
  femininePast: Word('уяснялась', 4),
  neuterPast: Word('уяснялось', 4),
  pluralPast: Word('уяснялись', 4),
  imperativeInformal: Word('уясняйся', 4),
  imperativeFormal: Word('уясняйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(уясняться.name.text, уясняться);

export { уясняться };