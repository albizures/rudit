import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебинтовывать: PerfectVerb = {
  name: Word('перебинтовывать', 8),
  singular1stPerson: Word('перебинтовываю', 8),
  singular2ndPerson: Word('перебинтовываешь', 8),
  singular3rdPerson: Word('перебинтовывает', 8),
  plural1stPerson: Word('перебинтовываем', 8),
  plural2ndPerson: Word('перебинтовываете', 8),
  plural3rdPerson: Word('перебинтовывают', 8),
  masculinePast: Word('перебинтовывал', 8),
  femininePast: Word('перебинтовывала', 8),
  neuterPast: Word('перебинтовывало', 8),
  pluralPast: Word('перебинтовывали', 8),
  imperativeInformal: Word('перебинтовывай', 8),
  imperativeFormal: Word('перебинтовывайте', 8),
  imperfect: [],
};

perfectVerbs.set(перебинтовывать.name.text, перебинтовывать);

export { перебинтовывать };