import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всхрапывать: PerfectVerb = {
  name: Word('всхрапывать', 4),
  singular1stPerson: Word('всхрапываю', 4),
  singular2ndPerson: Word('всхрапываешь', 4),
  singular3rdPerson: Word('всхрапывает', 4),
  plural1stPerson: Word('всхрапываем', 4),
  plural2ndPerson: Word('всхрапываете', 4),
  plural3rdPerson: Word('всхрапывают', 4),
  masculinePast: Word('всхрапывал', 4),
  femininePast: Word('всхрапывала', 4),
  neuterPast: Word('всхрапывало', 4),
  pluralPast: Word('всхрапывали', 4),
  imperativeInformal: Word('всхрапывай', 4),
  imperativeFormal: Word('всхрапывайте', 4),
  imperfect: [],
};

perfectVerbs.set(всхрапывать.name.text, всхрапывать);

export { всхрапывать };