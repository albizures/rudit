import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сподобить: PerfectVerb = {
  name: Word('сподобить', 4),
  singular1stPerson: Word('сподоблю', 4),
  singular2ndPerson: Word('сподобишь', 4),
  singular3rdPerson: Word('сподобит', 4),
  plural1stPerson: Word('сподобим', 4),
  plural2ndPerson: Word('сподобите', 4),
  plural3rdPerson: Word('сподобят', 4),
  masculinePast: Word('сподобил', 4),
  femininePast: Word('сподобила', 4),
  neuterPast: Word('сподобило', 4),
  pluralPast: Word('сподобили', 4),
  imperativeInformal: Word('сподобь', 4),
  imperativeFormal: Word('сподобьте', 4),
  imperfect: [],
};

perfectVerbs.set(сподобить.name.text, сподобить);

export { сподобить };