import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегрунтовывать: PerfectVerb = {
  name: Word('перегрунтовывать', 9),
  singular1stPerson: Word('перегрунтовываю', 9),
  singular2ndPerson: Word('перегрунтовываешь', 9),
  singular3rdPerson: Word('перегрунтовывает', 9),
  plural1stPerson: Word('перегрунтовываем', 9),
  plural2ndPerson: Word('перегрунтовываете', 9),
  plural3rdPerson: Word('перегрунтовывают', 9),
  masculinePast: Word('перегрунтовывал', 9),
  femininePast: Word('перегрунтовывала', 9),
  neuterPast: Word('перегрунтовывало', 9),
  pluralPast: Word('перегрунтовывали', 9),
  imperativeInformal: Word('перегрунтовывай', 9),
  imperativeFormal: Word('перегрунтовывайте', 9),
  imperfect: [],
};

perfectVerbs.set(перегрунтовывать.name.text, перегрунтовывать);

export { перегрунтовывать };