import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высказывать: PerfectVerb = {
  name: Word('высказывать', 4),
  singular1stPerson: Word('высказываю', 4),
  singular2ndPerson: Word('высказываешь', 4),
  singular3rdPerson: Word('высказывает', 4),
  plural1stPerson: Word('высказываем', 4),
  plural2ndPerson: Word('высказываете', 4),
  plural3rdPerson: Word('высказывают', 4),
  masculinePast: Word('высказывал', 4),
  femininePast: Word('высказывала', 4),
  neuterPast: Word('высказывало', 4),
  pluralPast: Word('высказывали', 4),
  imperativeInformal: Word('высказывай', 4),
  imperativeFormal: Word('высказывайте', 4),
  imperfect: [],
};

perfectVerbs.set(высказывать.name.text, высказывать);

export { высказывать };