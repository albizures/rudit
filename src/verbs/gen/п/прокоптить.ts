import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокоптить: PerfectVerb = {
  name: Word('прокоптить', 7),
  singular1stPerson: Word('прокопчу', 7),
  singular2ndPerson: Word('прокоптишь', 7),
  singular3rdPerson: Word('прокоптит', 7),
  plural1stPerson: Word('прокоптим', 7),
  plural2ndPerson: Word('прокоптите', 7),
  plural3rdPerson: Word('прокоптят', 7),
  masculinePast: Word('прокоптил', 7),
  femininePast: Word('прокоптила', 7),
  neuterPast: Word('прокоптило', 7),
  pluralPast: Word('прокоптили', 7),
  imperativeInformal: Word('прокопти', 7),
  imperativeFormal: Word('прокоптите', 7),
  imperfect: [],
};

perfectVerbs.set(прокоптить.name.text, прокоптить);

export { прокоптить };