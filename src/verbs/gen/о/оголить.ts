import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оголить: PerfectVerb = {
  name: Word('оголить', 4),
  singular1stPerson: Word('оголю', 4),
  singular2ndPerson: Word('оголишь', 4),
  singular3rdPerson: Word('оголит', 4),
  plural1stPerson: Word('оголим', 4),
  plural2ndPerson: Word('оголите', 4),
  plural3rdPerson: Word('оголят', 4),
  masculinePast: Word('оголил', 4),
  femininePast: Word('оголила', 4),
  neuterPast: Word('оголило', 4),
  pluralPast: Word('оголили', 4),
  imperativeInformal: Word('оголи', 4),
  imperativeFormal: Word('оголите', 4),
  imperfect: [],
};

perfectVerbs.set(оголить.name.text, оголить);

export { оголить };