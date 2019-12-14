import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высовывать: PerfectVerb = {
  name: Word('высовывать', 3),
  singular1stPerson: Word('высовываю', 3),
  singular2ndPerson: Word('высовываешь', 3),
  singular3rdPerson: Word('высовывает', 3),
  plural1stPerson: Word('высовываем', 3),
  plural2ndPerson: Word('высовываете', 3),
  plural3rdPerson: Word('высовывают', 3),
  masculinePast: Word('высовывал', 3),
  femininePast: Word('высовывала', 3),
  neuterPast: Word('высовывало', 3),
  pluralPast: Word('высовывали', 3),
  imperativeInformal: Word('высовывай', 3),
  imperativeFormal: Word('высовывайте', 3),
  imperfect: [],
};

perfectVerbs.set(высовывать.name.text, высовывать);

export { высовывать };