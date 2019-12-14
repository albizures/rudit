import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подводить: PerfectVerb = {
  name: Word('подводить', 6),
  singular1stPerson: Word('подвожу', 6),
  singular2ndPerson: Word('подводишь', 4),
  singular3rdPerson: Word('подводит', 4),
  plural1stPerson: Word('подводим', 4),
  plural2ndPerson: Word('подводите', 4),
  plural3rdPerson: Word('подводят', 4),
  masculinePast: Word('подводил', 6),
  femininePast: Word('подводила', 6),
  neuterPast: Word('подводило', 6),
  pluralPast: Word('подводили', 6),
  imperativeInformal: Word('подводи', 6),
  imperativeFormal: Word('подводите', 6),
  imperfect: [],
};

perfectVerbs.set(подводить.name.text, подводить);

export { подводить };