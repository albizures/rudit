import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уладить: PerfectVerb = {
  name: Word('уладить', 2),
  singular1stPerson: Word('улажу', 2),
  singular2ndPerson: Word('уладишь', 2),
  singular3rdPerson: Word('уладит', 2),
  plural1stPerson: Word('уладим', 2),
  plural2ndPerson: Word('уладите', 2),
  plural3rdPerson: Word('уладят', 2),
  masculinePast: Word('уладил', 2),
  femininePast: Word('уладила', 2),
  neuterPast: Word('уладило', 2),
  pluralPast: Word('уладили', 2),
  imperativeInformal: Word('уладь', 2),
  imperativeFormal: Word('уладьте', 2),
  imperfect: [],
};

perfectVerbs.set(уладить.name.text, уладить);

export { уладить };