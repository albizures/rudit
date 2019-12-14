import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скрывать: PerfectVerb = {
  name: Word('скрывать', 5),
  singular1stPerson: Word('скрываю', 5),
  singular2ndPerson: Word('скрываешь', 5),
  singular3rdPerson: Word('скрывает', 5),
  plural1stPerson: Word('скрываем', 5),
  plural2ndPerson: Word('скрываете', 5),
  plural3rdPerson: Word('скрывают', 5),
  masculinePast: Word('скрывал', 5),
  femininePast: Word('скрывала', 5),
  neuterPast: Word('скрывало', 5),
  pluralPast: Word('скрывали', 5),
  imperativeInformal: Word('скрывай', 5),
  imperativeFormal: Word('скрывайте', 5),
  imperfect: ['скрыть'],
};

perfectVerbs.set(скрывать.name.text, скрывать);

export { скрывать };