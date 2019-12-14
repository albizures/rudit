import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присоединить: PerfectVerb = {
  name: Word('присоединить', 9),
  singular1stPerson: Word('присоединю', 9),
  singular2ndPerson: Word('присоединишь', 9),
  singular3rdPerson: Word('присоединит', 9),
  plural1stPerson: Word('присоединим', 9),
  plural2ndPerson: Word('присоедините', 9),
  plural3rdPerson: Word('присоединят', 9),
  masculinePast: Word('присоединил', 9),
  femininePast: Word('присоединила', 9),
  neuterPast: Word('присоединило', 9),
  pluralPast: Word('присоединили', 9),
  imperativeInformal: Word('присоедини', 9),
  imperativeFormal: Word('присоедините', 9),
  imperfect: [],
};

perfectVerbs.set(присоединить.name.text, присоединить);

export { присоединить };