import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загрустить: PerfectVerb = {
  name: Word('загрустить', 7),
  singular1stPerson: Word('загрущу', 6),
  singular2ndPerson: Word('загрустишь', 7),
  singular3rdPerson: Word('загрустит', 7),
  plural1stPerson: Word('загрустим', 7),
  plural2ndPerson: Word('загрустите', 7),
  plural3rdPerson: Word('загрустят', 7),
  masculinePast: Word('загрустил', 7),
  femininePast: Word('загрустила', 7),
  neuterPast: Word('загрустило', 7),
  pluralPast: Word('загрустили', 7),
  imperativeInformal: Word('загрусти', 7),
  imperativeFormal: Word('загрустите', 7),
  imperfect: [],
};

perfectVerbs.set(загрустить.name.text, загрустить);

export { загрустить };