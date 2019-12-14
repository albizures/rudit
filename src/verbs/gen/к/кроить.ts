import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кроить: PerfectVerb = {
  name: Word('кроить', 3),
  singular1stPerson: Word('крою', 3),
  singular2ndPerson: Word('кроишь', 3),
  singular3rdPerson: Word('кроит', 3),
  plural1stPerson: Word('кроим', 3),
  plural2ndPerson: Word('кроите', 3),
  plural3rdPerson: Word('кроят', 3),
  masculinePast: Word('кроил', 3),
  femininePast: Word('кроила', 3),
  neuterPast: Word('кроило', 3),
  pluralPast: Word('кроили', 3),
  imperativeInformal: Word('крои', 3),
  imperativeFormal: Word('кроите', 3),
  imperfect: [],
};

perfectVerbs.set(кроить.name.text, кроить);

export { кроить };