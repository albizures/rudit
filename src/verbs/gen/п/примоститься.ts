import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примоститься: PerfectVerb = {
  name: Word('примоститься', 7),
  singular1stPerson: Word('примощусь', 6),
  singular2ndPerson: Word('примостишься', 7),
  singular3rdPerson: Word('примостится', 7),
  plural1stPerson: Word('примостимся', 7),
  plural2ndPerson: Word('примоститесь', 7),
  plural3rdPerson: Word('примостятся', 7),
  masculinePast: Word('примостился', 7),
  femininePast: Word('примостилась', 7),
  neuterPast: Word('примостилось', 7),
  pluralPast: Word('примостились', 7),
  imperativeInformal: Word('примостись', 7),
  imperativeFormal: Word('примоститесь', 7),
  imperfect: [],
};

perfectVerbs.set(примоститься.name.text, примоститься);

export { примоститься };