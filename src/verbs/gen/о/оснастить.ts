import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оснастить: PerfectVerb = {
  name: Word('оснастить', 6),
  singular1stPerson: Word('оснащу', 5),
  singular2ndPerson: Word('оснастишь', 6),
  singular3rdPerson: Word('оснастит', 6),
  plural1stPerson: Word('оснастим', 6),
  plural2ndPerson: Word('оснастите', 6),
  plural3rdPerson: Word('оснастят', 6),
  masculinePast: Word('оснастил', 6),
  femininePast: Word('оснастила', 6),
  neuterPast: Word('оснастило', 6),
  pluralPast: Word('оснастили', 6),
  imperativeInformal: Word('оснасти', 6),
  imperativeFormal: Word('оснастите', 6),
  imperfect: [],
};

perfectVerbs.set(оснастить.name.text, оснастить);

export { оснастить };