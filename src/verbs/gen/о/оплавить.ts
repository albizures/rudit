import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оплавить: PerfectVerb = {
  name: Word('оплавить', 3),
  singular1stPerson: Word('оплавлю', 3),
  singular2ndPerson: Word('оплавишь', 3),
  singular3rdPerson: Word('оплавит', 3),
  plural1stPerson: Word('оплавим', 3),
  plural2ndPerson: Word('оплавите', 3),
  plural3rdPerson: Word('оплавят', 3),
  masculinePast: Word('оплавил', 3),
  femininePast: Word('оплавила', 3),
  neuterPast: Word('оплавило', 3),
  pluralPast: Word('оплавили', 3),
  imperativeInformal: Word('оплавь', 3),
  imperativeFormal: Word('оплавьте', 3),
  imperfect: [],
};

perfectVerbs.set(оплавить.name.text, оплавить);

export { оплавить };