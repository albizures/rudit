import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const налакировать: PerfectVerb = {
  name: Word('налакировать', 9),
  singular1stPerson: Word('налакирую', 7),
  singular2ndPerson: Word('налакируешь', 7),
  singular3rdPerson: Word('налакирует', 7),
  plural1stPerson: Word('налакируем', 7),
  plural2ndPerson: Word('налакируете', 7),
  plural3rdPerson: Word('налакируют', 7),
  masculinePast: Word('налакировал', 9),
  femininePast: Word('налакировала', 9),
  neuterPast: Word('налакировало', 9),
  pluralPast: Word('налакировали', 9),
  imperativeInformal: Word('налакируй', 7),
  imperativeFormal: Word('налакируйте', 7),
  imperfect: [],
};

perfectVerbs.set(налакировать.name.text, налакировать);

export { налакировать };