import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const узнать: PerfectVerb = {
  name: Word('узнать', 3),
  singular1stPerson: Word('узнаю', 3),
  singular2ndPerson: Word('узнаешь', 3),
  singular3rdPerson: Word('узнает', 3),
  plural1stPerson: Word('узнаем', 3),
  plural2ndPerson: Word('узнаете', 3),
  plural3rdPerson: Word('узнают', 3),
  masculinePast: Word('узнал', 3),
  femininePast: Word('узнала', 3),
  neuterPast: Word('узнало', 3),
  pluralPast: Word('узнали', 3),
  imperativeInformal: Word('узнай', 3),
  imperativeFormal: Word('узнайте', 3),
  imperfect: ['знать','узнавать'],
};

perfectVerbs.set(узнать.name.text, узнать);

export { узнать };