import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спустить: PerfectVerb = {
  name: Word('спустить', 5),
  singular1stPerson: Word('спущу', 4),
  singular2ndPerson: Word('спустишь', 2),
  singular3rdPerson: Word('спустит', 2),
  plural1stPerson: Word('спустим', 2),
  plural2ndPerson: Word('спустите', 2),
  plural3rdPerson: Word('спустят', 2),
  masculinePast: Word('спустил', 5),
  femininePast: Word('спустила', 5),
  neuterPast: Word('спустило', 5),
  pluralPast: Word('спустили', 5),
  imperativeInformal: Word('спусти', 5),
  imperativeFormal: Word('спустите', 5),
  imperfect: [],
};

perfectVerbs.set(спустить.name.text, спустить);

export { спустить };