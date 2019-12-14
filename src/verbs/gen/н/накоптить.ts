import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накоптить: PerfectVerb = {
  name: Word('накоптить', 6),
  singular1stPerson: Word('накопчу', 6),
  singular2ndPerson: Word('накоптишь', 6),
  singular3rdPerson: Word('накоптит', 6),
  plural1stPerson: Word('накоптим', 6),
  plural2ndPerson: Word('накоптите', 6),
  plural3rdPerson: Word('накоптят', 6),
  masculinePast: Word('накоптил', 6),
  femininePast: Word('накоптила', 6),
  neuterPast: Word('накоптило', 6),
  pluralPast: Word('накоптили', 6),
  imperativeInformal: Word('накопти', 6),
  imperativeFormal: Word('накоптите', 6),
  imperfect: [],
};

perfectVerbs.set(накоптить.name.text, накоптить);

export { накоптить };