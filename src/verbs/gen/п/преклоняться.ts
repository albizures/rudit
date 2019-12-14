import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преклоняться: PerfectVerb = {
  name: Word('преклоняться', 7),
  singular1stPerson: Word('преклоняюсь', 7),
  singular2ndPerson: Word('преклоняешься', 7),
  singular3rdPerson: Word('преклоняется', 7),
  plural1stPerson: Word('преклоняемся', 7),
  plural2ndPerson: Word('преклоняетесь', 7),
  plural3rdPerson: Word('преклоняются', 7),
  masculinePast: Word('преклонялся', 7),
  femininePast: Word('преклонялась', 7),
  neuterPast: Word('преклонялось', 7),
  pluralPast: Word('преклонялись', 7),
  imperativeInformal: Word('преклоняйся', 7),
  imperativeFormal: Word('преклоняйтесь', 7),
  imperfect: ['преклониться'],
};

perfectVerbs.set(преклоняться.name.text, преклоняться);

export { преклоняться };