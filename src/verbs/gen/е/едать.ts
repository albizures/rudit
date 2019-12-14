import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const едать: PerfectVerb = {
  name: Word('едать', 2),
  singular1stPerson: Word('едаю', 2),
  singular2ndPerson: Word('едаешь', 2),
  singular3rdPerson: Word('едает', 2),
  plural1stPerson: Word('едаем', 2),
  plural2ndPerson: Word('едаете', 2),
  plural3rdPerson: Word('едают', 2),
  masculinePast: Word('едал', 2),
  femininePast: Word('едала', 2),
  neuterPast: Word('едало', 2),
  pluralPast: Word('едали', 2),
  imperativeInformal: Word('едай', 2),
  imperativeFormal: Word('едайте', 2),
  imperfect: [],
};

perfectVerbs.set(едать.name.text, едать);

export { едать };