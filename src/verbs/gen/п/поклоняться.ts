import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поклоняться: PerfectVerb = {
  name: Word('поклоняться', 6),
  singular1stPerson: Word('поклоняюсь', 6),
  singular2ndPerson: Word('поклоняешься', 6),
  singular3rdPerson: Word('поклоняется', 6),
  plural1stPerson: Word('поклоняемся', 6),
  plural2ndPerson: Word('поклоняетесь', 6),
  plural3rdPerson: Word('поклоняются', 6),
  masculinePast: Word('поклонялся', 6),
  femininePast: Word('поклонялась', 6),
  neuterPast: Word('поклонялось', 6),
  pluralPast: Word('поклонялись', 6),
  imperativeInformal: Word('поклоняйся', 6),
  imperativeFormal: Word('поклоняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(поклоняться.name.text, поклоняться);

export { поклоняться };