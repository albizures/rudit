import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настучаться: PerfectVerb = {
  name: Word('настучаться', 6),
  singular1stPerson: Word('настучусь', 6),
  singular2ndPerson: Word('настучишься', 6),
  singular3rdPerson: Word('настучится', 6),
  plural1stPerson: Word('настучимся', 6),
  plural2ndPerson: Word('настучитесь', 6),
  plural3rdPerson: Word('настучатся', 6),
  masculinePast: Word('настучался', 6),
  femininePast: Word('настучалась', 6),
  neuterPast: Word('настучалось', 6),
  pluralPast: Word('настучались', 6),
  imperativeInformal: Word('настучись', 6),
  imperativeFormal: Word('настучитесь', 6),
  imperfect: [],
};

perfectVerbs.set(настучаться.name.text, настучаться);

export { настучаться };