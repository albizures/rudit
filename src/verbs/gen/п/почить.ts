import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почить: PerfectVerb = {
  name: Word('почить', 3),
  singular1stPerson: Word('почию', 3),
  singular2ndPerson: Word('почиешь', 3),
  singular3rdPerson: Word('почиет', 3),
  plural1stPerson: Word('почием', 3),
  plural2ndPerson: Word('почиете', 3),
  plural3rdPerson: Word('почиют', 3),
  masculinePast: Word('почил', 3),
  femininePast: Word('почила', 3),
  neuterPast: Word('почило', 3),
  pluralPast: Word('почили', 3),
  imperativeInformal: Word('почий', 3),
  imperativeFormal: Word('почийте', 3),
  imperfect: [],
};

perfectVerbs.set(почить.name.text, почить);

export { почить };