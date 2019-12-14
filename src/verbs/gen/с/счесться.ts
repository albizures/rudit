import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const счесться: PerfectVerb = {
  name: Word('счесться', 2),
  singular1stPerson: Word('сочтусь', 4),
  singular2ndPerson: Word('сочтёшься', 4),
  singular3rdPerson: Word('сочтётся', 4),
  plural1stPerson: Word('сочтёмся', 4),
  plural2ndPerson: Word('сочтётесь', 4),
  plural3rdPerson: Word('сочтутся', 4),
  masculinePast: Word('счёлся', 2),
  femininePast: Word('сочлась', 4),
  neuterPast: Word('сочлось', 4),
  pluralPast: Word('сочлись', 4),
  imperativeInformal: Word('сочтись', 4),
  imperativeFormal: Word('сочтитесь', 4),
  imperfect: [],
};

perfectVerbs.set(счесться.name.text, счесться);

export { счесться };