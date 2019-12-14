import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почёсывать: PerfectVerb = {
  name: Word('почёсывать', 7),
  singular1stPerson: Word('почёсываю', 7),
  singular2ndPerson: Word('почёсываешь', 7),
  singular3rdPerson: Word('почёсывает', 7),
  plural1stPerson: Word('почёсываем', 7),
  plural2ndPerson: Word('почёсываете', 7),
  plural3rdPerson: Word('почёсывают', 7),
  masculinePast: Word('почёсывал', 7),
  femininePast: Word('почёсывала', 7),
  neuterPast: Word('почёсывало', 7),
  pluralPast: Word('почёсывали', 7),
  imperativeInformal: Word('почёсывай', 7),
  imperativeFormal: Word('почёсывайте', 7),
  imperfect: [],
};

perfectVerbs.set(почёсывать.name.text, почёсывать);

export { почёсывать };