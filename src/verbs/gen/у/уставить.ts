import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уставить: PerfectVerb = {
  name: Word('уставить', 3),
  singular1stPerson: Word('уставлю', 3),
  singular2ndPerson: Word('уставишь', 3),
  singular3rdPerson: Word('уставит', 3),
  plural1stPerson: Word('уставим', 3),
  plural2ndPerson: Word('уставите', 3),
  plural3rdPerson: Word('уставят', 3),
  masculinePast: Word('уставил', 3),
  femininePast: Word('уставила', 3),
  neuterPast: Word('уставило', 3),
  pluralPast: Word('уставили', 3),
  imperativeInformal: Word('уставь', 3),
  imperativeFormal: Word('уставьте', 3),
  imperfect: [],
};

perfectVerbs.set(уставить.name.text, уставить);

export { уставить };