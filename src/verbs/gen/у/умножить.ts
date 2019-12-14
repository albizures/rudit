import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умножить: PerfectVerb = {
  name: Word('умножить', 3),
  singular1stPerson: Word('умножу', 3),
  singular2ndPerson: Word('умножишь', 3),
  singular3rdPerson: Word('умножит', 3),
  plural1stPerson: Word('умножим', 3),
  plural2ndPerson: Word('умножите', 3),
  plural3rdPerson: Word('умножат', 3),
  masculinePast: Word('умножил', 3),
  femininePast: Word('умножила', 3),
  neuterPast: Word('умножило', 3),
  pluralPast: Word('умножили', 3),
  imperativeInformal: Word('умножь', 3),
  imperativeFormal: Word('умножьте', 3),
  imperfect: [],
};

perfectVerbs.set(умножить.name.text, умножить);

export { умножить };