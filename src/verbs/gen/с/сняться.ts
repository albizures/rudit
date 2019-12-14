import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сняться: PerfectVerb = {
  name: Word('сняться', 2),
  singular1stPerson: Word('снимусь', 4),
  singular2ndPerson: Word('снимешься', 2),
  singular3rdPerson: Word('снимется', 2),
  plural1stPerson: Word('снимемся', 2),
  plural2ndPerson: Word('сниметесь', 2),
  plural3rdPerson: Word('снимутся', 2),
  masculinePast: Word('снялся', 2),
  femininePast: Word('снялась', 4),
  neuterPast: Word('снялось//сняло'сь', 2),
  pluralPast: Word('снялись//сняли'сь', 2),
  imperativeInformal: Word('снимись', 4),
  imperativeFormal: Word('снимитесь', 4),
  imperfect: [],
};

perfectVerbs.set(сняться.name.text, сняться);

export { сняться };