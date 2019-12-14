import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const реализовывать: PerfectVerb = {
  name: Word('реализовывать', 6),
  singular1stPerson: Word('реализовываю', 6),
  singular2ndPerson: Word('реализовываешь', 6),
  singular3rdPerson: Word('реализовывает', 6),
  plural1stPerson: Word('реализовываем', 6),
  plural2ndPerson: Word('реализовываете', 6),
  plural3rdPerson: Word('реализовывают', 6),
  masculinePast: Word('реализовывал', 6),
  femininePast: Word('реализовывала', 6),
  neuterPast: Word('реализовывало', 6),
  pluralPast: Word('реализовывали', 6),
  imperativeInformal: Word('реализовывай', 6),
  imperativeFormal: Word('реализовывайте', 6),
  imperfect: ['реализовать'],
};

perfectVerbs.set(реализовывать.name.text, реализовывать);

export { реализовывать };