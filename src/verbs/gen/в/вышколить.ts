import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вышколить: PerfectVerb = {
  name: Word('вышколить', 1),
  singular1stPerson: Word('вышколю', 1),
  singular2ndPerson: Word('вышколишь', 1),
  singular3rdPerson: Word('вышколит', 1),
  plural1stPerson: Word('вышколим', 1),
  plural2ndPerson: Word('вышколите', 1),
  plural3rdPerson: Word('вышколят', 1),
  masculinePast: Word('вышколил', 1),
  femininePast: Word('вышколила', 1),
  neuterPast: Word('вышколило', 1),
  pluralPast: Word('вышколили', 1),
  imperativeInformal: Word('вышколи', 1),
  imperativeFormal: Word('вышкольте', 1),
  imperfect: [],
};

perfectVerbs.set(вышколить.name.text, вышколить);

export { вышколить };