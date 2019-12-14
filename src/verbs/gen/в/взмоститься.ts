import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взмоститься: PerfectVerb = {
  name: Word('взмоститься', 6),
  singular1stPerson: Word('взмощусь', 5),
  singular2ndPerson: Word('взмостишься', 6),
  singular3rdPerson: Word('взмостится', 6),
  plural1stPerson: Word('взмостимся', 6),
  plural2ndPerson: Word('взмоститесь', 6),
  plural3rdPerson: Word('взмостятся', 6),
  masculinePast: Word('взмостился', 6),
  femininePast: Word('взмостилась', 6),
  neuterPast: Word('взмостилось', 6),
  pluralPast: Word('взмостились', 6),
  imperativeInformal: Word('взмостись', 6),
  imperativeFormal: Word('взмоститесь', 6),
  imperfect: [],
};

perfectVerbs.set(взмоститься.name.text, взмоститься);

export { взмоститься };