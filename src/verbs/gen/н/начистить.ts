import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начистить: PerfectVerb = {
  name: Word('начистить', 3),
  singular1stPerson: Word('начищу', 3),
  singular2ndPerson: Word('начистишь', 3),
  singular3rdPerson: Word('начистит', 3),
  plural1stPerson: Word('начистим', 3),
  plural2ndPerson: Word('начистите', 3),
  plural3rdPerson: Word('начистят', 3),
  masculinePast: Word('начистил', 3),
  femininePast: Word('начистила', 3),
  neuterPast: Word('начистило', 3),
  pluralPast: Word('начистили', 3),
  imperativeInformal: Word('начисти//начи'сть', 3),
  imperativeFormal: Word('начи'стите//на'чи'стьте', 1),
  imperfect: [],
};

perfectVerbs.set(начистить.name.text, начистить);

export { начистить };