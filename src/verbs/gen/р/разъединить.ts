import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разъединить: PerfectVerb = {
  name: Word('разъединить', 8),
  singular1stPerson: Word('разъединю', 8),
  singular2ndPerson: Word('разъединишь', 8),
  singular3rdPerson: Word('разъединит', 8),
  plural1stPerson: Word('разъединим', 8),
  plural2ndPerson: Word('разъедините', 8),
  plural3rdPerson: Word('разъединят', 8),
  masculinePast: Word('разъединил', 8),
  femininePast: Word('разъединила', 8),
  neuterPast: Word('разъединило', 8),
  pluralPast: Word('разъединили', 8),
  imperativeInformal: Word('разъедини', 8),
  imperativeFormal: Word('разъедините', 8),
  imperfect: ['разъединять'],
};

perfectVerbs.set(разъединить.name.text, разъединить);

export { разъединить };