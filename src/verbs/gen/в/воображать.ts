import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воображать: PerfectVerb = {
  name: Word('воображать', 7),
  singular1stPerson: Word('воображаю', 7),
  singular2ndPerson: Word('воображаешь', 7),
  singular3rdPerson: Word('воображает', 7),
  plural1stPerson: Word('воображаем', 7),
  plural2ndPerson: Word('воображаете', 7),
  plural3rdPerson: Word('воображают', 7),
  masculinePast: Word('воображал', 7),
  femininePast: Word('воображала', 7),
  neuterPast: Word('воображало', 7),
  pluralPast: Word('воображали', 7),
  imperativeInformal: Word('воображай', 7),
  imperativeFormal: Word('воображайте', 7),
  imperfect: ['вообразить'],
};

perfectVerbs.set(воображать.name.text, воображать);

export { воображать };