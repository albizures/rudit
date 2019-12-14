import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсобить: PerfectVerb = {
  name: Word('подсобить', 6),
  singular1stPerson: Word('подсоблю', 7),
  singular2ndPerson: Word('подсобишь', 6),
  singular3rdPerson: Word('подсобит', 6),
  plural1stPerson: Word('подсобим', 6),
  plural2ndPerson: Word('подсобите', 6),
  plural3rdPerson: Word('подсобят', 6),
  masculinePast: Word('подсобил', 6),
  femininePast: Word('подсобила', 6),
  neuterPast: Word('подсобило', 6),
  pluralPast: Word('подсобили', 6),
  imperativeInformal: Word('подсоби', 6),
  imperativeFormal: Word('подсобите', 6),
  imperfect: [],
};

perfectVerbs.set(подсобить.name.text, подсобить);

export { подсобить };