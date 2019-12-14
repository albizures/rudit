import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накричаться: PerfectVerb = {
  name: Word('накричаться', 6),
  singular1stPerson: Word('накричусь', 6),
  singular2ndPerson: Word('накричишься', 6),
  singular3rdPerson: Word('накричится', 6),
  plural1stPerson: Word('накричимся', 6),
  plural2ndPerson: Word('накричитесь', 6),
  plural3rdPerson: Word('накричатся', 6),
  masculinePast: Word('накричался', 6),
  femininePast: Word('накричалась', 6),
  neuterPast: Word('накричалось', 6),
  pluralPast: Word('накричались', 6),
  imperativeInformal: Word('накричись', 6),
  imperativeFormal: Word('накричитесь', 6),
  imperfect: [],
};

perfectVerbs.set(накричаться.name.text, накричаться);

export { накричаться };