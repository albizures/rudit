import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уточняться: PerfectVerb = {
  name: Word('уточняться', 5),
  singular1stPerson: Word('уточняюсь', 5),
  singular2ndPerson: Word('уточняешься', 5),
  singular3rdPerson: Word('уточняется', 5),
  plural1stPerson: Word('уточняемся', 5),
  plural2ndPerson: Word('уточняетесь', 5),
  plural3rdPerson: Word('уточняются', 5),
  masculinePast: Word('уточнялся', 5),
  femininePast: Word('уточнялась', 5),
  neuterPast: Word('уточнялось', 5),
  pluralPast: Word('уточнялись', 5),
  imperativeInformal: Word('уточняйся', 5),
  imperativeFormal: Word('уточняйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(уточняться.name.text, уточняться);

export { уточняться };