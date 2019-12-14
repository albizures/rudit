import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отклоняться: PerfectVerb = {
  name: Word('отклоняться', 6),
  singular1stPerson: Word('отклоняюсь', 6),
  singular2ndPerson: Word('отклоняешься', 6),
  singular3rdPerson: Word('отклоняется', 6),
  plural1stPerson: Word('отклоняемся', 6),
  plural2ndPerson: Word('отклоняетесь', 6),
  plural3rdPerson: Word('отклоняются', 6),
  masculinePast: Word('отклонялся', 6),
  femininePast: Word('отклонялась', 6),
  neuterPast: Word('отклонялось', 6),
  pluralPast: Word('отклонялись', 6),
  imperativeInformal: Word('отклоняйся', 6),
  imperativeFormal: Word('отклоняйтесь', 6),
  imperfect: ['отклониться'],
};

perfectVerbs.set(отклоняться.name.text, отклоняться);

export { отклоняться };