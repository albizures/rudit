import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const экспериментировать: PerfectVerb = {
  name: Word('экспериментировать', 11),
  singular1stPerson: Word('экспериментирую', 11),
  singular2ndPerson: Word('экспериментируешь', 11),
  singular3rdPerson: Word('экспериментирует', 11),
  plural1stPerson: Word('экспериментируем', 11),
  plural2ndPerson: Word('экспериментируете', 11),
  plural3rdPerson: Word('экспериментируют', 11),
  masculinePast: Word('экспериментировал', 11),
  femininePast: Word('экспериментировала', 11),
  neuterPast: Word('экспериментировало', 11),
  pluralPast: Word('экспериментировали', 11),
  imperativeInformal: Word('экспериментируй', 11),
  imperativeFormal: Word('экспериментируйте', 11),
  imperfect: [],
};

perfectVerbs.set(экспериментировать.name.text, экспериментировать);

export { экспериментировать };