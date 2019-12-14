import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потрусить: PerfectVerb = {
  name: Word('потрусить', 6),
  singular1stPerson: Word('потрушу', 6),
  singular2ndPerson: Word('потрусишь', 6),
  singular3rdPerson: Word('потрусит', 6),
  plural1stPerson: Word('потрусим', 6),
  plural2ndPerson: Word('потрусите', 6),
  plural3rdPerson: Word('потрусят', 6),
  masculinePast: Word('потрусил', 6),
  femininePast: Word('потрусила', 6),
  neuterPast: Word('потрусило', 6),
  pluralPast: Word('потрусили', 6),
  imperativeInformal: Word('потруси', 6),
  imperativeFormal: Word('потрусите', 6),
  imperfect: [],
};

perfectVerbs.set(потрусить.name.text, потрусить);

export { потрусить };