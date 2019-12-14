import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const показывать: PerfectVerb = {
  name: Word('показывать', 3),
  singular1stPerson: Word('показываю', 3),
  singular2ndPerson: Word('показываешь', 3),
  singular3rdPerson: Word('показывает', 3),
  plural1stPerson: Word('показываем', 3),
  plural2ndPerson: Word('показываете', 3),
  plural3rdPerson: Word('показывают', 3),
  masculinePast: Word('показывал', 3),
  femininePast: Word('показывала', 3),
  neuterPast: Word('показывало', 3),
  pluralPast: Word('показывали', 3),
  imperativeInformal: Word('показывай', 3),
  imperativeFormal: Word('показывайте', 3),
  imperfect: ['показать'],
};

perfectVerbs.set(показывать.name.text, показывать);

export { показывать };