import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загоститься: PerfectVerb = {
  name: Word('загоститься', 6),
  singular1stPerson: Word('загощусь', 5),
  singular2ndPerson: Word('загостишься', 6),
  singular3rdPerson: Word('загостится', 6),
  plural1stPerson: Word('загостимся', 6),
  plural2ndPerson: Word('загоститесь', 6),
  plural3rdPerson: Word('загостятся', 6),
  masculinePast: Word('загостился', 6),
  femininePast: Word('загостилась', 6),
  neuterPast: Word('загостилось', 6),
  pluralPast: Word('загостились', 6),
  imperativeInformal: Word('загостись', 6),
  imperativeFormal: Word('загоститесь', 6),
  imperfect: [],
};

perfectVerbs.set(загоститься.name.text, загоститься);

export { загоститься };