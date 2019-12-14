import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const греметь: PerfectVerb = {
  name: Word('греметь', 4),
  singular1stPerson: Word('гремлю', 5),
  singular2ndPerson: Word('гремишь', 4),
  singular3rdPerson: Word('гремит', 4),
  plural1stPerson: Word('гремим', 4),
  plural2ndPerson: Word('гремите', 4),
  plural3rdPerson: Word('гремят', 4),
  masculinePast: Word('гремел', 4),
  femininePast: Word('гремела', 4),
  neuterPast: Word('гремело', 4),
  pluralPast: Word('гремели', 4),
  imperativeInformal: Word('греми', 4),
  imperativeFormal: Word('гремите', 4),
  imperfect: ['прогреметь','загреметь'],
};

perfectVerbs.set(греметь.name.text, греметь);

export { греметь };