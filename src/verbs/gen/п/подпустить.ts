import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпустить: PerfectVerb = {
  name: Word('подпустить', 7),
  singular1stPerson: Word('подпущу', 6),
  singular2ndPerson: Word('подпустишь', 4),
  singular3rdPerson: Word('подпустит', 4),
  plural1stPerson: Word('подпустим', 4),
  plural2ndPerson: Word('подпустите', 4),
  plural3rdPerson: Word('подпустят', 4),
  masculinePast: Word('подпустил', 7),
  femininePast: Word('подпустила', 7),
  neuterPast: Word('подпустило', 7),
  pluralPast: Word('подпустили', 7),
  imperativeInformal: Word('подпусти', 7),
  imperativeFormal: Word('подпустите', 7),
  imperfect: [],
};

perfectVerbs.set(подпустить.name.text, подпустить);

export { подпустить };