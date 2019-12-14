import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доставаться: PerfectVerb = {
  name: Word('доставаться', 6),
  singular1stPerson: Word('достаюсь', 5),
  singular2ndPerson: Word('достаёшься', 4),
  singular3rdPerson: Word('достаётся', 4),
  plural1stPerson: Word('достаёмся', 4),
  plural2ndPerson: Word('достаётесь', 4),
  plural3rdPerson: Word('достаются', 5),
  masculinePast: Word('доставался', 6),
  femininePast: Word('доставалась', 6),
  neuterPast: Word('доставалось', 6),
  pluralPast: Word('доставались', 6),
  imperativeInformal: Word('доставайся', 6),
  imperativeFormal: Word('доставайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(доставаться.name.text, доставаться);

export { доставаться };