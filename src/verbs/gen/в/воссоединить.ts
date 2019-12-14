import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воссоединить: PerfectVerb = {
  name: Word('воссоединить', 9),
  singular1stPerson: Word('воссоединю', 9),
  singular2ndPerson: Word('воссоединишь', 9),
  singular3rdPerson: Word('воссоединит', 9),
  plural1stPerson: Word('воссоединим', 9),
  plural2ndPerson: Word('воссоедините', 9),
  plural3rdPerson: Word('воссоединят', 9),
  masculinePast: Word('воссоединил', 9),
  femininePast: Word('воссоединила', 9),
  neuterPast: Word('воссоединило', 9),
  pluralPast: Word('воссоединили', 9),
  imperativeInformal: Word('воссоедини', 9),
  imperativeFormal: Word('воссоедините', 9),
  imperfect: ['воссоединять'],
};

perfectVerbs.set(воссоединить.name.text, воссоединить);

export { воссоединить };