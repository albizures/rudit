import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const померить: PerfectVerb = {
  name: Word('померить', 3),
  singular1stPerson: Word('померю', 3),
  singular2ndPerson: Word('померишь', 3),
  singular3rdPerson: Word('померит', 3),
  plural1stPerson: Word('померим', 3),
  plural2ndPerson: Word('померите', 3),
  plural3rdPerson: Word('померят', 3),
  masculinePast: Word('померил', 3),
  femininePast: Word('померила', 3),
  neuterPast: Word('померило', 3),
  pluralPast: Word('померили', 3),
  imperativeInformal: Word('померь', 3),
  imperativeFormal: Word('померьте', 3),
  imperfect: [],
};

perfectVerbs.set(померить.name.text, померить);

export { померить };