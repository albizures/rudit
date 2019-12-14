import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пританцовывать: PerfectVerb = {
  name: Word('пританцовывать', 7),
  singular1stPerson: Word('пританцовываю', 7),
  singular2ndPerson: Word('пританцовываешь', 7),
  singular3rdPerson: Word('пританцовывает', 7),
  plural1stPerson: Word('пританцовываем', 7),
  plural2ndPerson: Word('пританцовываете', 7),
  plural3rdPerson: Word('пританцовывают', 7),
  masculinePast: Word('пританцовывал', 7),
  femininePast: Word('пританцовывала', 7),
  neuterPast: Word('пританцовывало', 7),
  pluralPast: Word('пританцовывали', 7),
  imperativeInformal: Word('пританцовывай', 7),
  imperativeFormal: Word('пританцовывайте', 7),
  imperfect: [],
};

perfectVerbs.set(пританцовывать.name.text, пританцовывать);

export { пританцовывать };