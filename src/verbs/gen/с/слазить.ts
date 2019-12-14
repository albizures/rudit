import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слазить: PerfectVerb = {
  name: Word('слазить', 2),
  singular1stPerson: Word('слажу', 2),
  singular2ndPerson: Word('слазишь', 2),
  singular3rdPerson: Word('слазит', 2),
  plural1stPerson: Word('слазим', 2),
  plural2ndPerson: Word('слазите', 2),
  plural3rdPerson: Word('слазят', 2),
  masculinePast: Word('слазил', 2),
  femininePast: Word('слазила', 2),
  neuterPast: Word('слазило', 2),
  pluralPast: Word('слазили', 2),
  imperativeInformal: Word('слазь', 2),
  imperativeFormal: Word('слазьте', 2),
  imperfect: [],
};

perfectVerbs.set(слазить.name.text, слазить);

export { слазить };