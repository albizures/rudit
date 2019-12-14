import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перелицовывать: PerfectVerb = {
  name: Word('перелицовывать', 7),
  singular1stPerson: Word('перелицовываю', 7),
  singular2ndPerson: Word('перелицовываешь', 7),
  singular3rdPerson: Word('перелицовывает', 7),
  plural1stPerson: Word('перелицовываем', 7),
  plural2ndPerson: Word('перелицовываете', 7),
  plural3rdPerson: Word('перелицовывают', 7),
  masculinePast: Word('перелицовывал', 7),
  femininePast: Word('перелицовывала', 7),
  neuterPast: Word('перелицовывало', 7),
  pluralPast: Word('перелицовывали', 7),
  imperativeInformal: Word('перелицовывай', 7),
  imperativeFormal: Word('перелицовывайте', 7),
  imperfect: [],
};

perfectVerbs.set(перелицовывать.name.text, перелицовывать);

export { перелицовывать };