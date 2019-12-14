import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загрунтовывать: PerfectVerb = {
  name: Word('загрунтовывать', 7),
  singular1stPerson: Word('загрунтовываю', 7),
  singular2ndPerson: Word('загрунтовываешь', 7),
  singular3rdPerson: Word('загрунтовывает', 7),
  plural1stPerson: Word('загрунтовываем', 7),
  plural2ndPerson: Word('загрунтовываете', 7),
  plural3rdPerson: Word('загрунтовывают', 7),
  masculinePast: Word('загрунтовывал', 7),
  femininePast: Word('загрунтовывала', 7),
  neuterPast: Word('загрунтовывало', 7),
  pluralPast: Word('загрунтовывали', 7),
  imperativeInformal: Word('загрунтовывай', 7),
  imperativeFormal: Word('загрунтовывайте', 7),
  imperfect: [],
};

perfectVerbs.set(загрунтовывать.name.text, загрунтовывать);

export { загрунтовывать };