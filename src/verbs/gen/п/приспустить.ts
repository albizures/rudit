import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приспустить: PerfectVerb = {
  name: Word('приспустить', 8),
  singular1stPerson: Word('приспущу', 7),
  singular2ndPerson: Word('приспустишь', 5),
  singular3rdPerson: Word('приспустит', 5),
  plural1stPerson: Word('приспустим', 5),
  plural2ndPerson: Word('приспустите', 5),
  plural3rdPerson: Word('приспустят', 5),
  masculinePast: Word('приспустил', 8),
  femininePast: Word('приспустила', 8),
  neuterPast: Word('приспустило', 8),
  pluralPast: Word('приспустили', 8),
  imperativeInformal: Word('приспусти', 8),
  imperativeFormal: Word('приспустите', 8),
  imperfect: [],
};

perfectVerbs.set(приспустить.name.text, приспустить);

export { приспустить };