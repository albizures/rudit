import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уподобить: PerfectVerb = {
  name: Word('уподобить', 4),
  singular1stPerson: Word('уподоблю', 4),
  singular2ndPerson: Word('уподобишь', 4),
  singular3rdPerson: Word('уподобит', 4),
  plural1stPerson: Word('уподобим', 4),
  plural2ndPerson: Word('уподобите', 4),
  plural3rdPerson: Word('уподобят', 4),
  masculinePast: Word('уподобил', 4),
  femininePast: Word('уподобила', 4),
  neuterPast: Word('уподобило', 4),
  pluralPast: Word('уподобили', 4),
  imperativeInformal: Word('уподобь', 4),
  imperativeFormal: Word('уподобьте', 4),
  imperfect: [],
};

perfectVerbs.set(уподобить.name.text, уподобить);

export { уподобить };