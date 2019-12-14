import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поздравить: PerfectVerb = {
  name: Word('поздравить', 5),
  singular1stPerson: Word('поздравлю', 5),
  singular2ndPerson: Word('поздравишь', 5),
  singular3rdPerson: Word('поздравит', 5),
  plural1stPerson: Word('поздравим', 5),
  plural2ndPerson: Word('поздравите', 5),
  plural3rdPerson: Word('поздравят', 5),
  masculinePast: Word('поздравил', 5),
  femininePast: Word('поздравила', 5),
  neuterPast: Word('поздравило', 5),
  pluralPast: Word('поздравили', 5),
  imperativeInformal: Word('поздравь', 5),
  imperativeFormal: Word('поздравьте', 5),
  imperfect: ['поздравлять'],
};

perfectVerbs.set(поздравить.name.text, поздравить);

export { поздравить };