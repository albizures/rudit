import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проплывать: PerfectVerb = {
  name: Word('проплывать', 7),
  singular1stPerson: Word('проплываю', 7),
  singular2ndPerson: Word('проплываешь', 7),
  singular3rdPerson: Word('проплывает', 7),
  plural1stPerson: Word('проплываем', 7),
  plural2ndPerson: Word('проплываете', 7),
  plural3rdPerson: Word('проплывают', 7),
  masculinePast: Word('проплывал', 7),
  femininePast: Word('проплывала', 7),
  neuterPast: Word('проплывало', 7),
  pluralPast: Word('проплывали', 7),
  imperativeInformal: Word('проплывай', 7),
  imperativeFormal: Word('проплывайте', 7),
  imperfect: [],
};

perfectVerbs.set(проплывать.name.text, проплывать);

export { проплывать };