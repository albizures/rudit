import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const починить: PerfectVerb = {
  name: Word('починить', 5),
  singular1stPerson: Word('починю', 5),
  singular2ndPerson: Word('починишь', 3),
  singular3rdPerson: Word('починит', 3),
  plural1stPerson: Word('починим', 3),
  plural2ndPerson: Word('почините', 3),
  plural3rdPerson: Word('починят', 3),
  masculinePast: Word('починил', 5),
  femininePast: Word('починила', 5),
  neuterPast: Word('починило', 5),
  pluralPast: Word('починили', 5),
  imperativeInformal: Word('почини', 5),
  imperativeFormal: Word('почините', 5),
  imperfect: [],
};

perfectVerbs.set(починить.name.text, починить);

export { починить };