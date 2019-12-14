import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const арестовывать: PerfectVerb = {
  name: Word('арестовывать', 5),
  singular1stPerson: Word('арестовываю', 5),
  singular2ndPerson: Word('арестовываешь', 5),
  singular3rdPerson: Word('арестовывает', 5),
  plural1stPerson: Word('арестовываем', 5),
  plural2ndPerson: Word('арестовываете', 5),
  plural3rdPerson: Word('арестовывают', 5),
  masculinePast: Word('арестовывал', 5),
  femininePast: Word('арестовывала', 5),
  neuterPast: Word('арестовывало', 5),
  pluralPast: Word('арестовывали', 5),
  imperativeInformal: Word('арестовывай', 5),
  imperativeFormal: Word('арестовывайте', 5),
  imperfect: ['арестовать'],
};

perfectVerbs.set(арестовывать.name.text, арестовывать);

export { арестовывать };