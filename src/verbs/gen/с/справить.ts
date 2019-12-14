import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const справить: PerfectVerb = {
  name: Word('справить', 3),
  singular1stPerson: Word('справлю', 3),
  singular2ndPerson: Word('справишь', 3),
  singular3rdPerson: Word('справит', 3),
  plural1stPerson: Word('справим', 3),
  plural2ndPerson: Word('справите', 3),
  plural3rdPerson: Word('справят', 3),
  masculinePast: Word('справил', 3),
  femininePast: Word('справила', 3),
  neuterPast: Word('справило', 3),
  pluralPast: Word('справили', 3),
  imperativeInformal: Word('справь', 3),
  imperativeFormal: Word('справьте', 3),
  imperfect: [],
};

perfectVerbs.set(справить.name.text, справить);

export { справить };