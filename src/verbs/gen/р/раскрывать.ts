import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскрывать: PerfectVerb = {
  name: Word('раскрывать', 7),
  singular1stPerson: Word('раскрываю', 7),
  singular2ndPerson: Word('раскрываешь', 7),
  singular3rdPerson: Word('раскрывает', 7),
  plural1stPerson: Word('раскрываем', 7),
  plural2ndPerson: Word('раскрываете', 7),
  plural3rdPerson: Word('раскрывают', 7),
  masculinePast: Word('раскрывал', 7),
  femininePast: Word('раскрывала', 7),
  neuterPast: Word('раскрывало', 7),
  pluralPast: Word('раскрывали', 7),
  imperativeInformal: Word('раскрывай', 7),
  imperativeFormal: Word('раскрывайте', 7),
  imperfect: ['раскрыть'],
};

perfectVerbs.set(раскрывать.name.text, раскрывать);

export { раскрывать };