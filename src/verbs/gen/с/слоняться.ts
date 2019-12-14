import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слоняться: PerfectVerb = {
  name: Word('слоняться', 4),
  singular1stPerson: Word('слоняюсь', 4),
  singular2ndPerson: Word('слоняешься', 4),
  singular3rdPerson: Word('слоняется', 4),
  plural1stPerson: Word('слоняемся', 4),
  plural2ndPerson: Word('слоняетесь', 4),
  plural3rdPerson: Word('слоняются', 4),
  masculinePast: Word('слонялся', 4),
  femininePast: Word('слонялась', 4),
  neuterPast: Word('слонялось', 4),
  pluralPast: Word('слонялись', 4),
  imperativeInformal: Word('слоняйся', 4),
  imperativeFormal: Word('слоняйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(слоняться.name.text, слоняться);

export { слоняться };