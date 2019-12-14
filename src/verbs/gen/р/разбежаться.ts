import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбежаться: PerfectVerb = {
  name: Word('разбежаться', 6),
  singular1stPerson: Word('разбегусь', 6),
  singular2ndPerson: Word('разбежишься', 6),
  singular3rdPerson: Word('разбежится', 6),
  plural1stPerson: Word('разбежимся', 6),
  plural2ndPerson: Word('разбежитесь', 6),
  plural3rdPerson: Word('разбегутся', 6),
  masculinePast: Word('разбежался', 6),
  femininePast: Word('разбежалась', 6),
  neuterPast: Word('разбежалось', 6),
  pluralPast: Word('разбежались', 6),
  imperativeInformal: Word('разбегись', 6),
  imperativeFormal: Word('разбегитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разбежаться.name.text, разбежаться);

export { разбежаться };