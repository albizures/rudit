import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рябить: PerfectVerb = {
  name: Word('рябить', 3),
  singular1stPerson: Word('ряблю', 4),
  singular2ndPerson: Word('рябишь', 3),
  singular3rdPerson: Word('рябит', 3),
  plural1stPerson: Word('рябим', 3),
  plural2ndPerson: Word('рябите', 3),
  plural3rdPerson: Word('рябят', 3),
  masculinePast: Word('рябил', 3),
  femininePast: Word('рябила', 3),
  neuterPast: Word('рябило', 3),
  pluralPast: Word('рябили', 3),
  imperativeInformal: Word('ряби', 3),
  imperativeFormal: Word('рябите', 3),
  imperfect: [],
};

perfectVerbs.set(рябить.name.text, рябить);

export { рябить };