import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выболеть: PerfectVerb = {
  name: Word('выболеть', 1),
  singular1stPerson: Word('выболю', 1),
  singular2ndPerson: Word('выболишь', 1),
  singular3rdPerson: Word('выболит', 1),
  plural1stPerson: Word('выболим', 1),
  plural2ndPerson: Word('выболите', 1),
  plural3rdPerson: Word('выболят', 1),
  masculinePast: Word('выболел', 1),
  femininePast: Word('выболела', 1),
  neuterPast: Word('выболело', 1),
  pluralPast: Word('выболели', 1),
  imperativeInformal: Word('выболи', 1),
  imperativeFormal: Word('выболите', 1),
  imperfect: [],
};

perfectVerbs.set(выболеть.name.text, выболеть);

export { выболеть };