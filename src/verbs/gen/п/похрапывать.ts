import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похрапывать: PerfectVerb = {
  name: Word('похрапывать', 4),
  singular1stPerson: Word('похрапываю', 4),
  singular2ndPerson: Word('похрапываешь', 4),
  singular3rdPerson: Word('похрапывает', 4),
  plural1stPerson: Word('похрапываем', 4),
  plural2ndPerson: Word('похрапываете', 4),
  plural3rdPerson: Word('похрапывают', 4),
  masculinePast: Word('похрапывал', 4),
  femininePast: Word('похрапывала', 4),
  neuterPast: Word('похрапывало', 4),
  pluralPast: Word('похрапывали', 4),
  imperativeInformal: Word('похрапывай', 4),
  imperativeFormal: Word('похрапывайте', 4),
  imperfect: [],
};

perfectVerbs.set(похрапывать.name.text, похрапывать);

export { похрапывать };