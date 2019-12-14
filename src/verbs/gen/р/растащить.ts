import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растащить: PerfectVerb = {
  name: Word('растащить', 6),
  singular1stPerson: Word('растащу', 6),
  singular2ndPerson: Word('растащишь', 4),
  singular3rdPerson: Word('растащит', 4),
  plural1stPerson: Word('растащим', 4),
  plural2ndPerson: Word('растащите', 4),
  plural3rdPerson: Word('растащат', 4),
  masculinePast: Word('растащил', 6),
  femininePast: Word('растащила', 6),
  neuterPast: Word('растащило', 6),
  pluralPast: Word('растащили', 6),
  imperativeInformal: Word('растащи', 6),
  imperativeFormal: Word('растащите', 6),
  imperfect: [],
};

perfectVerbs.set(растащить.name.text, растащить);

export { растащить };