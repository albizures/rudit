import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вощить: PerfectVerb = {
  name: Word('вощить', 3),
  singular1stPerson: Word('вощу', 3),
  singular2ndPerson: Word('вощишь', 3),
  singular3rdPerson: Word('вощит', 3),
  plural1stPerson: Word('вощим', 3),
  plural2ndPerson: Word('вощите', 3),
  plural3rdPerson: Word('вощат', 3),
  masculinePast: Word('вощил', 3),
  femininePast: Word('вощила', 3),
  neuterPast: Word('вощило', 3),
  pluralPast: Word('вощили', 3),
  imperativeInformal: Word('вощи', 3),
  imperativeFormal: Word('вощите', 3),
  imperfect: [],
};

perfectVerbs.set(вощить.name.text, вощить);

export { вощить };