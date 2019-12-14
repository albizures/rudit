import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почёсывать: PerfectVerb = {
  name: Word('почёсывать', 3),
  singular1stPerson: Word('почёсываю', 3),
  singular2ndPerson: Word('почёсываешь', 3),
  singular3rdPerson: Word('почёсывает', 3),
  plural1stPerson: Word('почёсываем', 3),
  plural2ndPerson: Word('почёсываете', 3),
  plural3rdPerson: Word('почёсывают', 3),
  masculinePast: Word('почёсывал', 3),
  femininePast: Word('почёсывала', 3),
  neuterPast: Word('почёсывало', 3),
  pluralPast: Word('почёсывали', 3),
  imperativeInformal: Word('почёсывай', 3),
  imperativeFormal: Word('почёсывайте', 3),
  imperfect: [],
};

perfectVerbs.set(почёсывать.name.text, почёсывать);

export { почёсывать };