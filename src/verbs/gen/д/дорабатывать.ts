import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дорабатывать: PerfectVerb = {
  name: Word('дорабатывать', 5),
  singular1stPerson: Word('дорабатываю', 5),
  singular2ndPerson: Word('дорабатываешь', 5),
  singular3rdPerson: Word('дорабатывает', 5),
  plural1stPerson: Word('дорабатываем', 5),
  plural2ndPerson: Word('дорабатываете', 5),
  plural3rdPerson: Word('дорабатывают', 5),
  masculinePast: Word('дорабатывал', 5),
  femininePast: Word('дорабатывала', 5),
  neuterPast: Word('дорабатывало', 5),
  pluralPast: Word('дорабатывали', 5),
  imperativeInformal: Word('дорабатывай', 5),
  imperativeFormal: Word('дорабатывайте', 5),
  imperfect: [],
};

perfectVerbs.set(дорабатывать.name.text, дорабатывать);

export { дорабатывать };