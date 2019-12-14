import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const очистить: PerfectVerb = {
  name: Word('очистить', 2),
  singular1stPerson: Word('очищу', 2),
  singular2ndPerson: Word('очистишь', 2),
  singular3rdPerson: Word('очистит', 2),
  plural1stPerson: Word('очистим', 2),
  plural2ndPerson: Word('очистите', 2),
  plural3rdPerson: Word('очистят', 2),
  masculinePast: Word('очистил', 2),
  femininePast: Word('очистила', 2),
  neuterPast: Word('очистило', 2),
  pluralPast: Word('очистили', 2),
  imperativeInformal: Word('очисти//очи'сть', 2),
  imperativeFormal: Word('очи'стите//о'чи'стьте', 0),
  imperfect: [],
};

perfectVerbs.set(очистить.name.text, очистить);

export { очистить };