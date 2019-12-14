import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облазить: PerfectVerb = {
  name: Word('облазить', 3),
  singular1stPerson: Word('облажу', 3),
  singular2ndPerson: Word('облазишь', 3),
  singular3rdPerson: Word('облазит', 3),
  plural1stPerson: Word('облазим', 3),
  plural2ndPerson: Word('облазите', 3),
  plural3rdPerson: Word('облазят', 3),
  masculinePast: Word('облазил', 3),
  femininePast: Word('облазила', 3),
  neuterPast: Word('облазило', 3),
  pluralPast: Word('облазили', 3),
  imperativeInformal: Word('облазь', 3),
  imperativeFormal: Word('облазьте', 3),
  imperfect: [],
};

perfectVerbs.set(облазить.name.text, облазить);

export { облазить };