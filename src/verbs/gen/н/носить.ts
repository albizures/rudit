import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const носить: PerfectVerb = {
  name: Word('носить', 3),
  singular1stPerson: Word('ношу', 3),
  singular2ndPerson: Word('носишь', 1),
  singular3rdPerson: Word('носит', 1),
  plural1stPerson: Word('носим', 1),
  plural2ndPerson: Word('носите', 1),
  plural3rdPerson: Word('носят', 1),
  masculinePast: Word('носил', 3),
  femininePast: Word('носила', 3),
  neuterPast: Word('носило', 3),
  pluralPast: Word('носили', 3),
  imperativeInformal: Word('носи', 3),
  imperativeFormal: Word('носите', 3),
  imperfect: [],
};

perfectVerbs.set(носить.name.text, носить);

export { носить };