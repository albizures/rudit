import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сжить: PerfectVerb = {
  name: Word('сжить', 2),
  singular1stPerson: Word('сживу', 4),
  singular2ndPerson: Word('сживёшь', 4),
  singular3rdPerson: Word('сживёт', 4),
  plural1stPerson: Word('сживём', 4),
  plural2ndPerson: Word('сживёте', 4),
  plural3rdPerson: Word('сживут', 4),
  masculinePast: Word('сжил', 2),
  femininePast: Word('сжила', 4),
  neuterPast: Word('сжило', 2),
  pluralPast: Word('сжили', 2),
  imperativeInformal: Word('сживи', 4),
  imperativeFormal: Word('сживите', 4),
  imperfect: [],
};

perfectVerbs.set(сжить.name.text, сжить);

export { сжить };