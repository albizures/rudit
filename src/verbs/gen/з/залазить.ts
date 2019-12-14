import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залазить: PerfectVerb = {
  name: Word('залазить', 3),
  singular1stPerson: Word('залажу', 3),
  singular2ndPerson: Word('залазишь', 3),
  singular3rdPerson: Word('залазит', 3),
  plural1stPerson: Word('залазим', 3),
  plural2ndPerson: Word('залазите', 3),
  plural3rdPerson: Word('залазят', 3),
  masculinePast: Word('залазил', 3),
  femininePast: Word('залазила', 3),
  neuterPast: Word('залазило', 3),
  pluralPast: Word('залазили', 3),
  imperativeInformal: Word('залазь', 3),
  imperativeFormal: Word('залазьте', 3),
  imperfect: [],
};

perfectVerbs.set(залазить.name.text, залазить);

export { залазить };