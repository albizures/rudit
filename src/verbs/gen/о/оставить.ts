import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оставить: PerfectVerb = {
  name: Word('оставить', 3),
  singular1stPerson: Word('оставлю', 3),
  singular2ndPerson: Word('оставишь', 3),
  singular3rdPerson: Word('оставит', 3),
  plural1stPerson: Word('оставим', 3),
  plural2ndPerson: Word('оставите', 3),
  plural3rdPerson: Word('оставят', 3),
  masculinePast: Word('оставил', 3),
  femininePast: Word('оставила', 3),
  neuterPast: Word('оставило', 3),
  pluralPast: Word('оставили', 3),
  imperativeInformal: Word('оставь', 3),
  imperativeFormal: Word('оставьте', 3),
  imperfect: ['оставлять'],
};

perfectVerbs.set(оставить.name.text, оставить);

export { оставить };