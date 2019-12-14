import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доставаться: PerfectVerb = {
  name: Word('доставаться', 6),
  singular1stPerson: Word('достаюсь', 5),
  singular2ndPerson: Word('достаёшься', 5),
  singular3rdPerson: Word('достаётся', 5),
  plural1stPerson: Word('достаёмся', 5),
  plural2ndPerson: Word('достаётесь', 5),
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