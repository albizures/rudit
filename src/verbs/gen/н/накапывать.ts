import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накапывать: PerfectVerb = {
  name: Word('накапывать', 3),
  singular1stPerson: Word('накапываю', 3),
  singular2ndPerson: Word('накапываешь', 3),
  singular3rdPerson: Word('накапывает', 3),
  plural1stPerson: Word('накапываем', 3),
  plural2ndPerson: Word('накапываете', 3),
  plural3rdPerson: Word('накапывают', 3),
  masculinePast: Word('накапывал', 3),
  femininePast: Word('накапывала', 3),
  neuterPast: Word('накапывало', 3),
  pluralPast: Word('накапывали', 3),
  imperativeInformal: Word('накапывай', 3),
  imperativeFormal: Word('накапывайте', 3),
  imperfect: [],
};

perfectVerbs.set(накапывать.name.text, накапывать);

export { накапывать };