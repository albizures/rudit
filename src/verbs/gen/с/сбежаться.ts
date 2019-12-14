import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбежаться: PerfectVerb = {
  name: Word('сбежаться', 4),
  singular1stPerson: Word('сбегусь', 4),
  singular2ndPerson: Word('сбежишься', 4),
  singular3rdPerson: Word('сбежится', 4),
  plural1stPerson: Word('сбежимся', 4),
  plural2ndPerson: Word('сбежитесь', 4),
  plural3rdPerson: Word('сбегутся', 4),
  masculinePast: Word('сбежался', 4),
  femininePast: Word('сбежалась', 4),
  neuterPast: Word('сбежалось', 4),
  pluralPast: Word('сбежались', 4),
  imperativeInformal: Word('сбегись', 4),
  imperativeFormal: Word('сбегитесь', 4),
  imperfect: [],
};

perfectVerbs.set(сбежаться.name.text, сбежаться);

export { сбежаться };