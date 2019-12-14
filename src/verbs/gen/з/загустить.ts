import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загустить: PerfectVerb = {
  name: Word('загустить', 6),
  singular1stPerson: Word('загущу', 5),
  singular2ndPerson: Word('загустишь', 6),
  singular3rdPerson: Word('загустит', 6),
  plural1stPerson: Word('загустим', 6),
  plural2ndPerson: Word('загустите', 6),
  plural3rdPerson: Word('загустят', 6),
  masculinePast: Word('загустил', 6),
  femininePast: Word('загустила', 6),
  neuterPast: Word('загустило', 6),
  pluralPast: Word('загустили', 6),
  imperativeInformal: Word('загусти', 6),
  imperativeFormal: Word('загустите', 6),
  imperfect: [],
};

perfectVerbs.set(загустить.name.text, загустить);

export { загустить };