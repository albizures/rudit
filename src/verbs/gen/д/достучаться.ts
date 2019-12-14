import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const достучаться: PerfectVerb = {
  name: Word('достучаться', 6),
  singular1stPerson: Word('достучусь', 6),
  singular2ndPerson: Word('достучишься', 6),
  singular3rdPerson: Word('достучится', 6),
  plural1stPerson: Word('достучимся', 6),
  plural2ndPerson: Word('достучитесь', 6),
  plural3rdPerson: Word('достучатся', 6),
  masculinePast: Word('достучался', 6),
  femininePast: Word('достучалась', 6),
  neuterPast: Word('достучалось', 6),
  pluralPast: Word('достучались', 6),
  imperativeInformal: Word('достучись', 6),
  imperativeFormal: Word('достучитесь', 6),
  imperfect: [],
};

perfectVerbs.set(достучаться.name.text, достучаться);

export { достучаться };