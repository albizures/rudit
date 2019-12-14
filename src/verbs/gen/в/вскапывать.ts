import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскапывать: PerfectVerb = {
  name: Word('вскапывать', 3),
  singular1stPerson: Word('вскапываю', 3),
  singular2ndPerson: Word('вскапываешь', 3),
  singular3rdPerson: Word('вскапывает', 3),
  plural1stPerson: Word('вскапываем', 3),
  plural2ndPerson: Word('вскапываете', 3),
  plural3rdPerson: Word('вскапывают', 3),
  masculinePast: Word('вскапывал', 3),
  femininePast: Word('вскапывала', 3),
  neuterPast: Word('вскапывало', 3),
  pluralPast: Word('вскапывали', 3),
  imperativeInformal: Word('вскапывай', 3),
  imperativeFormal: Word('вскапывайте', 3),
  imperfect: [],
};

perfectVerbs.set(вскапывать.name.text, вскапывать);

export { вскапывать };