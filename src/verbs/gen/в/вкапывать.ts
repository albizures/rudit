import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вкапывать: PerfectVerb = {
  name: Word('вкапывать', 2),
  singular1stPerson: Word('вкапываю', 2),
  singular2ndPerson: Word('вкапываешь', 2),
  singular3rdPerson: Word('вкапывает', 2),
  plural1stPerson: Word('вкапываем', 2),
  plural2ndPerson: Word('вкапываете', 2),
  plural3rdPerson: Word('вкапывают', 2),
  masculinePast: Word('вкапывал', 2),
  femininePast: Word('вкапывала', 2),
  neuterPast: Word('вкапывало', 2),
  pluralPast: Word('вкапывали', 2),
  imperativeInformal: Word('вкапывай', 2),
  imperativeFormal: Word('вкапывайте', 2),
  imperfect: [],
};

perfectVerbs.set(вкапывать.name.text, вкапывать);

export { вкапывать };