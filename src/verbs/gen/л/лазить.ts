import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лазить: PerfectVerb = {
  name: Word('лазить', 1),
  singular1stPerson: Word('лажу', 1),
  singular2ndPerson: Word('лазишь', 1),
  singular3rdPerson: Word('лазит', 1),
  plural1stPerson: Word('лазим', 1),
  plural2ndPerson: Word('лазите', 1),
  plural3rdPerson: Word('лазят', 1),
  masculinePast: Word('лазил', 1),
  femininePast: Word('лазила', 1),
  neuterPast: Word('лазило', 1),
  pluralPast: Word('лазили', 1),
  imperativeInformal: Word('лазь', 1),
  imperativeFormal: Word('лазьте', 1),
  imperfect: [],
};

perfectVerbs.set(лазить.name.text, лазить);

export { лазить };