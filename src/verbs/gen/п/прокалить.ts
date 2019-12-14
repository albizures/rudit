import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокалить: PerfectVerb = {
  name: Word('прокалить', 6),
  singular1stPerson: Word('прокалю', 6),
  singular2ndPerson: Word('прокалишь', 6),
  singular3rdPerson: Word('прокалит', 6),
  plural1stPerson: Word('прокалим', 6),
  plural2ndPerson: Word('прокалите', 6),
  plural3rdPerson: Word('прокалят', 6),
  masculinePast: Word('прокалил', 6),
  femininePast: Word('прокалила', 6),
  neuterPast: Word('прокалило', 6),
  pluralPast: Word('прокалили', 6),
  imperativeInformal: Word('прокали', 6),
  imperativeFormal: Word('прокалите', 6),
  imperfect: [],
};

perfectVerbs.set(прокалить.name.text, прокалить);

export { прокалить };