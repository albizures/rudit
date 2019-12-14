import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрывать: PerfectVerb = {
  name: Word('отрывать', 5),
  singular1stPerson: Word('отрываю', 5),
  singular2ndPerson: Word('отрываешь', 5),
  singular3rdPerson: Word('отрывает', 5),
  plural1stPerson: Word('отрываем', 5),
  plural2ndPerson: Word('отрываете', 5),
  plural3rdPerson: Word('отрывают', 5),
  masculinePast: Word('отрывал', 5),
  femininePast: Word('отрывала', 5),
  neuterPast: Word('отрывало', 5),
  pluralPast: Word('отрывали', 5),
  imperativeInformal: Word('отрывай', 5),
  imperativeFormal: Word('отрывайте', 5),
  imperfect: ['оторвать'],
};

perfectVerbs.set(отрывать.name.text, отрывать);

export { отрывать };