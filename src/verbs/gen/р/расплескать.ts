import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплескать: PerfectVerb = {
  name: Word('расплескать', 8),
  singular1stPerson: Word('расплещу', 7),
  singular2ndPerson: Word('расплещешь', 5),
  singular3rdPerson: Word('расплещет', 5),
  plural1stPerson: Word('расплещем', 5),
  plural2ndPerson: Word('расплещете', 5),
  plural3rdPerson: Word('расплещут', 5),
  masculinePast: Word('расплескал', 8),
  femininePast: Word('расплескала', 8),
  neuterPast: Word('расплескало', 8),
  pluralPast: Word('расплескали', 8),
  imperativeInformal: Word('расплещи', 7),
  imperativeFormal: Word('расплещите', 7),
  imperfect: [],
};

perfectVerbs.set(расплескать.name.text, расплескать);

export { расплескать };