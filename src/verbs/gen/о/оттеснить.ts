import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттеснить: PerfectVerb = {
  name: Word('оттеснить', 6),
  singular1stPerson: Word('оттесню', 6),
  singular2ndPerson: Word('оттеснишь', 6),
  singular3rdPerson: Word('оттеснит', 6),
  plural1stPerson: Word('оттесним', 6),
  plural2ndPerson: Word('оттесните', 6),
  plural3rdPerson: Word('оттеснят', 6),
  masculinePast: Word('оттеснил', 6),
  femininePast: Word('оттеснила', 6),
  neuterPast: Word('оттеснило', 6),
  pluralPast: Word('оттеснили', 6),
  imperativeInformal: Word('оттесни', 6),
  imperativeFormal: Word('оттесните', 6),
  imperfect: [],
};

perfectVerbs.set(оттеснить.name.text, оттеснить);

export { оттеснить };