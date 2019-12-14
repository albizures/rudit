import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пририсовывать: PerfectVerb = {
  name: Word('пририсовывать', 6),
  singular1stPerson: Word('пририсовываю', 6),
  singular2ndPerson: Word('пририсовываешь', 6),
  singular3rdPerson: Word('пририсовывает', 6),
  plural1stPerson: Word('пририсовываем', 6),
  plural2ndPerson: Word('пририсовываете', 6),
  plural3rdPerson: Word('пририсовывают', 6),
  masculinePast: Word('пририсовывал', 6),
  femininePast: Word('пририсовывала', 6),
  neuterPast: Word('пририсовывало', 6),
  pluralPast: Word('пририсовывали', 6),
  imperativeInformal: Word('пририсовывай', 6),
  imperativeFormal: Word('пририсовывайте', 6),
  imperfect: [],
};

perfectVerbs.set(пририсовывать.name.text, пририсовывать);

export { пририсовывать };