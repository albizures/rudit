import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перечистить: PerfectVerb = {
  name: Word('перечистить', 5),
  singular1stPerson: Word('перечищу', 5),
  singular2ndPerson: Word('перечистишь', 5),
  singular3rdPerson: Word('перечистит', 5),
  plural1stPerson: Word('перечистим', 5),
  plural2ndPerson: Word('перечистите', 5),
  plural3rdPerson: Word('перечистят', 5),
  masculinePast: Word('перечистил', 5),
  femininePast: Word('перечистила', 5),
  neuterPast: Word('перечистило', 5),
  pluralPast: Word('перечистили', 5),
  imperativeInformal: Word('перечисти//перечи'сть', 5),
  imperativeFormal: Word('перечи'стите//пере'чи'стьте', 3),
  imperfect: [],
};

perfectVerbs.set(перечистить.name.text, перечистить);

export { перечистить };