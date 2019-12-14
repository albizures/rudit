import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постучаться: PerfectVerb = {
  name: Word('постучаться', 6),
  singular1stPerson: Word('постучусь', 6),
  singular2ndPerson: Word('постучишься', 6),
  singular3rdPerson: Word('постучится', 6),
  plural1stPerson: Word('постучимся', 6),
  plural2ndPerson: Word('постучитесь', 6),
  plural3rdPerson: Word('постучатся', 6),
  masculinePast: Word('постучался', 6),
  femininePast: Word('постучалась', 6),
  neuterPast: Word('постучалось', 6),
  pluralPast: Word('постучались', 6),
  imperativeInformal: Word('постучись', 6),
  imperativeFormal: Word('постучитесь', 6),
  imperfect: [],
};

perfectVerbs.set(постучаться.name.text, постучаться);

export { постучаться };