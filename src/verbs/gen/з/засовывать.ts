import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засовывать: PerfectVerb = {
  name: Word('засовывать', 3),
  singular1stPerson: Word('засовываю', 3),
  singular2ndPerson: Word('засовываешь', 3),
  singular3rdPerson: Word('засовывает', 3),
  plural1stPerson: Word('засовываем', 3),
  plural2ndPerson: Word('засовываете', 3),
  plural3rdPerson: Word('засовывают', 3),
  masculinePast: Word('засовывал', 3),
  femininePast: Word('засовывала', 3),
  neuterPast: Word('засовывало', 3),
  pluralPast: Word('засовывали', 3),
  imperativeInformal: Word('засовывай', 3),
  imperativeFormal: Word('засовывайте', 3),
  imperfect: [],
};

perfectVerbs.set(засовывать.name.text, засовывать);

export { засовывать };