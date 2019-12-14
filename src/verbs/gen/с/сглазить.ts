import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сглазить: PerfectVerb = {
  name: Word('сглазить', 3),
  singular1stPerson: Word('сглажу', 3),
  singular2ndPerson: Word('сглазишь', 3),
  singular3rdPerson: Word('сглазит', 3),
  plural1stPerson: Word('сглазим', 3),
  plural2ndPerson: Word('сглазите', 3),
  plural3rdPerson: Word('сглазят', 3),
  masculinePast: Word('сглазил', 3),
  femininePast: Word('сглазила', 3),
  neuterPast: Word('сглазило', 3),
  pluralPast: Word('сглазили', 3),
  imperativeInformal: Word('сглазь', 3),
  imperativeFormal: Word('сглазьте', 3),
  imperfect: [],
};

perfectVerbs.set(сглазить.name.text, сглазить);

export { сглазить };